import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiteraturaPage } from './literatura.page';

describe('LiteraturaPage', () => {
  let component: LiteraturaPage;
  let fixture: ComponentFixture<LiteraturaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LiteraturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
