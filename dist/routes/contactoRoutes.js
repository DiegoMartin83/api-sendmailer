"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactoController_1 = __importDefault(require("../controllers/contactoController"));
class ContactoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            res.send('Ruta contacto ok!!!');
            // res.render("partials/principal")
        });
        this.router.get('/contactUs', contactoController_1.default.contactUs);
        this.router.post('/send', contactoController_1.default.createContact);
    }
}
//Exportamos el enrutador con 
const contactoRoutes = new ContactoRoutes();
exports.default = contactoRoutes.router;
//# sourceMappingURL=contactoRoutes.js.map