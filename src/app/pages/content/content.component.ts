import {Component, OnInit, Input} from '@angular/core';
import {MenuBarComponent} from "../../components/menu-bar/menu-bar.component";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {dataFake} from "../../dataFake/dataFake";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    MenuBarComponent,
    RouterLink
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  @Input() contentTitle: string = "";
  @Input() photoCover: string = "";
  @Input() contentDescription: string = "";
  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(value =>
      this.id = value['id']
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const data = dataFake.filter(value => value.id === id)[0]
    this.contentTitle = data.title
    this.photoCover = data.photoCover
    this.contentDescription = data.description

  }

}
