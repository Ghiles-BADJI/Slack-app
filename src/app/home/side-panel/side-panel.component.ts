import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';
import { Conversation, ConversationHttpService } from 'src/app/core/clients/slack-api';
import { Chanel } from './models/chanel';
import { DirectMessage } from './models/direct-message';
import { UnreadMessage } from './models/unread-message';
import { SidePanelHttpService } from './side-panel-http.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent {
  unreadMessages: UnreadMessage[] = [];
  chanelList: Chanel[] = [];
  directMessageList: DirectMessage[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private readonly sidePanelHttpService: SidePanelHttpService, private readonly route: ActivatedRoute, private readonly conversationHttpService: ConversationHttpService) {}

  ngOnInit(): void {
    const workspaceId = this.route.snapshot.params['workspaceId'];

    // this.sidePanelHttpService.getAllConversations(workspaceId).subscribe((allConversations) => {
    //   this.unreadMessages = allConversations.unreadMessages;
    //   this.chanelList = allConversations.chanelList;
    //   this.directMessageList = allConversations.directMessageList;
    // });
    this.conversationHttpService.conversationControllerGetAllConversations().subscribe((conversations: Conversation[]) => {
      this.directMessageList = conversations.filter((c: Conversation) => c.directMessage);
      this.chanelList = conversations.filter((c: Conversation) => !c.directMessage);

    })
    
  }
}
