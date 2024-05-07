import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  imageCover:string = '';
  @Input()
  newsCategorie:string = '';
  @Input()
  cardTitle:string = '';
  @Input()
  cardDescription:string = '';
}
