import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'projeto-components';
  // inputText = 'Texto Inicio';
  // inputType = "password";
  // isDisable = false;
  // buttonTitle = 'Butão';

  cardPlanType = 'Completo';
  cardPlanPrice = 250; 


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
