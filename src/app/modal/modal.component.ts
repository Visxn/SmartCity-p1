import { Component, Input } from '@angular/core';
import { EventService, Events } from '../agenda/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  selectedEvent: Events;
  
  constructor(private service: EventService, private activatedRoute: ActivatedRoute, private location: Location) {
    this.activatedRoute.params.subscribe(params => {
      this.selectedEvent = this.service.events.filter(event => event.id === Number(params['id']))[0];
    });
    
   }
   
  goBack(){
     this.location.back();
  }
}
