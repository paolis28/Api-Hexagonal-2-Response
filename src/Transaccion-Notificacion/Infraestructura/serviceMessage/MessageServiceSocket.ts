import io from "socket.io-client";
import { Registro } from "../../Dominio/registro";
import { IMessageService } from "../../Aplicacion/service/IMessageService";

export class MessageServiceSocket implements IMessageService{
    enviarMensaje(registro: Registro): string {
        const socket = io("https://websocketserver-8vbj.onrender.com");//ruta del socket desplegado

        socket.on("connect", ()=>{
            console.log("Conectado al servidor socket");
            
            socket.emit("newClient", "Pago Realizado");
        });

        socket.on("disconnect", ()=>{
            console.log("Disconnect from server");
        });

        return "Mensaje enviado";
    }
}

