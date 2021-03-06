import { Injectable } from '@angular/core';
import {Message} from '../models/message';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {
    this.messages = new Array<Message>() ;
  }
  messages: Message[];
  public static buildMessages(resultats: Array<any>): Array<Message> {
    const messages = [];
    if (resultats != null) {
      for (const result of resultats) {
        const message = new Message(result);
        messages.push(message);
      }
    }
    return messages;
  }
  public addMessage(message: Message): Observable<Array<Message>> {
    this.messages.push(message);
    return of(this.messages);
  }
  public getMessages(): Observable<Array<Message>> {
    return new Observable<Array<Message>>((observer) => {
      this.http.get<Array<any>>('http://127.0.0.1:3000')
        .subscribe(
          (messages) => {
            this.messages = ChatService.buildMessages(messages);
            observer.next(this.messages);
          }, (error) => observer.error(error),
          () => observer.complete()
        );
    });
  }
}
