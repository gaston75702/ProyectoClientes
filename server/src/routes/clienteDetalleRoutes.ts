import { Router } from "express";
import {clienteDetalleController} from "../controllers/clienteDetalleCotrollers";

class DetalleClienteRoutes{
    public router:Router =Router();
    constructor(){   
        this.config();
    }
    config():void{
    
        this.router.get('/:id',clienteDetalleController.getById);

    }

}

const customerDetailRoutes=new DetalleClienteRoutes();
export default customerDetailRoutes.router;