// importamos la conexion a la DB
import db from "../database/db.js";
// importamos Sequelize
import { DataTypes } from "sequelize";

const userModel = db.define('usuarios', {
    username: { type: DataTypes.STRING, },
    nombre: { type: DataTypes.STRING, },
    apellido: { type: DataTypes.STRING, },
    email: { type: DataTypes.STRING, },
    contraseña: { type: DataTypes.STRING, },
    atributo: { type: DataTypes.STRING, }
})

export default userModel;