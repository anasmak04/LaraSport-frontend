import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from "../../../shared/shared.service";
import { AuthServiceService } from '../../../services/Authservice/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any = FormGroup;
  cities: any[] = [];

  constructor(
    private fb: FormBuilder,
    private data: SharedService,
    private authService: AuthServiceService,
    private router : Router,
    
  ) {}

  ngOnInit() {
    this.getCities();
    this.initializeForm();
  }

  initializeForm(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', [Validators.required]]
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          this.authService.storeToken(response.access_token);
          console.log(response);
          this.router.navigate(['/login']);

        },
        error: (error) => {
          console.error('Registration failed', error)
        }
        
      });

    }
  }

  getCities() {
    this.data.getData().subscribe((data) => {
      this.cities = data;
    });
  }
}
