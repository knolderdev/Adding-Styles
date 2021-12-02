import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEmulatedComponent } from './component-emulated.component';

describe('ComponentEmulatedComponent', () => {
  let component: ComponentEmulatedComponent;
  let fixture: ComponentFixture<ComponentEmulatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentEmulatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentEmulatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
