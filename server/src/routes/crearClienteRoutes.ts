import { Router } from "express";
import {crearClienteController} from '../controllers/crearClienteController'

class CrearClienteRoutes{
    public router:Router =Router();
    constructor(){   
        this.config();
    }
    config():void{
        
        this.router.post('/',crearClienteController.create);
    }

}

const crearClienteRoutes=new CrearClienteRoutes();
export default crearClienteRoutes.router;