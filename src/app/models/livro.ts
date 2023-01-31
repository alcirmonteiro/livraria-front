import { Autor } from "./autor"
export interface Livro {
    _id: string,
    titulo: string,
    autor: Autor,
    editora: string,
    numeroPaginas: number
}