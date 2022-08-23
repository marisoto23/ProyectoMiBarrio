import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroForoComponent } from './registro-foro.component';

describe('RegistroForoComponent', () => {
  let component: RegistroForoComponent;
  let fixture: ComponentFixture<RegistroForoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroForoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
