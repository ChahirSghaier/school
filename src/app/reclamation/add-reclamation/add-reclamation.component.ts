import { Component, OnInit } from '@angular/core';
import {Reclamation} from '../../../Core/Model/Restaurent';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReclamationService} from '../../../Core/Services/Reclamation.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.scss']
})
export class AddReclamationComponent implements OnInit {
  public reclamation: Reclamation = new Reclamation();
  recForm: FormGroup;
  public action: string;
  content: string;
  public list: Reclamation[];
  constructor(private recService: ReclamationService,
              private router: Router , private currentRoute: ActivatedRoute,

              private formbuilder: FormBuilder ) { }
  ngOnInit(): void {

    this.recForm = this.formbuilder.group({
      content : [ '' , [Validators.required, Validators.minLength(3)]],
      dateCreationClaim: ['', [Validators.required]],
      statusClaim: [ '' , [ Validators.required, Validators.minLength(3)]],

      types: [ '' , [ Validators.required, Validators.minLength(3)]]

    });

    this.action = 'add';
    this.reclamation = new Reclamation();
  }


  Save() {
    if ( this.action === 'add')
    {
      this.recService.addReclamation(this.recForm.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      );
      this.router.navigate(['/reclamation']);



    }      }


}








