import{Request,Response} from 'express';
import pool from '../database';

class ClienteDetalleController{
   
    public async getById(req:Request ,res:Response):Promise<any>{
        
        const {id}=req.params;
        const clientes =await pool.query('SELECT * FROM clientes WHERE id=?',[id]);
        if(clientes.length > 0){
          return res.json(clientes[0]);
        }
        res.status(400).json({text:'cliente no encontrado'});
    }
}
export const clienteDetalleController = new ClienteDetalleController();