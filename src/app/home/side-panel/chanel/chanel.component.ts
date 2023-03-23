import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Chanel } from '../models/chanel';

@Component({
  selector: 'app-chanel',
  templateUrl: './chanel.component.html',
  styleUrls: ['./chanel.component.css']
})
export class ChanelComponent implements OnInit {

  @Input() chanel!: Chanel;
  @Input() unread: boolean = false;

  workspaceId = environment.workspaceId;

  constructor() { }

  ngOnInit(): void {
  }

}
