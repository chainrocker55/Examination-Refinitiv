import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz02Component } from './quiz02.component';

describe('Quiz02Component', () => {
  let component: Quiz02Component;
  let fixture: ComponentFixture<Quiz02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quiz02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
