"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crearClienteController_1 = require("../controllers/crearClienteController");
class CrearClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', crearClienteController_1.crearClienteController.create);
    }
}
const crearClienteRoutes = new CrearClienteRoutes();
exports.default = crearClienteRoutes.router;
