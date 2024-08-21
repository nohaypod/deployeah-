import express from "express";
import morgan from "morgan";
import rsvpRoutes from "./routes/rsvp.routes.js"
import cors from 'cors';
import path from "path";
import { fileURLToPath } from 'url';

// Crear __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
 app.use(cors({
     origin: 'http://54.92.193.4:5173',
     credentials: true,
 }));
app.use(morgan('dev'));
app.use(express.json());
app.use(rsvpRoutes);
if (true) {
    app.use(express.static(path.join(__dirname, '../client/dist')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../../', 'client', 'dist', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }
export default app;