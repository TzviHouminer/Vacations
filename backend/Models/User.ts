export default class User{
    public userId: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public role: string = 'user';

    constructor(firstName:string, lastName:string, email:string, password:string, role:string, userId:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.userId = userId;
    }
}