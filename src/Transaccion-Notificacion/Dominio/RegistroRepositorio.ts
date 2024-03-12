import { Registro } from "./registro";

export interface RegistroRepositorio{
    crearRegistro(
        id_venta:number
    ):Promise<Registro | null>
}