import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IncluirLivroComponent } from './pages/livros/incluir-livro/incluir-livro.component';
import { ListarLivrosComponent } from './pages/livros/listar-livros/listar-livros.component';

const routes: Routes = [

      { path: 'livros', component: ListarLivrosComponent },
      { path: 'livros/incluir', component: IncluirLivroComponent },
      { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
