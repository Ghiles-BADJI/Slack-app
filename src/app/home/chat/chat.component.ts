import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSerializer } from '@angular/router';
import { Message, MessageHttpService } from 'src/app/core/clients/slack-api';
import { environment } from 'src/environments/environment';
import { DirectMessage } from '../side-panel/models/direct-message';
import { ChatService } from './chat.service';
import { User } from './models/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  conversationId!: string;
  messages: Message[] = [];

  constructor(private readonly route: ActivatedRoute, private readonly messageHttpService: MessageHttpService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.conversationId = params['conversationId']

      this.messageHttpService.messageControllerGetAllMessagesByConvesationId(this.conversationId).subscribe((message) => {
        this.messages = message.sort((a,b) => (a.createAt > b.createAt) ? -1: 1);
      });
    })
  }

  sendMessage(msg: Message) {
    this.messages.push(msg);
    this.messages = this.messages.sort((a,b) => (a.createAt > b.createAt) ? -1: 1);
  }
}
