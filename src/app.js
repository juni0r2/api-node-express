import express from "express";

const api = express();
api.use(express.json());

const livros = [
    {
        id : 1,
        titulo : "O Senhor dos Anéis"
    },
    {
        id : 2,
        titulo : "O Hobbit"
    }
];


api.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJS");
});

api.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

api.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});


export default api;