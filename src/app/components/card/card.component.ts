import { Component, Input, OnInit } from '@angular/core';
import { Monster } from 'src/app/interface/monster';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{

  @Input() monster!:Monster;

  constructor() { }


}
