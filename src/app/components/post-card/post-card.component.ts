import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  /** Post icon in meta title */
  @Input() icon: string;
  @Input() metaTitle: string;
  @Input() mainTitle: string;
  @Input() postCopy: string;

  constructor() { }

  ngOnInit(): void {
  }

}
