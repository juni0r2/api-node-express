import mongoose from "mongoose";

const livroSchema = mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId},
    titulo: { type: String, required: true},
    editora: { type: String},
    preco: { type: Number},
    pagina: { type: Number}
}, { versionKey : false });

const livro = mongoose.model("livros", livroSchema);

export default livro;