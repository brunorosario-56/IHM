import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovaCriticaPage } from './nova-critica.page';

describe('NovaCriticaPage', () => {
  let component: NovaCriticaPage;
  let fixture: ComponentFixture<NovaCriticaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaCriticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
