import express from "express";

const app = express();
const PORT = 3000;

app.get("/persona", (req, res) => {

    const edad = req.query.edad;

    console.log("Edad recibida:", edad);

    res.send(`Edad recibida: ${edad}`);

});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});