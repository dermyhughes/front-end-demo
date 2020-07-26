import { Component, OnInit } from '@angular/core';
import { NavbarItem } from '../../models/header.interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  contentItems: NavbarItem[] = [
    {
      title: 'Introduction',
      link: '#'
    },
    {
      title: 'Cashflow Management',
      link: '#',
      active: true
    },
    {
      title: 'Business Rates',
      link: '#'
    },
    {
      title: 'Tax',
      link: '#'
    },
    {
      title: 'Grants',
      link: '#'
    },
    {
      title: 'Loans',
      link: '#'
    },
    {
      title: 'Taxable equipment for employees WFH',
      link: '#',
      strong: true
    },
    {
      title: 'Filing accounts',
      link: '#'
    },
    {
      title: 'Insurance',
      link: '#'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setActive(item: NavbarItem) {
    this.contentItems.map(item => {
      if (item.active) {
        item.active = false;
      }
    })
    item.active = !item.active;
  }

}
