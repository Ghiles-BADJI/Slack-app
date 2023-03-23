import { Component, Input, OnInit, Output } from '@angular/core';
import { Message } from 'src/app/core/clients/slack-api';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() message!: Message;

  isSentByConnectedUser(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    return this.message.user.id === user.id;
  }

}
