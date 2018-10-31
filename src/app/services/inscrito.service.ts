import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const API_URL = 'http://localhost:8080/sisPagosWs/inscriptionByUserId/';

@Injectable()
export class InscritoService {
  constructor(private http: Http) { }
  getIncription(id): Observable<any> {
    const idParam = id;
    const type = 'W2';
    return this.http.get(API_URL + idParam + '/' + type)
      .map((res: Response) => res.json());
  }
}
