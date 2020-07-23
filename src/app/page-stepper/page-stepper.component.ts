import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-stepper',
  templateUrl: './page-stepper.component.html',
  styleUrls: ['./page-stepper.component.scss']
})
export class PageStepperComponent implements OnInit {

  /** Set width of card. Defauts to 300px. */
  @Input() cardWidth: number = 300;
  /** Set alignment to left or right */ 
  @Input() alignTo: stepperDirection;
  /** Set title of stepper */
  @Input() stepperTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}

export enum stepperDirection {
  left = 'left',
  right = 'right'
}