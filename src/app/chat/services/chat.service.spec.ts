import {inject, TestBed} from '@angular/core/testing';

import { ChatService } from './chat.service';
import {HttpClient} from '@angular/common/http';
import {Message} from '../models/message';

describe('ChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ChatService, HttpClient, Message]
  }));

  it('should ...', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));
});
