import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {
  public livros: Livro[] = [];

  constructor(private livrosService: LivroService) { }

  ngOnInit(): void {
    this.livrosService.getAll().subscribe(
      (sucesso: Livro[]) => {
        this.livros = sucesso;
      }
    );

  }

}
