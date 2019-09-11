import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  onLogin() {
    console.log('123');
    this.auth.addUser().subscribe((res) => {
      // console.log(res);
    });
  }
}
