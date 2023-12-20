import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  fontSize = "22px"
  titleDescription = "How can we help you today? You can tell me what interests you, choose from a starting point or you can jump directly to the rest of the site";
  typingText = "";
  private currentIndex = 0;
  initalSetup = true;
  placeHolder = "What do you want to do today?";
  userInput="";
  percent=0;



  ngOnInit(): void {
    this.typeNextCharacter();

  }

  typeNextCharacter(): void {
    if (this.currentIndex < this.placeHolder.length) {
      this.typingText += this.placeHolder.charAt(this.currentIndex++);
      setTimeout(() => this.typeNextCharacter(), 20); // Adjust typing speed
    } else if (this.currentIndex === this.placeHolder.length) {
      // Once typing is complete, stop further typing
      this.currentIndex++; 
    }
  }

  onEnterPressed(inputField: HTMLInputElement) {
    this.initalSetup = false;
    console.log("Enter pressed");
    console.log(this.userInput);
    this.percent= this.percent+10;
    this.typingText = "";
    this.currentIndex = 0;
    this.placeHolder ="You are so amazing"
    this.typeNextCharacter();
    this.userInput = "";
    inputField.blur();

  }


}
