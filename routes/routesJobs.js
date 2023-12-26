import express from "express";
import { createJob, deleteJob, getAllJobs, getJob, updateJob } from "../controllers/jobController.js";

const router = express.Router()

// Creando rutas para los endpoints de los usuarios
router.get('/', getAllJobs);
router.get('/:id', getJob);
router.post('/', createJob);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

// Creando rutas para los endpoints de los Jobos

export default router