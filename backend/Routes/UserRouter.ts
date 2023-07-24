import express, { NextFunction, Request, Response } from "express";
import { addFollow, getAllHolidays, getFollows, getNumFollowers, removeFollow } from "../Logic/UserLogic";

const userRouter = express.Router();

userRouter.get("/getAllHolidays",
    async (request:Request, response:Response, next:NextFunction)=>{
        return response.status(200).json(await getAllHolidays());
})

userRouter.get("/getNumFollowers",
    async (request:Request, response:Response, next:NextFunction)=>{
    return response.status(200).json(await getNumFollowers());
})

userRouter.get("/getHolidaysFollowed/:userID",
    async (request:Request, response:Response, next:NextFunction)=>{
    const userID = request.params.userID;
    return response.status(200).json(await getFollows(userID));
})

userRouter.post("/addFollow",
    async (request:Request, response:Response, next:NextFunction)=>{
        const info:{'userID':number,'holidayID':number} = request.body;
        return response.status(201).json(await addFollow(info.userID,info.holidayID))
})

userRouter.delete("/removeFollow/:userID/:holidayID",
    async (request:Request, response:Response, next:NextFunction)=>{
        const userID =  request.params.userID;
        const holidayID = request.params.holidayID;
        return response.status(200).json(await removeFollow(userID,holidayID))
})

export default userRouter;