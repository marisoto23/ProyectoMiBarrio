import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigBlogTicoComponent } from './config-blog-tico.component';

describe('ConfigBlogTicoComponent', () => {
  let component: ConfigBlogTicoComponent;
  let fixture: ComponentFixture<ConfigBlogTicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigBlogTicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigBlogTicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
