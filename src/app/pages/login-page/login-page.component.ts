import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../../services/demo.service';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  private readonly _router = inject(Router);
  private readonly _demoService = inject(DemoService);
  private readonly _fb = inject(NonNullableFormBuilder);
  private readonly _authService = inject(AuthApiService);

  form = this._fb.group({
    username: ['mor_2314', Validators.required],
    password: ['83r5^_', Validators.required],
  });

  clickSingUp() {
    //this._router.navigateByUrl('/home', { state: { isAdmin: true } });
    // this._router.navigate(['/home'], {
    //   queryParams: { user: 'miguel', edad: 48 },
    //   state: { isAdmin: true },
    // });
    this._authService.login(this.form.getRawValue()).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', 'admin');
        this._router.navigate(['/']);
      },
      (error) => {
        console.log('Error controlado desde el componente ', error);
      }
    );
  }
}
