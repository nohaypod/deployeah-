import express from "express";
import morgan from "morgan";
import rsvpRoutes from "./routes/rsvp.routes.js"


const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(rsvpRoutes);
export default app;