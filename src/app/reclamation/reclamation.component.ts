import { Component, OnInit } from '@angular/core';
import {ReclamationService} from '../../Core/Services/Reclamation.service';
import {Reclamation} from '../../Core/Model/Restaurent';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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


  deleteClick(idReclamation) {
    if (confirm('Are you sure to delete this project')){
      console.log(idReclamation);
      let i: number = this.list.findIndex(e => e.idReclamation === idReclamation);
      this.recService.delete(idReclamation).subscribe(
        (res: any ) => {
          console.log('bjbjb');

          this.list.splice(i, 1 );
        }, (err) => {console.log(err); } , ( ) => {console.log('aghj'); } );

    }

  }


  // code pour convertir le tableau au pdf
  generatePDF() {

    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('vewPDF.pdf');
    });
  }

}
