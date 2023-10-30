import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import eventsJson from '../../assets/events.json';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { EventService, Events } from '../agenda/event.service';




@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {

  selectedEvent: Events;
  eventCardInfo = false;

  
  @Input() event: Events;
  @Output() eventSelected: EventEmitter<Events> = new EventEmitter<Events>();

  constructor(private service: EventService) { 
  }

  
  selectEvent(event: Events){
    this.selectedEvent = event;
    this.eventCardInfo = true;
    this.eventSelected.emit(this.event);
  }

}


