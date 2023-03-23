import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { ChatService } from '../chat.service';
import {C, COMMA, ENTER, SPACE} from  '@angular/cdk/keycodes' ;
import { Conversation, ConversationHttpService, Message, MessageHttpService } from 'src/app/core/clients/slack-api';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  @Input() conversationId!: string;
  @Output() sendMessages = new EventEmitter<Message>;

  formGroup: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required),
  });

  constructor(private readonly chatservice: ChatService, private readonly messageService: MessageHttpService ) { }

  ngOnInit(): void {
  }

  getValue(): void {
    if (this.formGroup.valid) {
      const user = JSON.parse(localStorage.getItem('user') || '{}')
      console.log('appel service');
      this.messageService.messageControllerCreateMessage({
        conversationId: this.conversationId,
        text: this.formGroup.value.message,
        userId: user.id,
       }).subscribe(
        (msg) => {
          console.log('nouveau message', msg);
          this.sendMessages.emit(msg);
        }
       );

      this.formGroup.controls['message'].reset(null);
    }
    
  }
}
