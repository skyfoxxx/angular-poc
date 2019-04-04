import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router, private header: HeaderService) { }

  name: string;
  count: string;
  ngOnInit() {
    this.name = localStorage.getItem('user');
    this.header.currentCount.subscribe(count => this.count = count);
// tslint:disable-next-line: radix
    console.log(parseInt(this.count));
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }
}
