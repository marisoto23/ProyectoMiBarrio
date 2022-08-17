import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVisitanteComponent } from './menu-visitante.component';

describe('MenuVisitanteComponent', () => {
  let component: MenuVisitanteComponent;
  let fixture: ComponentFixture<MenuVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVisitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
