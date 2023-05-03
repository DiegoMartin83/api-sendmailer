
import { Router, Request, Response } from 'express';
import contactoController from "../controllers/contactoController";

class ContactoRoutes{
	public router: Router = Router();
	constructor(){
		this.config();
	}
	config():void{
		this.router.get('/',(req:Request,res:Response)=>{
        res.send('Ruta contacto ok!!!') 
        // res.render("partials/principal")
        
    });

    this.router.get('/contactUs', contactoController.contactUs);
    this.router.post('/send', contactoController.createContact);

}


        
}



//Exportamos el enrutador con 


const contactoRoutes = new ContactoRoutes();
export default contactoRoutes.router;