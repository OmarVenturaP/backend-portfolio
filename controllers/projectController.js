// importando el modelo de usuario
import portfolioModel from "../models/projectsModels.js";

//* Definiendo métodos para el CRUD */
// GET ALL
export const getAllProjects = async (req, res) => {
    try {
        const project = await portfolioModel.findAll();
        res.json(project);
    } catch (error) {
        res.json({ message: error.message });
    }
};
// GET
export const getProject = async (req, res) => {
    try {
        const project = await portfolioModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(project)
    } catch (error) {
        res.json({ message: error.message });
    }
};
// POST
export const createProject = async (req, res) =>{
    try {
        await portfolioModel.create(req.body);
        
        res.json({
            'message': 'Proyecto creado con éxito'
        })
    } catch (error) {
        res.json({ message: error.message });
    }
};
export async function POST(req) {
    try {
        await portfolioModel.formData(req.body);
        res.formData({
            'message': 'Proyecto creado con éxito'
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}
// PUT
export const updateProject = async (req, res) =>{
    try {
        await portfolioModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': ' Proyecto actualizado con éxito'
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}
// DELETE
export const deleteProject = async (req, res) => {
    try {
        await portfolioModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': 'Proyecto eliminado con éxito'
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}