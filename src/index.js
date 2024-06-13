const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

require('dotenv').config();

const api = express();
api.use(cors());
api.use(express.json());

//Especificar por el puerto que debe conectarse
const PORT = process.env.PORT || 5001;

const baseQuery = `SELECT 
countries.name as country, 
fruits.name, 
fruits.image, 
fruits.description
FROM tropical_fruits.countries countries
INNER JOIN tropical_fruits.fruit_country relTable ON countries.idCountry = relTable.country_id
INNER JOIN tropical_fruits.fruits fruits ON relTable.fruit_id = fruits.idFruit`

api.listen(PORT, () => {
    console.log(`Server running in port: http://localhost:${PORT}`)
});

//conectar con la BD
async function getConnection() {
    const conex = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    });
    await conex.connect();
    console.log("Conexión con la BD" + conex.threadId)
    return conex;
}
getConnection();

//ENPOINTS

// Leer todos los registros existentes
api.get("/fruits", async (req, res) => {
    try {
        const conn = await getConnection();
        const [result] = await conn.query(baseQuery);

        await conn.end();
        res.status(200).json({
            info: { count: result.length }, //nr de elementos
            results: result, //listado
        })
    } catch (error) {
        res.status(400).json(error);
    }
});

// Leer un registro por un campo filtrado
api.get("/fruits/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const conn = await getConnection();
        const select = `${baseQuery} WHERE fruits.idFruit = ?`;
        const [result] = await conn.query(select, [id]); //Lo obtengo en la línea 53
        //Validación
        if (result.length === 0) {
            res.status(400).json({ message: 'El ID no existe en la BD' });
        } else {
            res.status(200).json(result[0]);
        }
    } catch (error) {
        res.status(400).json(error);
    }
});

// Insertar un registro nuevo
api.post("/fruits", async (req, res) => {
    try {
        const conn = await getConnection();
        const { name, image, description } = req.body;
        const sqlInsert = "INSERT INTO fruits (name, image, description) VALUES (?,?,?)";
        const [newFruit] = await conn.query(sqlInsert, [
            name,
            image,
            description,
        ]);
        res.status(200).json({
            success: true,
            id: newFruit.insertId,
        });
        await conn.end();
    } catch (error) {
        res.status(400).json(error);
    }
});

// Actualizar un registro existente.
api.put("/fruits/:id", async (req, res) => {
    try {
        const conn = await getConnection();
        const idNewFruit = req.params.id;
        const newData = req.body;
        const modifySql = "UPDATE fruits SET name = ?, image = ?, description = ? WHERE idFruit = ? ";
        const [result] = await conn.query(modifySql, [
            newData.name,
            newData.image,
            newData.description,
            idNewFruit,
        ]);
        if (result.affectedRows > 0) {
            res.status(200).json({ success: true, });
        } else {
            res.status(200).json({ success: false, message: "No se ha actualizado la información." });
        }
        console.log(result)
        await conn.end();
    } catch (error) {
        res.status(400).json(error);
    }
});

//Eliminar un registro existente
api.delete("/fruits/:id", async (req, res) => {
    try {
        const conn = await getConnection();
        const idNewFruit = req.params.id;
        const deleteSql = "DELETE FROM fruits WHERE idFruit = ? ";
        const [result] = await conn.query(deleteSql, [idNewFruit]);
        if (result.affectedRows > 0) {
            res.status(200).json({ success: true, });
        } else {
            res.status(200).json({ success: false, message: "No se ha eliminado la fruta." });
        }
        console.log(result)
        await conn.end();
    } catch (error) {
        res.status(400).json(error);
    }
});