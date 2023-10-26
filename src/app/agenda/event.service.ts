import { BehaviorSubject } from "rxjs"

export type Events = {
    title: string,
      info: string,
      time: string,
      room: string
    };

export class EventService {

  searchText: BehaviorSubject<string> = new BehaviorSubject<string>('');

  changeText(text: string) {
    this.searchText.next(text);
  }

  
}