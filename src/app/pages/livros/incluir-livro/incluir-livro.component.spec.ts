import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirLivroComponent } from './incluir-livro.component';

describe('IncluirLivroComponent', () => {
  let component: IncluirLivroComponent;
  let fixture: ComponentFixture<IncluirLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
