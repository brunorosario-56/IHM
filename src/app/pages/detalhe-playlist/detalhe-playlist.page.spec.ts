import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhePlaylistPage } from './detalhe-playlist.page';

describe('DetalhePlaylistPage', () => {
  let component: DetalhePlaylistPage;
  let fixture: ComponentFixture<DetalhePlaylistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePlaylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
