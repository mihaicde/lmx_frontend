import { Component,  } from '@angular/core';
import {CdkTextareaAutosize, TextFieldModule} from '@angular/cdk/text-field';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
}

