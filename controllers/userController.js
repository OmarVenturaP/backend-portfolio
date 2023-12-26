// importando el modelo de usuario
import userModel from "../models/userModels.js";

//* Definiendo métodos para el CRUD */
// GET
export const getUser = async (req, res) => {
    try {
        const user = await userModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(user)
    } catch (error) {
        res.json({ message: error.message });
    }
};
// GET ALL
export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.findAll();
        res.json(users);
    } catch (error) {
        res.json({ message: error.message });
    }
};
// POST
export const createUser = async (req, res) =>{
    try {
        await userModel.create(req.body);
        res.json({
            'message': 'Usuario creado con éxito'
        })
    } catch (error) {
        res.json({ message: error.message });
    }
};
// PUT
export const updateUser = async (req, res) =>{
    try {
        await userModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': ' Usuario actualizado con éxito'
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}
// DELETE
export const deleteUser = async (req, res) => {
    try {
        await userModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': 'Usuario eliminado con éxito'
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}