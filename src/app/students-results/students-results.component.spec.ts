import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsResultsComponent } from './StudentsResultsComponent';

describe('StudentsResultsComponent', () => {
  let component: StudentsResultsComponent;
  let fixture: ComponentFixture<StudentsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsResultsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
