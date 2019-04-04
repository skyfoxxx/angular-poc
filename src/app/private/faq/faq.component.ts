import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  data ;
  cflag: boolean;

  constructor(private header: HeaderService, private authenticservice: AuthenticationService) { }

  ngOnInit() {
    this.header.changeMessage('Faq');
    this.cflag = true;
    this.authenticservice.faqData().subscribe(response => {
      this.data = response ;
    });
  }
}
