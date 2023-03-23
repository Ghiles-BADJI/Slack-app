import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DirectMessage } from '../models/direct-message';

@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.component.html',
  styleUrls: ['./direct-messages.component.css']
})
export class DirectMessagesComponent implements OnInit {

 // @Input() directMessageList: DirectMessage[] = [];

  @Input() directMessage!: DirectMessage;
  @Input() unread: boolean = false;

  workspaceId = environment.workspaceId;

  constructor() { }

  ngOnInit(): void {

  }

}
