import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionPillComponent } from './selection-pill.component';

describe('SelectionPillComponent', () => {
  let component: SelectionPillComponent;
  let fixture: ComponentFixture<SelectionPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
