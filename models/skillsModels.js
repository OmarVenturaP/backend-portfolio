// importamos la conexion a la DB
import db from "../database/db.js";
// importamos Sequelize
import { DataTypes } from "sequelize";

const skillsModels = db.define('skills', {
    nombre: { type: DataTypes.STRING, },
    hardskill: { type: DataTypes.STRING, },
})

export default skillsModels;