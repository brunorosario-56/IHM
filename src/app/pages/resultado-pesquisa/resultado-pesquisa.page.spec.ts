import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoPesquisaPage } from './resultado-pesquisa.page';

describe('ResultadoPesquisaPage', () => {
  let component: ResultadoPesquisaPage;
  let fixture: ComponentFixture<ResultadoPesquisaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoPesquisaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
