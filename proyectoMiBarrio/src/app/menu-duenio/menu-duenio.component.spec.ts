import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDuenioComponent } from './menu-duenio.component';

describe('MenuDuenioComponent', () => {
  let component: MenuDuenioComponent;
  let fixture: ComponentFixture<MenuDuenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDuenioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDuenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
