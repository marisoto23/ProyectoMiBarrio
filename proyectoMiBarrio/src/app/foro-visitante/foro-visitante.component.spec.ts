import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoVisitanteComponent } from './foro-visitante.component';

describe('ForoVisitanteComponent', () => {
  let component: ForoVisitanteComponent;
  let fixture: ComponentFixture<ForoVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForoVisitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForoVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
