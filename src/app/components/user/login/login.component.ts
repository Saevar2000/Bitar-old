import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { growDown } from '../../../../animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [growDown]
})
export class LoginComponent implements OnInit {

  hide = true;

  emailControl: FormControl;
  passwordControl: FormControl;
  result: {
    color: string,
    icon: string,
    title: string,
    message: string
  };

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.emailControl = new FormControl('', Validators.required);
    this.passwordControl = new FormControl('', Validators.required);
  }

  login(): void {
    if (this.emailControl.invalid || this.passwordControl.invalid) {
      return;
    }
    this.result = {
      color: 'gray',
      icon: null,
      title: 'Bíddu aðeins',
      message: 'Innskrái þig...'
    };
    this.authService.login(this.emailControl.value, this.passwordControl.value).then((user) => {
      this.result = {
        color: 'green',
        icon: 'done',
        title: 'OK.',
        message: ('Velkomin(n), ' + (user.displayName || user.email))
      };
      this.removeResult();
    }).catch((error) => {
      this.result = {
        color: 'red',
        icon: 'clear',
        title: 'Eitthvað fór úrskeiðis.',
        message: error.message
      };
      this.removeResult();
    });
  }

  private removeResult(): void {
    setTimeout(() => {
      this.result = null;
    }, 6000);
  }
}
