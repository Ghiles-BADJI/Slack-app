import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profil } from '../side-panel/models/profil';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() profil!: Profil;

  workspaceId = environment.workspaceId;

  constructor() { }

  ngOnInit(): void {
  }

}
