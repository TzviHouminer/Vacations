import express, { NextFunction, Request, Response } from "express";
import { addNewHoliday, deleteHoliday, getHolidayById, getNumFollowers, updateHoliday } from "../Logic/AdminLogic";
import { UploadedFile } from "express-fileupload";
import { Holiday } from "../Models/Holiday";

const adminRouter = express.Router();

adminRouter.post("/addNewHoliday",
async(request:Request, response:Response)=>{
    const newHoliday = request.body;
    return response.status(200).json(await addNewHoliday(newHoliday))
})

adminRouter.post("/uploadPhoto", 
    async (request:Request, response:Response,next:NextFunction)=>{
        if(request.files && Object.keys(request.files).length > 0){
            //if got file.
            const uploadPhoto = request.files.file as UploadedFile;
            uploadPhoto.mv(`./photos/${uploadPhoto.name}`,(err) => {
                if(err){
                //if got file but got an error trying upload to the folder.
                console.log("error:\n",err);
                return response.status(500).json({error:'File upload failed (got file but failed).'})
                }
                //works!!!
                return response.status(200).json({msg:"file is uploaded."})
            });
        }else{
        //if didn't got file.
        return response.status(400).json({error:'No files were uploaded(did not got file).'})}
})

adminRouter.get("/getHolidayById/:id",
    async (request:Request, response:Response,next:NextFunction)=>{
        const holidayID = request.params.id;
        return response.status(200).json(await getHolidayById(holidayID));
})

adminRouter.put("/updateHoliday",
    async (request:Request, response:Response,next:NextFunction)=>{
        const updated = request.body;
        return response.status(200).json(await updateHoliday(updated));
})

adminRouter.delete("/deleteHolidayById/:holidayID",
    async (request:Request, response:Response,next:NextFunction)=>{
        const holidayID = request.params.holidayID;
        return response.status(200).json(await deleteHoliday(holidayID));
})

adminRouter.get("/getNumFollowers",
    async (request:Request, response:Response, next:NextFunction)=>{
    return response.status(200).json(await getNumFollowers());
})

export default adminRouter;