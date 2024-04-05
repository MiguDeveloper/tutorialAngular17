import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  inputMessage = 'Ingresa tu nombre';
  disabledButton = false;
  constructor() {
    setTimeout(() => {
      this.disabledButton = true;
    }, 3000);
  }

  clickSaveData() {
    console.log('Guardando datos...');
  }

  inputChange(event: Event): void {
    const inputEvent = event as InputEvent;
    console.log(
      `input value: ${(inputEvent.target as HTMLInputElement).value}`
    );
  }
}
