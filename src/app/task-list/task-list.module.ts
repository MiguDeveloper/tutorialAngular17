import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskListComponent],
  imports: [CommonModule, FormsModule],
  exports: [TaskListComponent],
})
export class TaskListModule {}
