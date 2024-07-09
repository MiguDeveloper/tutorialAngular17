import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import {
  crossPasswordMatchingValidator,
  customPasswordValidator,
  PasswordStateMatcher,
} from '../payment-page/register-custom-validators';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatInput,
    MatFormFieldModule,
    MatIcon,
    MatButton,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export default class RegisterPageComponent {
  private readonly _fb = inject(FormBuilder);
  passwordStateMatcher = new PasswordStateMatcher();

  /**
   * Usando FormGroup y FormControl
   */
  // formGroup = new FormGroup({
  //   name: new FormControl('', { validators: Validators.required }),
  // });

  //NonNullable indicamos que el valor no puede ser nulo
  formGroup = this._fb.nonNullable.group(
    {
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [customPasswordValidator, Validators.required]],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: crossPasswordMatchingValidator,
    }
  );

  clickRegister() {
    //console.log(this.formGroup.get('name')?.value);
    const name = this.formGroup.controls.name.value;
    console.log(name);
  }

  //#region getters
  get nameField(): FormControl<string> {
    return this.formGroup.controls.name;
  }

  get lastNameField(): FormControl<string> {
    return this.formGroup.controls.lastName;
  }

  get emailField(): FormControl<string> {
    return this.formGroup.controls.email;
  }

  get passwordField(): FormControl<string> {
    return this.formGroup.controls.password;
  }

  get confirmPasswordField(): FormControl<string> {
    return this.formGroup.controls.confirmPassword;
  }
  //#endregion
}
