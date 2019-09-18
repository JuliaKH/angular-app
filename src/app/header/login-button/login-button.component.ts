import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})

export class LoginButtonComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
