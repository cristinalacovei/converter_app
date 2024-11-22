import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-info',
  standalone: true,
  imports: [],
  templateUrl: './currency-info.component.html',
  styleUrl: './currency-info.component.css'
})
export class CurrencyInfoComponent {  
    constructor(private router: Router) {}

   goToHome() {
    this.router.navigate(['/']);
  }

}
