import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models";

class BookController extends AbstractController {
  private static _instance: BookController;
  public static get instance(): BookController {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new BookController("book");
    return this._instance;
  }

  protected initializeRoutes(): void {
    this.router.get("/all", this.getAll.bind(this));
    this.router.get("/books2read", this.get10.bind(this));
    this.router.get("/match", this.matchBooks.bind(this));
    this.router.post("/create", this.createBook.bind(this));
  }

  private async getAll(req: Request, res: Response) {
    let books = await db["book"].findAll();
    res.status(200).json(books);
  }

  private async get10(req: Request, res: Response) {
    try {
      const { Op } = require("sequelize");
      const idReaderTarget = req.query.idReader;
      console.log("consultando libros del reader ->>" + idReaderTarget);
      const booksReadByReader = await db["bookReader"].findAll({
        attributes: ["idBook"],
        where: { idReader: idReaderTarget },
      });
      const readBooksIds = booksReadByReader.map((book: any) => book.idBook);

      const books = await db["book"].findAll({
        where: {
          idBook: { [Op.notIn]: readBooksIds },
        },
        limit: 10,
      });
      res.status(200).json(books);
    } catch (err) {
      console.log("error");
      console.log(err);
      res.status(500).send("Error on Book controller");
    }
  }

  private async matchBooks(req: Request, res: Response) {
    try {
      const { Op } = require("sequelize");
      const idReader1Target = req.query.idReader1;
      const idReader2Target = req.query.idReader2;
      console.log(
        "consultando libros del reader ->>" +
          idReader1Target +
          "," +
          idReader2Target
      );

      const booksReadByReader1 = await db["bookReader"].findAll({
        attributes: ["idBook"],
        where: {
          [Op.and]: [{ idReader: idReader1Target }, { isInterest: true }],
        },
      });
      const booksReadByReader2 = await db["bookReader"].findAll({
        attributes: ["idBook"],
        where: {
          [Op.and]: [{ idReader: idReader2Target }, { isInterest: true }],
        },
      });

      const readBooks1Ids = booksReadByReader1.map((book: any) => book.idBook);
      const readBooks2Ids = booksReadByReader2.map((book: any) => book.idBook);

      const books = await db["book"].findAll({
        where: {
          [Op.and]: [
            { idBook: { [Op.in]: readBooks1Ids } },
            { idBook: { [Op.in]: readBooks2Ids } },
          ],
        },
        limit: 5,
      });
      res.status(200).json(books);
    } catch (err) {
      console.log("error");
      console.log(err);
      res.status(500).send("Error on Book controller");
    }
  }

  private async createBook(req: Request, res: Response) {
    try {
      const asign = await db["book"].create(req.body);
      console.log("Assign Success");
      res.status(200).json("Assign Success");
    } catch (err) {
      console.log("error");
      console.log(err);
      res.status(500).send("Error on Book controller");
    }
  }
}
export default BookController;
