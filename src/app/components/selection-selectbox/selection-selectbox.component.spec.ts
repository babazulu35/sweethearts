import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionSelectboxComponent } from './selection-selectbox.component';

describe('SelectionSelectboxComponent', () => {
  let component: SelectionSelectboxComponent;
  let fixture: ComponentFixture<SelectionSelectboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionSelectboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionSelectboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
