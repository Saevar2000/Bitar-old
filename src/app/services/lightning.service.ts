import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LightningService {
  private baseUrl: String;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://192.168.1.10:9112';
   }

   public getInfo(): Observable<any> {
     return this.http.get(this.baseUrl + '/info');
   }

}
