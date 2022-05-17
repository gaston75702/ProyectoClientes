import{Request,response,Response} from 'express';
import clientesIndexRoutes from '../routes/clientesIndexRoutes';
import pool from '../database';

class ClienteController{
    public async list(req:Request, res:Response){
        const clientes=await pool.query('SELECT * FROM clientes');
        res.json(clientes);
    }
    public async getById(req:Request ,res:Response):Promise<any>{
        
        const {id}=req.params;
        const clientes =await pool.query('SELECT * FROM clientes WHERE id=?',[id]);
        if(clientes.length >0){
          return res.json(clientes[0]);
        }
        res.status(400).json({text:'cliente no encontrado'});
    }

    public async delete(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('DELETE FROM clientes WHERE id=?',[id]);
        
    }  

    
}
export const clientesController = new ClienteController();

