import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartilharCriticaPage } from './partilhar-critica.page';

describe('PartilharCriticaPage', () => {
  let component: PartilharCriticaPage;
  let fixture: ComponentFixture<PartilharCriticaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PartilharCriticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
