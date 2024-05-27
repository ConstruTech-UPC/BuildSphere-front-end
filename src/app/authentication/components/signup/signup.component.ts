
import { Component } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import {User} from "../../interfaces/auth";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', Validators.required],
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required]


  })

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private messageService: MessageService,
              private router: Router) {}

  get firstName() {
    return this.registerForm.controls['firstName'];
  }
  get lastName() {
    return this.registerForm.controls['lastName'];
  }
  get email() {
    return this.registerForm.controls['email'];
  }
  get phoneNumber() {
    return this.registerForm.controls['phoneNumber'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get passwordConfirm() {
    return this.registerForm.controls['passwordConfirm'];
  }
  submitDetails() {
    //console.log(this.registerForm.value);
    const postData = { ...this.registerForm.value };
    delete postData.passwordConfirm;
    this.authService.registerUser(postData as User).subscribe(
        response => {
          console.log(response);
          this.messageService.add({severity:'success', summary:'Success', detail:'User registered successfully'});
          this.router.navigate(['/login'])
        }
       
    )
  }

}
