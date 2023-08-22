import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');


import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavContent, MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './home/chat/chat.component';
import { SearchComponent } from './home/search/search.component';
import { SidePanelComponent } from './home/side-panel/side-panel.component';
import { ChanelComponent } from './home/side-panel/chanel/chanel.component';
import { DirectMessagesComponent } from './home/side-panel/direct-messages/direct-messages.component';
import { UnreadMessagesComponent } from './home/side-panel/unread-messages/unread-messages.component';
import { MessageComponent } from './home/chat/message/message.component';
import { TextAreaComponent } from './home/chat/text-area/text-area.component';
import { ProfilComponent } from './home/search/profil/profil.component';
import { ApiModule, Configuration, ConfigurationParameters } from './core/clients/slack-api';
import { environment } from 'src/environments/environment';
import { NavigationComponent } from './home/side-panel/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ContactsComponent } from './home/side-panel/contacts/contacts.component';

function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.apiUrl,
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ChatComponent,
    SearchComponent,
    SidePanelComponent,
    ChanelComponent,
    DirectMessagesComponent,
    UnreadMessagesComponent,
    MessageComponent,
    TextAreaComponent,
    ProfilComponent,
    NavigationComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule,

    HttpClientModule,
    BrowserAnimationsModule,
    ApiModule.forRoot(apiConfigFactory),
    LayoutModule,
    MatPaginatorModule
  ],

  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
