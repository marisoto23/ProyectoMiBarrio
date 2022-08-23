import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTicoComponent } from './blog-tico.component';

describe('BlogTicoComponent', () => {
  let component: BlogTicoComponent;
  let fixture: ComponentFixture<BlogTicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogTicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
