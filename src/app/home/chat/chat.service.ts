import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AllMessagesResponse } from './models/all-messages-response';
import { Message } from './models/message';
import { BehaviorSubject } from 'rxjs';
import { messages } from './data/message-data';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: Message[] = [];
  messageSubject: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>(messages.reverse());

  constructor() { }

  getMessages(chatId: number, workspaceId: number): Observable<Message[]> {
    return this.messageSubject;
  }

  sendMessages(payload: Message): Observable<void> {
    const messages = [payload, ...this.messageSubject.value];
    this.messageSubject.next(messages);
    
    console.log('nouveau message', payload);

    return of();
  }
}
