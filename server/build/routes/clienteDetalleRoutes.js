"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteDetalleCotrollers_1 = require("../controllers/clienteDetalleCotrollers");
class DetalleClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', clienteDetalleCotrollers_1.clienteDetalleController.getById);
    }
}
const customerDetailRoutes = new DetalleClienteRoutes();
exports.default = customerDetailRoutes.router;
