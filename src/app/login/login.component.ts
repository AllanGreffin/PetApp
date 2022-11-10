import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  buildform(){
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }
}
