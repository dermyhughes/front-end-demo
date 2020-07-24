import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { NavbarItem } from '../../models/header.interface';
import { EventListenerOptions } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

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

  innerWidth: number;

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

  ngAfterViewInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event) {
      this.innerWidth = event.target.innerWidth;
    }
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

  openMenu() {
    alert('!');
  }

}
