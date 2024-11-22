import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConverterComponent } from './converter/converter.component';
import { CurrencyInfoComponent } from './currency-info/currency-info.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Pagina principală
  { path: 'convert', component: ConverterComponent }, // Pagina de conversie
  { path: 'currency-info', component: CurrencyInfoComponent }, // Pagina informații monede
];
