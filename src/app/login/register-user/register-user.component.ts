import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildform();
  }

  buildform(){
    this.registerForm = this.formBuilder.group({
      username: [''],
      email: [''],
      passwordHash: [''],
      confirmPassword: [''],
      phoneNumber: [''],
    });
  }

  register(){
    this.loginService.register(this.registerForm.value as User).subscribe(result => {
      console.log("register deu bom");
      console.log(result);
    }, error => {
      console.log(error);
    })
  }
}
