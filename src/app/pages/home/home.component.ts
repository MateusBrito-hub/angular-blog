import { Component } from '@angular/core';
import { BigCardComponent,MenuBarComponent,MenuTitleComponent,SmallCardComponent } from '../../components/components.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent,MenuBarComponent,MenuTitleComponent,SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
