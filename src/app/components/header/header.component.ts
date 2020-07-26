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

  isMobile: boolean;
  /** Inner width of window */
  innerWidth: number = window.innerWidth;

  /** State on mobile menu */
  isOpen: boolean = false;

  ngOnInit(): void {
    
    this.checkWidth();

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
    this.checkWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event) {
      const innerWidth = event.target.innerWidth;
      if (innerWidth < 1080) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
      this.innerWidth = innerWidth;
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

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  checkWidth(): void {
    if (window.innerWidth < 1080) {
      this.isMobile = true;
    }
  }

}
