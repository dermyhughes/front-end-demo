import { Component, OnInit } from '@angular/core';
import { NavbarItem } from '../../models/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarItems: NavbarItem[];
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
    this.navbarItems = [
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
  }

  setPrimaryActive(item: NavbarItem) {
    this.navbarItems.map(item => {
      if (item.active) {
        item.active = false;
      }
    })
    item.active = !item.active;
  }

  setSecondaryActive(item: NavbarItem) {
    this.secondaryNavbarItems.map(item => {
      if (item.active) {
        item.active = false;
      }
    })
    item.active = !item.active;
  }

}
