import http from "http";

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Servidor Node funcionando");
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});