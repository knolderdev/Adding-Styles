import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNoneComponent } from './component-none.component';

describe('ComponentNoneComponent', () => {
  let component: ComponentNoneComponent;
  let fixture: ComponentFixture<ComponentNoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentNoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
