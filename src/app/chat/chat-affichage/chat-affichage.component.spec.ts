import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAffichageComponent } from './chat-affichage.component';
import {FormsModule} from '@angular/forms';
import {ChatModule} from '../chat.module';
import {ChatElementComponent} from '../chat-element/chat-element.component';
import {Message} from '../models/message';
import {ChatComponent} from '../chat/chat.component';
import {AppComponent} from '../../app.component';

describe('ChatAffichageComponent', () => {
  let component: ChatAffichageComponent;
  let fixture: ComponentFixture<ChatAffichageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ChatModule
      ],
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
