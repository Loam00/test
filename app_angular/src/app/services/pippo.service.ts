import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Data, Stores } from '../Model/model';

@Injectable({
  providedIn: 'root'
})
export class PippoService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:3000/routes";

  getStores(): Promise<Stores[]> {
    return lastValueFrom(this.http.get<Stores[]>(`${this.url}/stores`, { responseType: "json"}))
  }

  getData(minimumTotal: number, store_id: number): Promise<Data[]> {
    return lastValueFrom(this.http.get<Data[]>(`${this.url}/${minimumTotal}/${store_id}`, { responseType: "json"}))
  }
}
