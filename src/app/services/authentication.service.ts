import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  getdata(parameters) {
    return this.http.get('http://localhost:3000/user', { params: parameters });
  }

  putdata(id, parameters) {
    return this.http.put('http://localhost:3000/user/' + id, parameters);
  }

  getProfile(id) {
    return this.http.get('http://localhost:3000/user/' + id);
  }

  getUpcoming() {
    return this.http.get('http://localhost:3000/Upcoming');
  }

  getPast() {
    return this.http.get('http://localhost:3000/Past');
  }

  faqData() {
    return this.http.get('http://localhost:3000/faq');
  }

  logout() {
    localStorage.clear();
  }

}
