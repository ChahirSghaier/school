import { Component, OnInit } from '@angular/core';
import {Reclamation} from '../../../Core/Model/Restaurent';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReclamationService} from '../../../Core/Services/Reclamation.service';
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.scss']
})
export class AddReclamationComponent implements OnInit {
  public reclamation: Reclamation = new Reclamation();
  recForm: FormGroup;
  public action: string;
  // content: string;
  public list: Reclamation[];
  object: string;
  content: string;

  reset()  {
    this.content = '';
  }
  constructor(private recService: ReclamationService,
              private router: Router ,
              private currentRoute: ActivatedRoute,

              private formbuilder: FormBuilder ) { }
  ngOnInit(): void {

    this.recForm = this.formbuilder.group({
      content : [ '' , [Validators.required, Validators.minLength(10)]],
      // dateCreationClaim: ['', [Validators.required]],
      // statusClaim: [ '' , [ Validators.required, Validators.minLength(3)]],

      // types: [ '' , [ Validators.required, Validators.minLength(3)]]

    });

    this.action = 'add';
    this.reclamation = new Reclamation();
  }
  get contentControl() {
    return this.recForm.get('content');
  }
  submitReclamation() {
    const data = {object: this.object, content: this.content};
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.recService.addRec(data, options)
      .subscribe({
        next: (response) => {
          console.log('Reclamation created successfully:', response);
        },
        error: (error) => {
          console.log('Error creating reclamation:', error);
        }
      });
    console.log(options);
    this.router.navigate(['/reclamation']);
  }
}








