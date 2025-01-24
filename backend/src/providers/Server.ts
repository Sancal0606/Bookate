import express, {Application} from 'express'
import AbstractController from '../controllers/AbstractController';
import db from "../models"

class Server{
    private app!: Application;
    private port!: number;
    private env!: string;

    constructor(appInit: {
        port:number;
        env: string;
        middlewares: any[];
        controllesrs: AbstractController[];
    }){
        this.app = express();
        this.port = appInit.port;
        this.env = appInit.env;
        this.loadMiddlewares(appInit.middlewares);
        this.loadRoutes(appInit.controllesrs);
        this.connectDB();
    }

    private loadRoutes(controllers: AbstractController[]){
        this.app.get("/",(req,res) => {
            res.send("Prueba de estado");
        });
        controllers.forEach((controller) => {
            this.app.use(`/${controller.prefix}`, controller.router);
        })
    }

    private async connectDB(){
        await db.sequelize.sync();
    }

    private loadMiddlewares(middlewares: any[]){
        middlewares.forEach((middleware) => {
            this.app.use(middleware);
        })
    }

    public init(){
        this.app.listen(this.port,() => {
            console.log(' Server corriendo en puerto ' + this.port );
        });
    }
}
export default Server;