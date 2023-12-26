import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";

const router = express.Router()

// Creando rutas para los endpoints de los usuarios
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

// Creando rutas para los endpoints de los productos

export default router