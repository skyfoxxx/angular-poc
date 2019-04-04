import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  firstName = '';
  lastName = '';
  email = '';
  number = '';
  address = '';
  record = '';
  password = '';
  cnf_pwd = '';

  constructor(
      private formBuilder: FormBuilder,
      private userService: UserService,
      private router: Router
      // private alertService: AlertService) { }
  ) {}

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', Validators.required],
          number: ['', [Validators.required, Validators.minLength(6)]],
          address: ['', Validators.required],
          record: [''],
          password: ['', Validators.required],
          cnf_pwd: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.userService.register(this.registerForm.value).subscribe();
    this.router.navigate(['/login']);
  }

}
