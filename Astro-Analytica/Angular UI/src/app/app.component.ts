import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import {WebService} from "./web.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bostonhousing';
  rm : any;
  lstat: any;
  jobsOutput :any ;
    public jt: any ;
  checkoutForm ;

  constructor(public fb: FormBuilder ,private myService: WebService) {
    this.myService.arrBirds;
    this.checkoutForm = this.fb.group({
      rm: '',
      lstat: ''
    });
    
    
   }


   onSubmit(value) {
    alert(JSON.stringify(this.checkoutForm.value));
    // console.log(value.textContent);
    console.log(this.rm = this.checkoutForm.value.rm);
    console.log(this.lstat = this.checkoutForm.value.lstat);
    this.myService.post(this.rm,this.lstat).subscribe( 
      res => {

        var jt = res['price'];
        // for(let pr of res['data']){
        //   var lst = new Array();
        //   lst.push(pr.job_title);
        //   lst.push(pr.job_type);
        //   console.log(lst);
        //   jt.push(pr);
          
        //    //console.log(pr.job_title);
        // }
        this.jobsOutput = jt;
        console.log(jt);
        console.log(this.jobsOutput);

      },
        
      );;
    }
}
