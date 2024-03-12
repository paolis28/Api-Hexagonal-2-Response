import { Registro } from "../Dominio/registro";
import { RegistroRepositorio } from "../Dominio/RegistroRepositorio";
import RegistroModel from "./Model/registro";

export class SqlRepositorio implements RegistroRepositorio{
    async crearRegistro(id_venta: number): Promise<Registro | null> {
        try {
            const registroCreado = await RegistroModel.create({id_venta});
            return new Registro(registroCreado.id_venta)
        } catch (error) {
            console.log("Error en sqlAdmin.repositorio en AddAdmin", error);
            return null;
        }
    }
}