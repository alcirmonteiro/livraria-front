import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { LivroAdd } from "../models/livroAdd";

@Injectable()
export class LivroService {

    constructor(private http: HttpClient) {}

    public getAll(){
        return this.http.get(`${environment.apiUrl}livros`)
    }

    public incluir(livroAdd: LivroAdd){
        return this.http.post(`${environment.apiUrl}livros`, livroAdd);   
    }


}