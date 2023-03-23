import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfilDto } from './profil-dto';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  form: FormGroup = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    dateOfBirth: new FormControl(''),
  });

  userById: ProfilDto | undefined
  

  constructor() { }

  ngOnInit(): void {
  }

}
