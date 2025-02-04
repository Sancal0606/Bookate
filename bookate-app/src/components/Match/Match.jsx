import React from "react";
import styles from "./Match.module.css";
import { useEffect, useState } from "react";
import BookMatch from "./BookMatch";
import { v4 as uuidv4 } from "uuid";

const Match = () => {
  const [books, setBooks] = useState([]);
  const getMatch = () => {
    console.log("Match");

    fetch("http://localhost:8080/book/match?idReader1=1&idReader2=2")
      .then((response) => response.json())
      .then((data) => {
        const arrNuev = data.map((book) => {
          const bookNuev = {
            id: uuidv4(),
            title: book.title,
            author: book.author,
          };
          return bookNuev;
        });
        setBooks(arrNuev);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section id="match" className={styles.section}>
      <div
        className={styles.title}
        onClick={getMatch}
      >
        Match
      </div>
      <BookMatch books={books}></BookMatch>
    </section>
  );
};

export default Match;
