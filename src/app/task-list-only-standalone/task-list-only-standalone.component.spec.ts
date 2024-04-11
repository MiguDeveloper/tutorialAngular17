import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListOnlyStandaloneComponent } from './task-list-only-standalone.component';

describe('TaskListOnlyStandaloneComponent', () => {
  let component: TaskListOnlyStandaloneComponent;
  let fixture: ComponentFixture<TaskListOnlyStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListOnlyStandaloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskListOnlyStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
