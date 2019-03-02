import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserModule } from './user/user.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventComponent } from './event/event.component';
import { NavComponent } from './nav/nav.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
// import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventComponent,
    NavComponent,
    EventDetailComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
