import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelayService {
  private baseUrl = 'http://192.168.29.214';

  constructor(private http: HttpClient) { }

  toggleRelay(relay: number, state: boolean): Observable<any> {
    const url = `${this.baseUrl}/relay${relay}/${state ? 'on' : 'off'}`;
    return this.http.get(url, { responseType: 'text' });
  }
}
