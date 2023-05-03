import nodemailer = require('nodemailer');


    export const transporter = nodemailer.createTransport({
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


