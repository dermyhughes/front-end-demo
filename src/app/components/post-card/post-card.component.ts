import { Component, OnInit, Input } from '@angular/core';
import { PostCard } from 'src/app/models/post-card.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post: PostCard;

  ngOnInit(): void {
    console.log(this.post);
  }

}
