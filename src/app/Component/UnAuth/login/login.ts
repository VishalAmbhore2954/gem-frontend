import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../../Services/Auth/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{

  loginForm!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private authService:Auth
  ){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.fb.group({
      email : "",
      password : ""
    })
  }

  onSubmit(){
    this.authService.login(this.loginForm.value).subscribe((res:any)=>{
      console.log("login suceess",res);
      localStorage.setItem('token',res.token);
      this.clearForm();
    })
  }

  clearForm(){
    this.loginForm.reset();
  }

}
