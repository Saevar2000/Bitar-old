import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LightningService {
  private baseUrl: string;

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:5000/api/lightning';
  }

  public GetInfo(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  public CreateInvoice(msatoshi: number, description: string): Observable<any> {
    return this.http.post(
      this.baseUrl,
      '{"msatoshi": ' + msatoshi + ', "description": "' + description + '"}',
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}
