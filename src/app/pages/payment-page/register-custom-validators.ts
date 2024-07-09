import {
  AbstractControl,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
//Esta expresión regular validará si el texto contiene al menos una minuscula, mayuscula, número, symbolo y que la longitud sea mayor o igual a 8
const patternPassword = new RegExp(
  '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8}'
);

export const customPasswordValidator = (
  control: AbstractControl<string>
): ValidationErrors | null => {
  const value = control.value;
  if (!patternPassword.test(value)) {
    return { customPasswordValidator: true };
  }
  return null;
};

export const crossPasswordMatchingValidator: ValidatorFn = (
  formGroupControl: AbstractControl<{
    password: string;
    confirmPassword: string;
  }>
): ValidationErrors | null => {
  const password = formGroupControl.value.password;
  const confirmPassword = formGroupControl.value.confirmPassword;
  if (password !== confirmPassword) {
    return { crossConfirmPasswordError: true };
  }

  return null;
};

export class PasswordStateMatcher implements ErrorStateMatcher {
  isErrorState(control: AbstractControl, form: NgForm): boolean {
    if (!control || !control.parent) {
      return false;
    }

    return control.parent.hasError('crossConfirmPasswordError');
  }
}
