import User from "../Models/User";
import dal_mysql from "../Utils/dal_mysql";
import { OkPacket } from "mysql";

const register = async(newUser:User) =>{
    const SQLcmd = `INSERT INTO users (firstName,lastName,email,password)
    VALUES ('${newUser.firstName}', '${newUser.lastName}', '${newUser.email}', '${newUser.password}')`;
    const result:OkPacket = await dal_mysql.execute(SQLcmd)
    return result.insertId;
}

const checkLogin = async(userLogin:User) =>{
    const SQLcmd =  `SELECT users.role,users.userID, CONCAT(users.firstName,' ',users.lastName) as fullName FROM users WHERE email='${userLogin.email}' AND password='${userLogin.password}'`;
    const result = await dal_mysql.execute(SQLcmd); 
    return result.length<1 ? false : result // return false if false increments; return users info if correct increments.
}

const isEmailAvailable = async (email:string) => {
    const SQLcmd = `SELECT users.email FROM users WHERE email='${email}'`;
    const result = await dal_mysql.execute(SQLcmd);
    return result==0; // true if the result is an empty array; false if its contains array of the same email that exist.
}

export {register, checkLogin, isEmailAvailable};