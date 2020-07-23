import { Component, OnInit } from '@angular/core';
import { NavbarItem } from './header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarItems: NavbarItem[]  = [
    {
      title: 'Latest Updates',
      link: '#'
    },
    {
      title: 'Support Centre',
      link: '#',
      active: true
    },
    {
      title: 'FAQs',
      link: '#'
    },
    {
      title: 'Contact Us',
      link: '#'
    },
  ];
  secondaryNavbarItems: NavbarItem[] = [
    {
      title: 'Business Support & Advice',
      link: '#',
      active: true
    },
    {
      title: 'Expert Clincs',
      link: '#'
    },
    {
      title: 'Webinars',
      link: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
