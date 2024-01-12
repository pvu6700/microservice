import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Meos } from './meo.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { DaprClient, DaprServer, HttpMethod } from '@dapr/dapr';

const daprHost = '127.0.0.1';
const daprPort = '3500';
// const serverHost = '127.0.0.1';
// const serverPort = '4200';

const client = new DaprClient({daprHost, daprPort});
const serviceAppId = 'meo';
@Injectable({
  providedIn: 'root'
})
export class MeosService {
  baseUrl: string = 'http://localhost:3500/v1.0/invoke/meo/method/'

  constructor(private httpClient: HttpClient) { }

  // public getWelcome(): Observable<String>{
  //   return this.httpClient.get(this.baseUrl, {responseType: 'text'});
  // }
  public async getWelcome(): Promise<any>{
    const serviceMethod = '';
    return await client.invoker.invoke(serviceAppId, serviceMethod, HttpMethod.GET);
  }

  public getMeos(): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'meos');
  }

  public addMeo(name:any, price:any, quantity:any){
    return this.httpClient.post<any>(this.baseUrl + 'addmeos', 
    {name, price, quantity})
    .pipe(map((Meos: Meos) => {
      return Meos;
    }));
  }
}
