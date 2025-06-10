import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheEventoPage } from './detalhe-evento.page';

describe('DetalheEventoPage', () => {
  let component: DetalheEventoPage;
  let fixture: ComponentFixture<DetalheEventoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
