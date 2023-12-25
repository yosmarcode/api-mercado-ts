// import 

import express, {Express, Request, Response} from "express"
import * as dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors"
import router from "./routers/inde.routes";

dotenv.config();

const PORT = parseInt(process.env.PORT as string, 10) || 4001;

// declarando express
const server: Express = express()

// usando app
server.use(express.json())
server.use(express.urlencoded({extended : true}))
server.use(cors())
server.use(helmet())

// import router

server.use("/api/v1/", router);

server.get("/", (req: Request, res: Response) =>{
    res.send(`⚡️[server]: Server is running at http://localhost:${PORT}`);
})



// liten
server.listen(PORT, ()=> {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
})

