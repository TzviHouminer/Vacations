import express, { NextFunction, Request, Response } from "express";
import User from "../Models/User";
import { checkLogin, isEmailAvailable, register } from "../Logic/LoginLogic";

const loginRouter = express.Router();

loginRouter.post(`/checkLogin`,
    async(request:Request, response:Response, next:NextFunction)=>{
        const userLogin:User = request.body;
        if (await checkLogin(userLogin)){
            let result = await checkLogin(userLogin);
            return response.status(200).json(result);
        }
        return response.status(401).json("wrong");
    }
)

loginRouter.post('/register',
    async(request:Request, response:Response, next:NextFunction)=>{
        const newUser:User = request.body;
        const available = await isEmailAvailable(newUser.email);
        if(!available){
            return response.status(409).json({error:"email already exist"})
        }
        return response.status(201).json(await register(newUser));
    }
)

export default loginRouter;