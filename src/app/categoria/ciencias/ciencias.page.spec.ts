import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CienciasPage } from './ciencias.page';

describe('CienciasPage', () => {
  let component: CienciasPage;
  let fixture: ComponentFixture<CienciasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CienciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
