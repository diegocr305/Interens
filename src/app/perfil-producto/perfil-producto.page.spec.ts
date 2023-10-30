import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilProductoPage } from './perfil-producto.page';

describe('PerfilProductoPage', () => {
  let component: PerfilProductoPage;
  let fixture: ComponentFixture<PerfilProductoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
