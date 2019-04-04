import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { HeaderService } from '../../services/header.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  updateForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private header: HeaderService
  ) { }

  post: any;
  user;
  ngOnInit() {

    this.header.changeMessage('Profile');

    this.updateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      record: [''],
      password: ['']
    });

    this.authenticationService.getProfile(localStorage.getItem('data')).subscribe(response => {
      this.user = response;
      this.updateForm.controls['firstName'].setValue(this.user.firstName);
      this.updateForm.controls['lastName'].setValue(this.user.lastName);
      this.updateForm.controls['email'].setValue(this.user.email);
      this.updateForm.controls['number'].setValue(this.user.number);
      this.updateForm.controls['address'].setValue(this.user.address);
      this.updateForm.controls['record'].setValue(this.user.record);
      this.updateForm.controls['password'].setValue(this.user.password);

    });
  }

  updateProfile() {
    this.authenticationService.putdata(localStorage.getItem('data'), this.updateForm.value).subscribe(response => {
      console.log(this.updateForm.value);
      console.log('PUT Request is successful ');
      localStorage.setItem('user', this.updateForm.value.firstName);
      // localStorage.removeItem('data');
      // localStorage.setItem('data', this.updateForm.value);
  });
}
}
