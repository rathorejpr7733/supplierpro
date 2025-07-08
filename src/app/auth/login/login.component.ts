import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: []
})
export class LoginComponent {
constructor(private service: AuthService,private route: Router){}
login(){
const reqData = {
  email: 'pytosoft@gmail.com',
  password: '123456'
}
this.service.login(reqData)
.subscribe((res: any) => {

  localStorage.setItem('token', res.token)
  console.log(res);

 this.route.navigate(['/app/dashboard'])
}, error => {
  console.log(error);
  alert(error.error.message)
})
}
}
