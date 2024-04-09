import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // type = 'Simples';
  // price = 100;

  // getFullPrice(){
  //   return 'R$'+ this.price + ',00/Mês';
  // }
  plan = {
    type : 'Simples',
    price : 100.50
  };

  @Input() planType: string = 'Simples';
  @Input() planPrice: number = 100;

  buttonClicked(event: boolean){
    this.planPrice += 10;
    console.log(this.planPrice);
    console.log(event)
  }

}
