import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigForoComponent } from './config-foro.component';

describe('ConfigForoComponent', () => {
  let component: ConfigForoComponent;
  let fixture: ComponentFixture<ConfigForoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigForoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
