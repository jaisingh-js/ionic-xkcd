import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comic } from '../interfaces/comic';

@Injectable({
  providedIn: 'root'
})
export class XkcdService {
  apiUrl = 'https://xkcd.com/'

  constructor(private http: HttpClient) { }

  getComic(id: number): Observable<Comic> {
    return this.http.get<Comic>(this.apiUrl + id + '/info.0.json');
  }

  getRandomComic(): Observable<Comic> {
    return this.http.get<Comic>(this.apiUrl + this.getRandomNumber() + '/info.0.json');
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 2719);
  }

}
