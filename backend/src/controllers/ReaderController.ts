import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models"

class ReaderController extends AbstractController{
    private static _instance: ReaderController;
    public static get instance(): ReaderController{
        if(this._instance){
            return this._instance;
        }
        this._instance = new ReaderController("reader");
        return this._instance;
    }

    protected initializeRoutes(): void {
        this.router.post("/assign",this.postAssignBook.bind(this));
    }

    private async postAssignBook(req: Request, res:Response){
        console.log(req.body);
        try{
            const asign = await db["bookReader"].create(req.body);
            console.log("Assign Success");
            res.status(200).json("Assign Success");
        }catch(err){
            console.log("error");
            console.log(err);
            res.status(500).send("Error on Reader controller")
        }
    }

}

export default ReaderController;