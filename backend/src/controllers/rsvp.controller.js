import qrcode from "qrcode";
export const register = async (req, res) =>{
    try{
        const { nombre, apellidos, email, } = req.body;
        console.log("estamos a nada de cerrar el dato ");
        return res.sendStatus(200);
        
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}