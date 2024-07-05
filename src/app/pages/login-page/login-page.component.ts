import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  private readonly _router = inject(Router);
  clickSingUp() {
    //this._router.navigateByUrl('/home', { state: { isAdmin: true } });
    this._router.navigate(['/home'], {
      queryParams: { user: 'miguel', edad: 48 },
      state: { isAdmin: true },
    });
  }
}
