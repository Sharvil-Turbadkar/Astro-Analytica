import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_URL;
  

   post$: Observable<any>;
    private myMethodSubject = new Subject<any>();

    constructor(private http: HttpClient) {
      this.ROOT_URL = "http://localhost:8000/predict";
        this.post$ = this.myMethodSubject.asObservable();
    }
    arrBirds: string [];
    post(rm : any, lstat : any) {
        console.log(rm);
        console.log(lstat); 
        
        
         this.http.post(`${this.ROOT_URL}`,rm,lstat);
         return this.http.post(`${this.ROOT_URL}`,{rm,lstat});
        
    }
}
