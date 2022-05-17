import { Router } from "express";
import {clientesController} from '../controllers/clientesIndexControllers'

class ClientesRoutes{
    public router:Router =Router();
    constructor(){   
        this.config();
    }
    config():void{
        this.router.get('/',clientesController.list);
        this.router.delete('/:id',clientesController.delete);
        
    }

}

const clientesRoutes=new ClientesRoutes();
export default clientesRoutes.router;