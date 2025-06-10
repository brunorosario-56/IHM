import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarSessaoPage } from './adicionar-sessao.page';

describe('AdicionarSessaoPage', () => {
  let component: AdicionarSessaoPage;
  let fixture: ComponentFixture<AdicionarSessaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarSessaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
