import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class LivroService {

    constructor(private http: HttpClient) {}

    public getAll(){
        return this.http.get(`${environment.apiUrl}livros`)
    }

    public incluir(){
        
    }


}