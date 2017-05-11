import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionRadioComponent } from './selection-radio.component';

describe('SelectionRadioComponent', () => {
  let component: SelectionRadioComponent;
  let fixture: ComponentFixture<SelectionRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
