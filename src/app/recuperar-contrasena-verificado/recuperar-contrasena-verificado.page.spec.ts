import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarContrasenaVerificadoPage } from './recuperar-contrasena-verificado.page';

describe('RecuperarContrasenaVerificadoPage', () => {
  let component: RecuperarContrasenaVerificadoPage;
  let fixture: ComponentFixture<RecuperarContrasenaVerificadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperarContrasenaVerificadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
