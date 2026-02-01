import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../../Services/Auth/auth';
import { Toastr } from '../../../Services/toastr';

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
    private authService:Auth,
    private toastr:Toastr
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
      if(res.token){
        localStorage.setItem('token',res.token);
        this.toastr.showSuccess("Login Successfull");
      }else{
        this.toastr.showError("Login Failed, Check Credentials");
      }
      this.clearForm();
    })
  }

  clearForm(){
    this.loginForm.reset();
  }

}
