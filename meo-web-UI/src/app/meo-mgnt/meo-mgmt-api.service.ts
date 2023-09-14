import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { throwError } from "rxjs";
import { catchError } from "rxjs";
import 'rxjs/add/operator/catch';
import {API_URL} from '../env';
import { Meo } from "./meo-mgmt.model";

// const data = from(fetch('${API_URL}/meos'));

@Injectable()
export class MeoMgmtApiService{
    constructor(private http: HttpClient) {
    }
  
    handleError(err: HttpErrorResponse | any) {
      return throwError(() => new Error(err.message || 'Error: Unable to complete request.'));
    }
  
    // GET list of public
    getMeo(): Observable<Meo[]> {
      return this.http.get<Meo[]>('${API_URL}/meos').pipe(catchError(this.handleError))
    }
}