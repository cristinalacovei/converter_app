import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent {
  constructor(private router: Router) {}

  amount: number = 0;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  convertedAmount: number | null = null;
  currencies: string[] = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'INR', 'CAD'];

  convertCurrency() {
    const exchangeRates: { [key: string]: number } = {
      USD: 1,
      EUR: 0.85,
      GBP: 0.75,
      JPY: 110,
      AUD: 1.35,
      INR: 74.5,
      CAD: 1.25,
    };

    const rateFrom = exchangeRates[this.fromCurrency];
    const rateTo = exchangeRates[this.toCurrency];
    this.convertedAmount = (this.amount / rateFrom) * rateTo;
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToCurrencyInfo() {
    this.router.navigate(['/currency-info']); // Navighează la pagina de informații despre monede
  }
}
