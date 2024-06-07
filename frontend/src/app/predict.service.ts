import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PredictService {

  private url = 'http://127.0.0.1:5000/tahmin';

  constructor(private http: HttpClient) { }

  tahminEt(metin: string): Observable<any> {
    return this.http.post<any>(this.url, { metin });
  }
}
