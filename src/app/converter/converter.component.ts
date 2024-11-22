import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExchangeRateService } from '../services/exchange-rate.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
  
export class ConverterComponent implements OnInit {
  amount: number = 0;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  convertedAmount: number | null = null;
  currencies: string[] = [];
  exchangeRates: { [key: string]: number } = {};

  constructor(
    private exchangeRateService: ExchangeRateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadExchangeRates();
  }

loadExchangeRates() {
  this.exchangeRateService.getExchangeRates().subscribe({
    next: (data) => {
      console.log('Raw API Data:', data); // Loghează răspunsul brut
      if (data && data.quotes) {
        this.exchangeRates = data.quotes; // Asignează rates către exchangeRates
        console.log('Exchange Rates:', this.exchangeRates); // Loghează rates
        this.currencies = Object.keys(this.exchangeRates).map((key) =>
          key.replace('USD', '') // Extrage simbolurile valutelor
        );
        console.log('Currencies:', this.currencies); // Loghează lista valutelor
      } else {
        console.error('Unexpected API Response:', data); // Loghează problemele cu răspunsul
      }
    },
    error: (err) => {
      console.error('Error fetching exchange rates:', err); // Loghează erorile
    },
  });
}



  convertCurrency() {
    const rateFrom = this.exchangeRates[`USD${this.fromCurrency}`];
    const rateTo = this.exchangeRates[`USD${this.toCurrency}`];
    if (rateFrom && rateTo) {
      this.convertedAmount = (this.amount / rateFrom) * rateTo;
    } else {
      this.convertedAmount = null; // Gestionare erori
    }
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToCurrencyInfo() {
    this.router.navigate(['/currency-info']);
  }
}