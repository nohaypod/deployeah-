import mongoose from "mongoose";

const rsvpSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
          },
          apellidos: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
          },
          asistencia1:{
            type: Boolean,
            default : false
          },
          asistencia2:{
            type: Boolean,
            default : false
          },
          qrcodeImage:
          {
            type: String
          },
          
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Rsvp",rsvpSchema);