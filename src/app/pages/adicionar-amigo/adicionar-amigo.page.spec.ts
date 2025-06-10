import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarAmigoPage } from './adicionar-amigo.page';

describe('AdicionarAmigoPage', () => {
  let component: AdicionarAmigoPage;
  let fixture: ComponentFixture<AdicionarAmigoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarAmigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
