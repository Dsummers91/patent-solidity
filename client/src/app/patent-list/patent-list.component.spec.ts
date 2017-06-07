import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentListComponent } from './patent-list.component';

describe('PatentListComponent', () => {
  let component: PatentListComponent;
  let fixture: ComponentFixture<PatentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
