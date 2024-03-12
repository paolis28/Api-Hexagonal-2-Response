import express from 'express';
import {correrBaseDatos} from './database/database';
import {Signale} from 'signale';
import helmet from 'helmet';
import cors from "cors";

import { registroRouter } from './Transaccion-Notificacion/Infraestructura/routes/registro.routes';

const app = express();

const options = {
    secrets: ["([0-9]{4}-?)+"]
};

const signale = new Signale(options);

app.use(helmet());
app.use(express.json()); 
app.use(cors());
app.use("/mensaje", registroRouter)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

async function iniciarServidor(){
    try {
        await correrBaseDatos();
        app.listen(3001, ()=>{
            signale.success("Servidor corriendo en el puerto 3000");
        })
    } catch (error) {
        signale.error("Error al iniciar el servidor", error);
    }
}

iniciarServidor();

//debería ser adaptable a la torelancia a fallos
