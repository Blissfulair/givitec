export interface Transaction {
    id:number;
    name:string;
    phone:string;
    email:string;
    service:string;
    package:number;
    additionals:JSON;
    amount:number;
}
