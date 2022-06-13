import { Injectable, OnInit, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// let headers = new HttpHeaders()
// headers = headers.append('content-type', 'application/json')
@Injectable({
  providedIn: 'root'
})

export class MapicpinserviceService {

  constructor(private http: HttpClient) { }

  signupaccount(payload: any) {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'auth-secret-key': 'kQLMCQBrfevxhzuPpFWT'
    })
    return this.http.post('https://webapi.magicpin.in/ultron-web/sentAuthOtp/', payload, {
      headers,


    });
  }
  apolo(payload: any) {
    const headers = new HttpHeaders({
      "Authorization": "Bearer 3d1833da7020e0602165529446587434"
    })
    return this.http.post('https://webapi.apollo247.com/', payload, {
      headers,


    });
  }
  verify(payload: any) {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'auth-secret-key': 'kQLMCQBrfevxhzuPpFWT',
      "Access-Control-Allow-Origin" : "*",
      // 'Access-Control-Allow-Origin': ' * ',
      //   'Access-Control-Allow-Credentials': 'true',
      // "Access-Control-Allow-Methods" : "POST",
      // "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization, X-Requested-With",
      // "Access-control-allow-origin": "https://magicpin.in",
      // "Access-Control-Allow-Headers": "Accept"
      // 'X-Requested-With': 'XMLHttpRequest',
    })
    return this.http.post('https://magicpin.in/samapi/users/login/', payload, {
      headers,
    });
  }
}

