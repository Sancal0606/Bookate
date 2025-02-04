import React from "react";
import styles from "./BookMatch.module.css";
import { getImageUrl } from "../../utils";
import BookItem from "./BookItem";


const BookMatch = ({books}) => {
 
  return (
    <div className={styles.match}>
      <div className={styles.list}>
        {books.map((book) => {
          return (
            <BookItem
              key={book.id}
              author={book.author}
              title={book.title}
            ></BookItem>
          );
        })}
      </div>
      <img className={styles.icon} src={getImageUrl("book_icon.png")} />
    </div>
  );
};

export default BookMatch;
