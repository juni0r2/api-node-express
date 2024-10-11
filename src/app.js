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

function buscaLivro(id) {
    return livros.findIndex( livro => {
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
    let indice = buscaLivro(req.params.id);
    res.status(200).json(livros[indice]);
});

api.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

api.put("/livros/:id", (req, res) => {
    let indice = buscaLivro(req.params.id);
    livros[indice].titulo = req.body.titulo;
    res.status(200).json(livros[indice]);
});



export default api;