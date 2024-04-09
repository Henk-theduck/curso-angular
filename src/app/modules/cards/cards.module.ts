import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardButtonComponent } from '../../components/card-button/card-button.component';
import { CardComponent } from '../../components/card/card.component';
import { CardButtonCancelComponent } from '../../components/card-button-cancel/card-button-cancel.component';



@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardButtonCancelComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    // CardButtonComponent
  ]
})
export class CardsModule { }
