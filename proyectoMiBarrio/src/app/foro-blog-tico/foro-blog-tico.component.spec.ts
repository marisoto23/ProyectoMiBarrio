import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoBlogTicoComponent } from './foro-blog-tico.component';

describe('ForoBlogTicoComponent', () => {
  let component: ForoBlogTicoComponent;
  let fixture: ComponentFixture<ForoBlogTicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForoBlogTicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForoBlogTicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
