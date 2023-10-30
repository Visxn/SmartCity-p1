import { BehaviorSubject } from "rxjs"
import eventsJson from '../../assets/events.json';

export type Events = {
    title: string,
      info: string,
      time: string,
      room: string,
      id: number
    };

export class EventService {

  searchText: BehaviorSubject<string> = new BehaviorSubject<string>('');
  events: Events[] = eventsJson.events;

  changeText(text: string) {
    this.searchText.next(text);
  }

  


  
}