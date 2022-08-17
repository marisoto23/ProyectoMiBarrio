import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigVisitanteComponent } from './config-visitante.component';

describe('ConfigVisitanteComponent', () => {
  let component: ConfigVisitanteComponent;
  let fixture: ComponentFixture<ConfigVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigVisitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
