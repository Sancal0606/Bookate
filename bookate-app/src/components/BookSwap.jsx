import React, { useState } from "react";
import BookCard from "./BookCard";

const books = [
  {
    id: 0,
    author: "Brandon Sanderson 1",
    title: "Imperio Final",
    cover: "brandon.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 1,
    author: "Brandon Sanderson 2",
    title: "El pozo de ascención",
    cover: "pozo.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 2,
    author: "Brandon Sanderson 3",
    title: "El heroe de las eras",
    cover: "heroe.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
];

const BookSwap = () => {
  const [cards, setCards] = useState(books);
  return (
    <div className="grid place-items-center">
      {cards.map((card) => {
        return (
          <BookCard
            key={card.id}
            cards={cards}
            setCards={setCards}
            {...card}
          ></BookCard>
        );
      })}
    </div>
  );
};

export default BookSwap;
