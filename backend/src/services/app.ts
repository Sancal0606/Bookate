import dotenv from "dotenv";
import Server from "../providers/Server";
import { PORT, NODE_ENV } from "../config";
import express from "express";
import cors from "cors";
import BookController from "../controllers/BookController";
import ReaderController from "../controllers/ReaderController";

const server = new Server({
  port: 8080,
  env: NODE_ENV,
  middlewares: [express.json(), express.urlencoded({ extended: true }), cors()],
  controllesrs: [BookController.instance,ReaderController.instance],
});

declare global {
    namespace Express{
        interface Request{
            user:string,
            token: string;
        }
    }
}
server.init();
