// importando el modelo para los skills en la base de datos 
import skillsModels from "../models/skillsModels.js";

//* Definiendo métodos para el CRUD */
// GET ALL
export const getAllSkills = async (req, res) => {
    try {
        const skills = await skillsModels.findAll();
        res.json(skills);
    } catch (error) {
        res.json({ message: error.message });
    }
};
// GET
export const getSkill = async (req, res) => {
    try {
        const skill = await skillsModels.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(skill)
    } catch (error) {
        res.json({ message: error.message });
    }
};
// POST
export const createSkill = async (req, res) => {
    try {
        await skillsModels.create(req.body);
        res.json({
            'message:': 'Experiencia creado con exito'
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}
// PUT
export const updateSkill = async (req, res) => {
    try {
        await skillsModels.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': 'Experiencia actualizado con exito'
        })
    } catch (error) {
        res.json({ message: error.message });
    }
};
// DELETE
export const deleteSkill = async (req, res) => {
    try {
        await skillsModels.destroy({
            where: {
                id: req.params.id
            }
        })
    } catch (error) {
        res.json({ message: error.message });
    }
};