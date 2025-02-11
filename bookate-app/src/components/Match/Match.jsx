import React from "react";
import styles from "./Match.module.css";
import { useEffect, useState } from "react";
import BookMatch from "./BookMatch";
import { v4 as uuidv4 } from "uuid";

const Match = ({ idUser }) => {
  const [matchUser, setMatch] = useState("");
  const [books, setBooks] = useState([]);
  const [idMatch, setIdMatch] = useState("");

  const modifyMatch = (event) => {
    setMatch(event.target.value);
  };

  const getMatch = () => {
    fetch(`http://localhost:8080/reader/id?mail=${matchUser}`)
      .then((response) => response.json())
      .then((data) => {
        setIdMatch(data);
        console.log(data);
        getMatchAux(data);
      })
      .catch((error) => console.log(error));
   
  };

  const getMatchAux = (data) => {
    console.log(data);
    fetch(
      `http://localhost:8080/book/match?idReader1=${idUser}&idReader2=${data}`
    )
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
  }

  return (
    <section id="match" className={styles.section}>
      <div className={styles.matchContainer}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="match with"
            onChange={modifyMatch}
          ></input>
        </div>
        <div className={styles.title} onClick={getMatch}>
          Match
        </div>
      </div>

      <BookMatch books={books}></BookMatch>
    </section>
  );
};

export default Match;
