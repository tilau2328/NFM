/*
    Ficheiro de routes e handler da pagina inicial.
*/
const Path = require("path");
const index = Path.join(__dirname, "..", "frontend", "public", "index.html");
module.exports = {method: "GET", path: "/", handler: { file: index } };
