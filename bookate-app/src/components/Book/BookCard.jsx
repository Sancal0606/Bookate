import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import styles from "./BookCard.module.css";
import TextTruncate from "react-text-truncate"; // recommend
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

import { getImageUrl } from "../../utils";
import { body } from "motion/react-client";
const BookCard = ({
  id,
  idBook,
  author,
  title,
  cover,
  description,
  cards,
  setCards,
}) => {
  const x = useMotionValue(0);

  const opacity = useTransform(x, [-500, 0, 500], [0.3, 1, 0.3]);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 2 : -2;
    return `${rotateRaw.get() + offset}deg`;
  });

  const optionsLeft = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ idBook, idReader: 2, isInterest: "false" }),
  };

  const optionsRight = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ idBook, idReader: 2, isInterest: "true" }),
  };

  const handleDragEnd = () => {
    console.log(title);
    if (Math.abs(x.get()) > 50) {
      const arrCartas = cards.filter((card) => card.id !== id);
      setCards(arrCartas);
      if (x.get() > 50) {
        SendRight();
      }
      if (x.get() < 50) {
        SendLeft();
      }
    }
  };

  const SendRight = () => {
    console.log(optionsRight.body);
    fetch("http://localhost:8080/reader/assign", optionsRight)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const SendLeft = () => {
    console.log(optionsLeft.body);
    fetch("http://localhost:8080/reader/assign", optionsLeft)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{
        gridRow: "1",
        gridColumn: "1",
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
      }}
      className="hover:cursor-grab active:cursor-grabbing origin"
      onClick={() => {
        console.log("A");
      }}
      onDragEnd={handleDragEnd}
    >
      <div className={styles.card}>
        <Box sx={{ width: 400, margin: "20px" }}>
          <h2 className={styles.author}>{author}</h2>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{description}</p>
        </Box>
        <img
          style={{
            height: 300,
            margin: "20px",
            justifySelf: "center",
            objectFit: "cover",
          }}
          src={cover}
          title="green iguana"
        />
      </div>
    </motion.div>
  );
};

export default BookCard;
