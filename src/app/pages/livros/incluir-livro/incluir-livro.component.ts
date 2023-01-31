import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Autor } from 'src/app/models/autor';
import { LivroAdd } from 'src/app/models/livroAdd';
import { AutorService } from 'src/app/services/autor.service';
import { LivroService } from 'src/app/services/livro.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-incluir-livro',
  templateUrl: './incluir-livro.component.html',
  styleUrls: ['./incluir-livro.component.css']
})
export class IncluirLivroComponent implements OnInit {
  public form: FormGroup;
  public livroAdd: LivroAdd;
  public autores: Autor[] = []; 

  constructor(
    private fb: FormBuilder,
    private livroService: LivroService,
    private autorService: AutorService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: ['', [Validators.required]], 
      autor: ['', [Validators.required]], 
      editora: [ '', [Validators.required]],
      numeroPaginas: ''
    });

    this.autorService.getAll().subscribe(
      (sucesso: Autor[]) => {
        this.autores = sucesso;
      }
    );


  }

  salvar(){
    if(this.form.valid){
      this.livroAdd = Object.assign({}, this.livroAdd, this.form.value);
      console.log(JSON.stringify(this.livroAdd));
      this.livroService.incluir(this.livroAdd).subscribe(
        sucesso => this.router.navigate([`livros`]).then()
      )
    }
  }

  cancelar(){
    this.router.navigate([`livros`]).then()
  }


}
