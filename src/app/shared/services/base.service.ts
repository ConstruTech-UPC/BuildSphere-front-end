import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  protected baseUrl = `${environment.serverBasePath}`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }


  constructor(protected http: HttpClient) {
  }
}
