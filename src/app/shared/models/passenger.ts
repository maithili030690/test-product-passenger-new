export interface Ipassengers{
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: number|null;
    children: null|Array<Ichild>;
}
export interface Ichild{
    name:string;
    age:number
}