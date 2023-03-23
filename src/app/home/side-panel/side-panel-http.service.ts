import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChanelComponent } from './chanel/chanel.component';
import { AllConversationsResponse } from './models/all-conversations-response';

@Injectable({
  providedIn: 'root'
})
export class SidePanelHttpService {

  constructor() { }

  getAllConversations(workspaceId: number): Observable<AllConversationsResponse> {
    const fakeResponse: AllConversationsResponse = {
      unreadMessages: [
        {
          chanel: {
            id: '4',
            name: 'Foot'
          }
        },
        {
          directMessage: {
            id: '5',
            name: 'Lorenzo'
          }
        }
      ],

      
      chanelList: [
        {
          id: '1',
          name: 'Travail'
        },
        {
          id: '2',
          name: 'Equipe'
        }
      ], 
      directMessageList: [
        {
          id: '3',
          name: 'Lounes BADJI',
          imageUrl: 'https://i1.wp.com/foot11.com/wp-content/uploads/2022/05/Karim-Benzema-LDC.jpg?fit=2560%2C1706&ssl=1'
        },
        {
          id: '6',
          name: 'Ghiles BADJI',
        },
      ],
      
    };

    return of(fakeResponse);
  }

}
