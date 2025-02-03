import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { v4 as uuidv4 } from "uuid";

const BookSwap = () => {
  const [cards, setCards] = useState([]);

  const getBooksApi = () => {
    fetch("http://localhost:8080/book/books2read?idReader=1")
      .then((response) => response.json())
      .then((data) => {
        const arrNuev = data.map((book) => {
          const bookNuev = {
            id: uuidv4(),
            idBook: book.idBook,
            title: book.title,
            author: book.author,
            description: book.description,
            cover: book.cover,
          };
          return bookNuev;
        });
        setCards(arrNuev);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getBooksApi();
  }, []);

  const checkCards = (_cards) => {
    console.log(cards.length)
    if (cards.length == 1) {
      getBooksApi();
    } else {
      setCards(_cards);
    }
  };

  return (
    <div className="grid place-items-center">
      {cards.map((card) => {
        return (
          <BookCard
            key={card.id}
            cards={cards}
            setCards={checkCards}
            {...card}
          ></BookCard>
        );
      })}
    </div>
  );
};

export default BookSwap;
