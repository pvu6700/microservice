import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Meos } from './meo.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeosService {
  baseUrl: string = 'http://127.0.0.1:5000/'

  constructor(private httpClient: HttpClient) { }

  public getWelcome(){
    return this.httpClient.get<any>(this.baseUrl).pipe();
  }

  public addMeo(name:any, price:any, quantity:any){
    return this.httpClient.post<any>(this.baseUrl + 'meos', 
    {name, price, quantity})
    .pipe(map((Meos:any) => {
      return Meos;
    }));
  }
}
