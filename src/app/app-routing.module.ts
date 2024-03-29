import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './home/chat/chat.component';
import { ProfilComponent } from './home/search/profil/profil.component';
import { ChanelComponent } from './home/side-panel/chanel/chanel.component';
import { DirectMessagesComponent } from './home/side-panel/direct-messages/direct-messages.component';
import { SidePanelComponent } from './home/side-panel/side-panel.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { ContactsComponent } from './home/side-panel/contacts/contacts.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'signup', component: SignupComponent },

  // { path: 'profil', component: ProfilComponent },

  // { path: 'contacts', component: ContactsComponent },


  {
    path: '',
    component: SidePanelComponent,
    children: [
      { path: 'conversation/:conversationId', component: ChatComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'home', component: ChatComponent }

    ]
  },

  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
