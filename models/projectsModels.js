// importamos la conexion a la DB
import db from "../database/db.js";
// importamos Sequelize
import { DataTypes } from "sequelize";

const portfolioModel = db.define('projects', {
    nombre: { type: DataTypes.STRING, },
    url_repo: { type: DataTypes.STRING, },
    url_demo: { type: DataTypes.STRING, },
    descripcion: { type: DataTypes.STRING, },
    img: { type: DataTypes.STRING, },
})

export default portfolioModel;