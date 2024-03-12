"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClienteController = exports.deleteClienteCasoUso = exports.addClienteController = exports.addClienteCasoUso = exports.sqlClienteRepositorio = void 0;
const sqlCliente_repositorio_1 = require("./sqlCliente.repositorio");
const addCliente_CasoUso_1 = require("../Aplicacion/addCliente.CasoUso");
const addCliente_controller_1 = require("./controller/addCliente.controller");
const deleteCliente_CasoUso_1 = require("../Aplicacion/deleteCliente.CasoUso");
const deleteCliente_controller_1 = require("./controller/deleteCliente.controller");
exports.sqlClienteRepositorio = new sqlCliente_repositorio_1.SqlClienteRepositorio();
exports.addClienteCasoUso = new addCliente_CasoUso_1.AddClienteCasoUso(exports.sqlClienteRepositorio);
exports.addClienteController = new addCliente_controller_1.AddClienteController(exports.addClienteCasoUso);
exports.deleteClienteCasoUso = new deleteCliente_CasoUso_1.DeleteClienteCasoUso(exports.sqlClienteRepositorio);
exports.deleteClienteController = new deleteCliente_controller_1.DeleteClienteController(exports.deleteClienteCasoUso);
