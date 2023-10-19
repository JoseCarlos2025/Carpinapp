import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  private jsonURL = '../../assets/data/sections.json';

  constructor(private http: HttpClient) { }

  getJSONData(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
