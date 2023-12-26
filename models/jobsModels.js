// importamos la conexion a la DB
import db from "../database/db.js";
// importamos Sequelize
import { DataTypes } from "sequelize";

const jobsModels = db.define('jobs', {
    empresa: { type: DataTypes.STRING, },
    posicion: { type: DataTypes.STRING, },
    periodo: { type: DataTypes.STRING, },
    descripcion: { type: DataTypes.STRING, },
    logo: { type: DataTypes.STRING, },
})

export default jobsModels;