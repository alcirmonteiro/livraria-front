import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-incluir-livro',
  templateUrl: './incluir-livro.component.html',
  styleUrls: ['./incluir-livro.component.css']
})
export class IncluirLivroComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: ['', [Validators.required]], 
      editora: [ '', [Validators.required]],
      numeroPaginas: ''
   });

  }

  salvar(){

  }

}
