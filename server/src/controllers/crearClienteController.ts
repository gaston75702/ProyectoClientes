import{Request,Response} from 'express';
import pool from '../database';

class CrearClienteController{

    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO clientes set ?',[req.body])
        
        res.json({text:'Cliente Creado'});
    }
}
export const crearClienteController = new CrearClienteController();