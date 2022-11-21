import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  get username() { return this.loginForm.get('username'); }
  get passwordHash() { return this.loginForm.get('passwordHash'); }

  constructor(private loginService: LoginService, 
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.buildform();
  }

  buildform(){
    this.loginForm = this.formBuilder.group({
      username: [''],
      passwordHash: ['']
    });
  }

  login(){
    console.log(this.loginForm.value);
    this.loginService.login( this.loginForm.value ).subscribe(result => {
      console.log("login deu bom");
      console.log(result);
      localStorage.setItem('user', JSON.stringify(result));
      this.router.navigate(['/dashboard']);
    }, error => {
      console.log(error);
    });
  }
}
