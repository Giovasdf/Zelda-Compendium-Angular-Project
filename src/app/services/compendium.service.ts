import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompendiumService {

  constructor(public http:HttpClient) {
   }


  async getAll(){
    return await this.http.get(`${environment.apiUrl}`);
  }
}
