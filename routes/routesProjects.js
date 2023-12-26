import express from "express";
import { createProject, deleteProject, getAllProjects, getProject, updateProject } from "../controllers/projectController.js";

const router = express.Router()

// Creando rutas para los endpoints de los usuarios
router.get('/', getAllProjects);
router.get('/:id', getProject);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

// Creando rutas para los endpoints de los proyectos

export default router