export interface Iproducts{
    pname: string;
    pdetails: string;
    pid: string;
    pstatus: PStatus;
}

export enum PStatus{
    InProgress ="InProgress",
    Dispatched ="Dispatched ",
    Delivered ="Delivered"
}