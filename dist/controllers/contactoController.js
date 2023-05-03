"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mailer_1 = require("../config/mailer");
class ContactoController {
    contactUs(req, res) {
        // console.log(req.body);
        //res.send('Sign Up!!!');
        res.render("partials/contactForm");
    }
    createContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = req.body;
            const contacto = {
                "nombre": req.body.nombre,
                "apellido": req.body.apellido,
                "email": req.body.email,
                "consulta": req.body.consulta
            };
            // const result = await contactUsModel.crearConsulta(contacto);
            console.log(usuario);
            console.log(contacto);
            // if (!result)
            // return res.status(404).json({ message: "Algo salió mal :/" });
            // else {
            res.status(200).json({ message: "Consulta enviada con éxito!!!" });
            try {
                yield mailer_1.transporter.sendMail({
                    from: `${usuario.email}`,
                    to: ' <info@petcontrolsoftware.com>',
                    subject: `Nueva consulta ingresada del usuario  ${usuario.nombre} ${usuario.apellido}`,
                    html: `${usuario.consulta}`
                });
                //Vemos el estado del correo
                console.log(mailer_1.transporter);
            }
            catch (err) {
                console.log("error:", err);
            }
        });
    }
}
//     
const contactoController = new ContactoController();
exports.default = contactoController;
//# sourceMappingURL=contactoController.js.map