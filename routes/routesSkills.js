import express from "express";
import { createSkill, deleteSkill, getAllSkills, getSkill, updateSkill } from "../controllers/skillController.js";

const router = express.Router()

// Creando rutas para los endpoints de los usuarios
router.get('/', getAllSkills);
router.get('/:id', getSkill);
router.post('/', createSkill);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

// Creando rutas para los endpoints de los Skill

export default router