import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchNotesComponent } from './fetch-notes.component';

describe('FetchNotesComponent', () => {
  let component: FetchNotesComponent;
  let fixture: ComponentFixture<FetchNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
