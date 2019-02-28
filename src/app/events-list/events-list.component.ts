import {Component, OnInit} from '@angular/core';
import {EventsService} from '../events.service';

@Component({selector: 'app-events-list', styleUrls: ['./events-list.component.css'], templateUrl: './events-list.component.html'})
export class EventsListComponent implements OnInit {

  events : any[]
  constructor(private eventsService : EventsService) {}

  ngOnInit() {
    this.events = this
      .eventsService
      .getEvents();
  }

  onViewEvent() {
    console.log(event, "=========xxx")
  }

}
