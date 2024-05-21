import {Component, OnInit, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input() photoCover: string = ""
  @Input() cardTitle: string = ""
  @Input() cardDescription: string = ""

  constructor() {
  }

  ngOnInit(): void {
  }

}
