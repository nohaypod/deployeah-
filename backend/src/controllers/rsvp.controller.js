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
        const qrCodeImage = await qrcode.toDataURL(qrCodeText);

        newRsvp.qrcodeImage = qrCodeImage;

        // Guardar el nuevo documento en la base de datos
        await newRsvp.save();

        res.status(201).json(newRsvp);
        
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}

export const getRsvps = async (req, res) => {
    try {
        const rsvps = await Rsvp.find({});
        res.json(rsvps);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const getRsvp = async(req,res) =>{
    try{
        const rsvp = await Rsvp.findById(req.params.id);
        res.json(rsvp);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const deleteRsvp = async(req,res) =>{
    try{
        const rsvp = await Rsvp.findByIdAndDelete(req.params.id);
        if(!rsvp) return res.status(404).json({message:'no le encuentró para borrarla'});
        res.json(rsvp);
    }
    
    catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const updateRsvp =async(req,res) =>{
    try{
        const rsvp = await Rsvp.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!rsvp) return res.status(404).json({message:'no le encuentró para actualizar'});
        res.json(rsvp);
    }
    catch(error){
        return res.status(500).json({ message: error.message });
    }
}