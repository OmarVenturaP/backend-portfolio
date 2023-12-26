import express from "express";
import cors from "cors";
// Importando conexión a la Base de datos
import db from "./database/db.js";
// importando enrutador de usuarios
import userRoutes from "./routes/routesUsers.js";

const app = express();

// Configurando CORS
app.use(cors());
// Configurando JSON
app.use(express.json());
// Configurando enrutador para users
app.use('/user', userRoutes);
// Configurando enrutador para jobs

try {
    await db.authenticate();
    console.log('Conexión a la base de datos exitosa');
} catch (error) {
    console.log(`El error en la conexión es: ${error}`);
    
}

// Configurando endpoints
app.get('/', (req, res) =>{
    res.send('Api corriendo correctamente')
})

// Configurando el puerto
app.listen(process.env.PORT || 8000, () => {
    console.log('Servidor corriendo en el puerto 8000')
})
