import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {
  prop: boolean = false;
  @Output() buttonClickEmitter = new EventEmitter<boolean>();

   onButtonClick(){
    this.buttonClickEmitter.emit(this.prop);
   }
}
