import qrcode from "qrcode";
import Rsvp from '../models/rsvp.model.js';

export const register = async (req, res) =>{
    try{
        const { nombre, apellidos, email, asistencia1, asistencia2 } = req.body;

        // Crear un nuevo documento de RSVP
        const newRsvp = new Rsvp({
            nombre,
            apellidos,
            email,
            asistencia1,
            asistencia2
        });

        // Generar el código QR y almacenarlo en el documento
        const qrCodeText = `nombre: ${nombre}, apellidos: ${apellidos}, email: ${email}`;
        const qrCodeImage = await qrcode.toBuffer(qrCodeText);

        newRsvp.qrcodeImage = qrCodeImage;

        // Guardar el nuevo documento en la base de datos
        await newRsvp.save();

        res.status(201).json(newRsvp);
        
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}