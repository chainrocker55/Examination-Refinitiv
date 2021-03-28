import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz01Component } from './quiz01.component';

describe('Quiz01Component', () => {
  let component: Quiz01Component;
  let fixture: ComponentFixture<Quiz01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quiz01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
