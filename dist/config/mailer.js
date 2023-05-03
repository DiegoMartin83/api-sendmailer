"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer = require("nodemailer");
exports.transporter = nodemailer.createTransport({
    //host de mailtrap o de tu smtp de gamil/hotmail etc 
    host: "smtp.mailtrap.io",
    //puerto del mismo
    port: 2525,
    auth: {
        //usuario de tu smtp
        user: "43452008b72e05",
        //password de tu smtp
        pass: "3329e1be05eecd"
    }
});
//# sourceMappingURL=mailer.js.map