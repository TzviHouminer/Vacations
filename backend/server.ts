import express from "express";
import cors from "cors";
import ErrorHandler from "./MiddleWare/route-not-found";
import config from "./Utils/Config";
import loginRouter from "./Routes/LoginRouter";
import fileUpload from "express-fileupload";
import userRouter from "./Routes/UserRouter";
import adminRouter from "./Routes/AdminRouter";

const server = express();

server.use(cors());
server.use(express.json());

server.use('/photos',express.static("photos"));
// listing on http://localhost:5000(congig.webPort)/photos/[fileName]

server.use(fileUpload({createParentPath: true}))

server.use("/api/v1/login",loginRouter);
server.use("/api/v1/holidays",userRouter);
server.use("/api/v1/admin/holidays",adminRouter);
server.use("*",ErrorHandler)

server.listen(config.webPort, ()=>{
    console.log(`listing on http://localhost:${config.webPort}/api/v1/`)
})