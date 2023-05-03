import {Request, Response } from 'express';
import {transporter} from '../config/mailer'






class ContactoController {



    public contactUs(req:Request,res:Response){
		// console.log(req.body);
        //res.send('Sign Up!!!');
		res.render("partials/contactForm");
	}



    public async createContact(req:Request,res:Response){
        
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

            res.status(200).json({message: "Consulta enviada con éxito!!!"})
                   
                    try{
    
            
                                await transporter.sendMail({
                                from: `${usuario.email}`,
                                to:' <info@petcontrolsoftware.com>',
                                subject:`Nueva consulta ingresada del usuario  ${usuario.nombre} ${usuario.apellido}` ,
                                html: `${usuario.consulta}`});
            
                                //Vemos el estado del correo
                                console.log(transporter);
    
    
                } catch(err){
    
                    console.log("error:", err);
                    
                }
                   
    
}
            }     
            
     
        

			 
    

//     



const contactoController = new  ContactoController();
export default contactoController;