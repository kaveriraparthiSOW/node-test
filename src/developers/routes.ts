import { Router } from "express";
import { getAllDevelopers, createDeveloper } from "./controller";

const router = Router();

router.get("/", getAllDevelopers);
router.post("/", createDeveloper);

export default router;
