import express,{Application}from 'express';
import clientesIndexRoutes from './routes/clientesIndexRoutes';
import clienteDetalleRoutes from './routes/clienteDetalleRoutes';
import crearClienteRoutes from './routes/crearClienteRoutes';
import morgan from 'morgan';
import cors from 'cors';


class Server{
   public app:Application;

    constructor()
    {
        this.app=express();
        this.config();
        this.routes();
    }
    config(): void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));


    }
    routes():void{
        this.app.use('/',clientesIndexRoutes);
        this.app.use('/cliente',clienteDetalleRoutes)
        this.app.use('/cliente/crear',crearClienteRoutes)

    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('server on port',this.app.get('port'));
        });
    }

}

const server=new Server();
server.start();