import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importă CommonModule
import { ExchangeRateService } from '../services/exchange-rate.service';

@Component({
  selector: 'app-currency-info',
  standalone: true, // Specifică că este o componentă standalone
  imports: [CommonModule], // Adaugă CommonModule aici
  templateUrl: './currency-info.component.html',
  styleUrls: ['./currency-info.component.css'],
})
export class CurrencyInfoComponent implements OnInit {
  exchangeRates: { [key: string]: number } = {};
  currencies: { code: string; rate: number }[] = [];

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit() {
    this.loadExchangeRates();
  }

  loadExchangeRates() {
    this.exchangeRateService.getExchangeRates().subscribe({
      next: (data) => {
        if (data && data.quotes) {
          this.exchangeRates = data.quotes;
          this.currencies = Object.keys(this.exchangeRates).map((key) => ({
            code: key.replace('USD', ''), // Extrage simbolurile valutelor
            rate: this.exchangeRates[key], // Extrage ratele de schimb
          }));
        }
      },
      error: (err) => {
        console.error('Error fetching exchange rates:', err);
      },
    });
  }

  goToHome() {
    window.location.href = '/';
  }
}
