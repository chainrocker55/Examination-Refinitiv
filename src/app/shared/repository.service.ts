import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Categories } from '../model/categories.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  
  private baseUrl =  environment.baseUrl
  constructor(private http: HttpClient) { }

  getData(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl);
  }
}
