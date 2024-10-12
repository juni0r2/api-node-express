import express from "express";
import connectaBaseMongoDB from "./config/dbConnect.js";

const conexao = await connectaBaseMongoDB();
const api = express();
api.use(express.json());



conexao.on("error", (erro) => {
    console.error("error de conexao", erro);
});

conexao.once("open", () => {
    console.log("Conectado a base de dados do mongoDB");
});

const livros = [
    {
        id : 1,
        titulo : "O Senhor dos Anéis"
    }, 
    {
        id: 2,
        titulo : "O Hobbit"
    }
];

function buscaLivros(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

api.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJS");
});

api.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

api.get("/livros/:id", (req, res) => {
    let indice = buscaLivros(req.params.id);
    res.status(200).json(livros[indice]);
});

api.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
});

api.put("/livros/:id", (req, res) => {
    let indice = buscaLivros(req.params.id);
    livros[indice].titulo = req.body.titulo;
    res.status(200).json(livros[indice]);
});

api.delete("/livros/:id", (req, res) => {
    let indice = buscaLivros(req.params.id);
    livros.splice(indice, 1);
    res.status(200).send("Livro deletado com sucesso!");    
});

export default api;
