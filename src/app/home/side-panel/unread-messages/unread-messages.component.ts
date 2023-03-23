import { Component, Input, OnInit } from '@angular/core';
import { Chanel } from '../models/chanel';
import { DirectMessage } from '../models/direct-message';
import { UnreadMessage } from '../models/unread-message';

@Component({
  selector: 'app-unread-messages',
  templateUrl: './unread-messages.component.html',
  styleUrls: ['./unread-messages.component.css']
})
export class UnreadMessagesComponent implements OnInit {
  @Input() unreadMessage!: UnreadMessage;
 
  constructor() { }

  ngOnInit(): void {
  }

}
