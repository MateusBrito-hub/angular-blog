import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input()
  imageCover: string = '';
  @Input()
  newsCategorie: string = '';
  @Input()
  contentTitle: string = '';
  @Input()
  contentDescription: string = '';
  private Id:string | null = '0'

  constructor( private route:ActivatedRoute ){
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.Id = value.get("id")
    )

    this.setValuesToComponent(this.Id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    if (result) {
      this.contentTitle = result.title
      this.newsCategorie = result.categorie
      this.contentDescription = result.description
      this.imageCover = result.photo
    }
  }

}
