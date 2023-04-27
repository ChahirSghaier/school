import { Component, OnInit } from '@angular/core';
import {ReclamationService} from '../../Core/Services/Reclamation.service';
import {Reclamation} from '../../Core/Model/Restaurent';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {

  constructor(private recService: ReclamationService) { }
  public list: Reclamation[];
  content: string;
  ngOnInit(): void {
    this.recService.getAllReclamation().subscribe(
      ( data: Reclamation[] ) => {
        this.list = data ;
        console.log(this.list);
        console.log(data);
      });
  }
    Search() {
      if (this.content !== '') {
        this.list = this.list.filter(res => {
          return res.content.toLocaleLowerCase().match(this.content.toLocaleLowerCase());
        });
      } else if (this.content === '') {
        this.ngOnInit();
      }


  }

}
