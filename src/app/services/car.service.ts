import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl ='https://localhost:44395/api/cars/getcardetails';
  constructor(private httpclient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
    return this.httpclient.get<CarResponseModel>(this.apiUrl);
    
  }
}
