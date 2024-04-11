import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListNewSyntaxComponent } from './task-list-new-syntax.component';

describe('TaskListNewSyntaxComponent', () => {
  let component: TaskListNewSyntaxComponent;
  let fixture: ComponentFixture<TaskListNewSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListNewSyntaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskListNewSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
