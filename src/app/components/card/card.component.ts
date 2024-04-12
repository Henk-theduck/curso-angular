import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  private _planType: string = 'Simples';

  @Input() 
  set planType(value: string){this._planType=value.toUpperCase();}
  get planType(): string {return this._planType;}
  
  @Input() planPrice: number = 100;

  buttonClicked(event: boolean){
    this.planPrice += 10;
  }

}
