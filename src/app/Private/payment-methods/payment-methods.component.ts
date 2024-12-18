import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-payment-methods',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './payment-methods.component.html',
  styleUrl: './payment-methods.component.scss'
})
export default class PaymentMethodsComponent {

}
