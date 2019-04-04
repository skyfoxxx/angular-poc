import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private header: HeaderService) { }

  title: string;
  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.firstChild.url[1].path);
    // this.title = this.activatedRoute.snapshot.firstChild.url[1].path;
    this.header.currentMessage.subscribe(message => this.title = message);
  }

}
