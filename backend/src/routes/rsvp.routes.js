import { Router} from "express";
import {register} from "../controllers/rsvp.controller.js";

const router = Router();
router.post("/api/register",register);
export default router;