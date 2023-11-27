import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoCarrucelPage } from './info-carrucel.page';

describe('InfoCarrucelPage', () => {
  let component: InfoCarrucelPage;
  let fixture: ComponentFixture<InfoCarrucelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoCarrucelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
