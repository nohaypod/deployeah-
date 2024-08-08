import { Router} from "express";
import {register, getRsvps, getRsvp, deleteRsvp,updateRsvp} from "../controllers/rsvp.controller.js";

const router = Router();
router.post("/api/register",register);
router.get("/api/registros",getRsvps);
router.get("/api/rsvp/:id", getRsvp);
router.delete("/api/rsvp/:id", deleteRsvp);
router.put("/api/rsvp/:id",updateRsvp);
export default router;