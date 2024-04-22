import { Router } from "express";
import { newsletter } from "../controllers/newsletter.controller.js";

const router = Router();

router.route("/").post(newsletter);

export default router;
