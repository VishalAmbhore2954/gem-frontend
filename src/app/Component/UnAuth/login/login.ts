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
export class Login implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private toastr: Toastr
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: "",
      password: ""
    })
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        // success status (200 OK etc)
        if (res?.token) {
          localStorage.setItem('token', res.token);
          this.toastr.showSuccess('Login Successful');
        } else {
          // server responded successfully but no token
          this.toastr.showError('Login failed — invalid response data');
        }
        this.clearForm();
      },
      error: (err) => {
        console.error('Login error', err);
        // show appropriate error toast
        if (err.status === 401) {
          this.toastr.showError('Invalid email or password');
        } else {
          this.toastr.showError('Login failed — server error');
        }
      }
    });
  }


  clearForm() {
    this.loginForm.reset();
  }

}
