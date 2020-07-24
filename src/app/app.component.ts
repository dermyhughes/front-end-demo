import { Component } from '@angular/core';
import { PostCard } from './models/post-card.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postCards: PostCard[] = [
    {
      icon: 'newspaper',
      metaTitle: '15 Apr 2020',
      mainTitle: 'Daily Update: Wednesday 15th April'
    },
    {
      metaTitle: 'Straightforward answers',
      mainTitle: 'FAQs',
      postCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
    },
    {
      metaTitle: 'Book a personal consultation',
      mainTitle: 'Expert Clinics',
      postCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
    },

  ];

}
