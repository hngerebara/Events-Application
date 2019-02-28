import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }
  @Input()
  event

  @Output() viewEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  handleViewClick(){
   this.viewEvent.emit(event);
  }

}
