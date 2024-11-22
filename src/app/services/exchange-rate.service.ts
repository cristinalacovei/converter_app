import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRateService {
  private apiUrl =
    'http://api.exchangerate.host/live?access_key=1dd7a9b2a1457308a600f0f3305b4865';

  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
