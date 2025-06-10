import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheFilmePage } from './detalhe-filme.page';

describe('DetalheFilmePage', () => {
  let component: DetalheFilmePage;
  let fixture: ComponentFixture<DetalheFilmePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheFilmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
