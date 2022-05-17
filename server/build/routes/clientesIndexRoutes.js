"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientesIndexControllers_1 = require("../controllers/clientesIndexControllers");
class ClientesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', clientesIndexControllers_1.clientesController.list);
        this.router.delete('/:id', clientesIndexControllers_1.clientesController.delete);
    }
}
const clientesRoutes = new ClientesRoutes();
exports.default = clientesRoutes.router;
