import express from "express";

const app = express();
const PORT = 3000;

app.get("/usuario/:id", (req, res) => {

    const id = req.params.id;

    console.log("ID recibido:", id);

    res.send(`ID recibido: ${id}`);

});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});