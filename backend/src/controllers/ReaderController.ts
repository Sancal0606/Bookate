import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models";

class ReaderController extends AbstractController {
  private static _instance: ReaderController;
  public static get instance(): ReaderController {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new ReaderController("reader");
    return this._instance;
  }

  protected initializeRoutes(): void {
    this.router.post("/assign", this.postAssignBook.bind(this));
    this.router.post("/user",this.postUser.bind(this));
    this.router.get("/login",this.getLogIn.bind(this));
  }

  private async postAssignBook(req: Request, res: Response) {
    console.log("Assign")
    console.log(req.body);
    try {
      const asign = await db["bookReader"].create(req.body);
      console.log("Assign Success");
      res.status(200).json("Assign Success");
    } catch (err) {
      console.log("error");
      console.log(err);
      res.status(500).send("Error on Reader controller");
    }
  }

  private async postUser(req: Request, res: Response) {
    console.log("Here");
    console.log(req.body);
    try {
      const assign = await db["reader"].create(req.body);
      res.status(200).json("User Assign Success");
      console.log("Usuario creado");
    } catch (err) {
      console.log("error");
      console.log(err);
      res.status(500).send("Error on Reader controller");
    }
  }

  private async getLogIn(req: Request, res: Response) {
    try {
      const { Op } = require("sequelize");

      const input_mail = req.query.mail;
      const input_password = req.query.password;

      const finalUser = await db["reader"].findOne({
        where: {
          [Op.and]: [
            { mail: input_mail },
            { password: input_password },
          ],
        },
      });

      if (finalUser === null) {
        console.log("User not found");
        res.status(500).json("User not found");
      } else {
        console.log("User found");
        res.status(200).json("User found");
      }
    } catch (err) {
      console.log("error");
      console.log(err);
      res.status(500).send("Error on Reader controller");
    }
  }
}

export default ReaderController;
