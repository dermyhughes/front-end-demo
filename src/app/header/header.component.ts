import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nav = ['Latest Updates', 'Support Centre', 'FAQs', 'Contact Us'];
  secondaryNav = ['Business Support & Advice', 'Expert Clincs', 'Webinars'];

  constructor() { }

  ngOnInit(): void {
  }

}
