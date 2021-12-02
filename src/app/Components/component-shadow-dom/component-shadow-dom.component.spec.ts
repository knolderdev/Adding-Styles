import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentShadowDomComponent } from './component-shadow-dom.component';

describe('ComponentShadowDomComponent', () => {
  let component: ComponentShadowDomComponent;
  let fixture: ComponentFixture<ComponentShadowDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentShadowDomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentShadowDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
