// importando el modelo para los Jobs en la base de datos 
import jobsModels from "../models/jobsModels.js";

//* Definiendo métodos para el CRUD */
// GET ALL
export const getAllJobs = async (req, res) => {
    try {
        const jobs = await jobsModels.findAll();
        res.json(jobs);
    } catch (error) {
        res.json({ message: error.message });
    }
};
// GET
export const getJob = async (req, res) => {
    try {
        const job = await jobsModels.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(job)
    } catch (error) {
        res.json({ message: error.message });
    }
};
// POST
export const createJob = async (req, res) => {
    try {
        await jobsModels.create(req.body);
        res.json({
            'message:': 'Experiencia creado con exito'
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}
// PUT
export const updateJob = async (req, res) => {
    try {
        await jobsModels.update(req.body, {
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
export const deleteJob = async (req, res) => {
    try {
        await jobsModels.destroy({
            where: {
                id: req.params.id
            }
        })
    } catch (error) {
        res.json({ message: error.message });
    }
};