import { OkPacket } from "mysql";
import {Holiday} from "../Models/Holiday";
import dal_mysql from "../Utils/dal_mysql";

const addNewHoliday = async (newHoliday:Holiday) => {
    const SQLcmd = `INSERT INTO holidays (destination, description, startDate, endDate, price, img) 
    VALUES ('${newHoliday.destination}', '${newHoliday.description}', '${newHoliday.startDate}', '${newHoliday.endDate}', ${newHoliday.price}, '${newHoliday.img}')`;
    const result:OkPacket = await dal_mysql.execute(SQLcmd);
    return result.insertId
}

const getHolidayById = async(holidayID:any):Promise<Holiday> => {
    const SQLcmd = `SELECT holidayID,destination,description,price,img,
    DATE_FORMAT(startDate, '%Y-%m-%d') AS startDate,
    DATE_FORMAT(endDate, '%Y-%m-%d') AS endDate
    FROM holidays WHERE holidayID=${holidayID}`;
    const holidayList = await dal_mysql.execute(SQLcmd);
    return holidayList[0];
}

const updateHoliday = async(updated:Holiday) => {
    const SQLcmd = `UPDATE holidays 
    SET destination='${updated.destination}', description='${updated.description}',
    startDate='${updated.startDate}', endDate='${updated.endDate}',
    price=${updated.price}, img='${updated.img}' WHERE (holidayID = ${updated.id})`
    const result:OkPacket = await dal_mysql.execute(SQLcmd);
    return result.insertId
}

const deleteHoliday = async(holidayID:any) => {
    const SQLcmd = `DELETE FROM holidays WHERE holidayId=${holidayID}`;
    const result:OkPacket = await dal_mysql.execute(SQLcmd);
    return result.affectedRows
}

const getNumFollowers = async () => {
    //ask sql for two columns, destination name, and how many followers it has.
    //notice the key is holidayID in both tables, but it doesn't shown in the Selected table we get.
    const SQLcmd = `SELECT holidays.destination, count(followers.userID) as followers
    FROM followers join holidays on followers.holidayID = holidays.holidayID
    group by holidays.destination`;
    const followers = await dal_mysql.execute(SQLcmd);
    return followers;
}

export {addNewHoliday, getHolidayById, updateHoliday, deleteHoliday, getNumFollowers}