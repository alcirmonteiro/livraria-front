import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarLivrosComponent } from './pages/livros/listar-livros/listar-livros.component';
import { LivroService } from './services/livro.service';
import { HomeComponent } from './pages/home/home.component';
import { IncluirLivroComponent } from './pages/livros/incluir-livro/incluir-livro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutorService } from './services/autor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarLivrosComponent,
    HomeComponent,
    IncluirLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    LivroService,
    AutorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
