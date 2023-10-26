import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import eventsJson from '../../assets/events.json';
import { EventService, Events } from './event.service';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})


export class AgendaComponent {
  
  isButtonClicked1 = true;
  isButtonClicked2 = false;
  findText!: string;
  filteredEvents!: Events[];
  allEvents: Events[] = eventsJson.events;
  allSpeakers = [];
  animacionPulso: boolean = false;
  selectedEvent: Events;
  eventCardInfo = false;
  

  constructor(private service: EventService) { 
  }

  ngOnInit() {
    console.log(this.allEvents);

    this.service.searchText.pipe(
      debounceTime(500)
    ).subscribe({next: (next) => {
      this.findText = next;
      console.log(this.findText);
      if(this.findText != ''){
        this.filteredEvents = this.allEvents.filter((event) => event.title.toLocaleLowerCase().includes(this.findText.toLocaleLowerCase()) || event.info.toLocaleLowerCase().includes(this.findText.toLocaleLowerCase()));
      }
      else{
        this.filteredEvents = this.events;
      }
    }
    });


  }

  get events() {
    
    return eventsJson.events;
  }

  onClick1() {
    this.isButtonClicked1 = true;
    this.isButtonClicked2 = false;

    this.animacionPulso = true;
    setTimeout(() => {
      this.animacionPulso = false;
    },1000);
  }

  onClick2() {
    this.isButtonClicked1 = false;
    this.isButtonClicked2 = true;

  }

  busqueda(){
    this.service.changeText(this.findText);
  }

  
  goBack(){
    this.eventCardInfo = false;
  }

  getEvent(event: Events) {
    this.eventCardInfo = true;
    this.selectedEvent = event;
  }
}
