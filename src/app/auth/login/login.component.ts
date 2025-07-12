import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
          ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: []
})
export class LoginComponent {
  loginForm: FormGroup;
constructor(private fb:FormBuilder, private service: AuthService,private route: Router){
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password:['',[Validators.required]]
  });
}


login(){
  if(this.loginForm.invalid) return;

  const reqData = this.loginForm.value;

  this.service.login(reqData).subscribe(
    (res:any) => {
      localStorage.setItem('token', res.token);
      this.route.navigate(['/dashboard']);
    },
    (error:any) => {
      alert(error.error.message);
      console.error(error);
    }
  );
}
}