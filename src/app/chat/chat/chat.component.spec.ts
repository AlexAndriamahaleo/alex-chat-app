import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import {FormsModule} from '@angular/forms';
import {ChatModule} from '../chat.module';
import {HttpClient} from '@angular/common/http';
import {ChatAffichageComponent} from '../chat-affichage/chat-affichage.component';
import {ChatElementComponent} from '../chat-element/chat-element.component';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClient
      ],
      declarations: [ ChatComponent, ChatAffichageComponent, ChatElementComponent, ChatElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
