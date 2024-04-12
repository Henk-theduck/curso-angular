import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cardPlanType = 'Completo';
  cardPlanPrice = 250; 


  handlePlanType(value: string){
    this.cardPlanType = value;
    if (value == '') {
      this.cardPlanType = 'Completo';
    }
  }


  // widthButton = '110px';

  // visibleText(){
  //   this.inputType = "text";
  // }
  // invisibleText(){
  //   this.inputType = "password";
  // }

  // handleInput(event: KeyboardEvent){
  //   const currentText = (event.target as HTMLInputElement); 
  //   console.log(currentText.value);
  // }

 
}
