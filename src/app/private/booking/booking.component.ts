import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HeaderService } from '../../services/header.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private location: Location, private header: HeaderService,
              private authenticationService: AuthenticationService) { }

  upcoming = true;
  upcomingBooking: any;
  pastBooking: any;
  count: any;

  ngOnInit() {
    this.header.changeMessage('Booking');

    this.authenticationService.getUpcoming().subscribe(r => {
      this.upcomingBooking = r;
      this.authenticationService.getPast().subscribe(r => {
        this.pastBooking = r;
        this.count = this.upcomingBooking.length + this.pastBooking.length;
        console.log(this.count);
        this.header.changeCount(this.count);
      });
    });

    this.showUpcoming();
  }

  showUpcoming() {
    this.upcoming = true;
  }

  showPast() {
    this.upcoming = false;
  }




}
