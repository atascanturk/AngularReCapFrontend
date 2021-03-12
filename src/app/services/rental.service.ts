import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl ='https://localhost:44395/api/rentals/getrentaldetails';
  constructor(private httpclient:HttpClient) { }

  getRentals():Observable<RentalResponseModel>{
    return this.httpclient.get<RentalResponseModel>(this.apiUrl);


}}
