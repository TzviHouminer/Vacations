export class Holiday{
    id:number;
    destination:string;
    description:string;
    startDate: Date;
    endDate: Date;
    price: number;
    img:  string;

    constructor(holiday:Holiday){
        this.id = holiday.id;
        this.destination = holiday.destination;
        this.description = holiday.description;
        this.startDate = holiday.startDate;
        this.endDate = holiday.endDate;
        this.price = holiday.price;
        this.img = holiday.img;
    }
}