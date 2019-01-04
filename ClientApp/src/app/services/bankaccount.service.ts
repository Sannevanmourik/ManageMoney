import { BankAccount } from 'src/app/models/BankAccount';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class BankaccountService {

  apiUrl = 'https://localhost:5001/api/BankAccount';

  constructor(private http: HttpClient) {

  }

  public getAll() {
    return this.http.get<any>(this.apiUrl);
  }

}