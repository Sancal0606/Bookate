import { Request, Response } from "express";
import AbstractController from './AbstractController'
import db from "../models"

class BookController extends AbstractController{
    private static _instance: BookController;
    public static get instance(): BookController{
        if(this._instance){
            return this._instance;
        }
        this._instance = new BookController("book");
        return this._instance;
    }

    protected initializeRoutes(): void {
        this.router.get("/all",this.getAll.bind(this));
    }

    private async getAll(req: Request, res: Response){
        let books = await db["book"].findAll();
        res.status(200).json(books);
    }
}
export default BookController;