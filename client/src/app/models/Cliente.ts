import { EmailValidator } from "@angular/forms";

export interface Cliente{
    id?:number;
    first_name?:string;
    last_name?:string;
    email?:string;
    gender?:string;
    image?:string;
    
}

export const Clientes: Cliente[] =[
    {
        id:24,
        first_name:"mario",
        last_name:"junie",
        email:"mario45@hotmail.com",
        gender:"Masculino",
        image:"https://th.bing.com/th/id/R.00d8561e25272ab78efce0ce683c32eb?rik=8p%2fLL4aZ7nchEg&pid=ImgRaw&r=0"
    },
    {
        id:25,
        first_name:"lola",
        last_name:"reiner",
        email:"lolarein15@hotmail.com",
        gender:"Femenino",
        image:"https://th.bing.com/th/id/R.00d8561e25272ab78efce0ce683c32eb?rik=8p%2fLL4aZ7nchEg&pid=ImgRaw&r=0"
    },
    {
        id:26,
        first_name:"juan",
        last_name:"deriln",
        email:"jueanderli17@hotmail.com",
        gender:"Masculino",
        image:"https://th.bing.com/th/id/R.00d8561e25272ab78efce0ce683c32eb?rik=8p%2fLL4aZ7nchEg&pid=ImgRaw&r=0"
    },
    
]