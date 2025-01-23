import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

import { getImageUrl } from "../utils";
const BookCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 800,
        height: 400,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: 400, margin: "20px" }}>
        <h2>Brandon Sanderson</h2>
        <h1>El imperio final</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        </h4>
      </Box>
      <CardMedia
        sx={{ height: 300, width: 300, margin: "0px" , justifySelf:'center'}}
        image={getImageUrl("brandon.jpg")}
        title="green iguana"
      />
    </Card>
  );
};

export default BookCard;
