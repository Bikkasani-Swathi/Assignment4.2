import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend_4.2';
  data="";
  constructor(public apiservice:ApiService) {}
  fetchData(){
    this.apiservice.findData().subscribe(response=>{
      console.log(response);
      this.data=JSON.stringify(response);
    })
  }
  addPlayer(data:NgForm){
    this.apiservice.addData(data.value).subscribe(response=>{
      console.log(response);
    })
  }
  updatePlayer(form:NgForm){
    console.log(Number(form.controls['id'].value));
    this.apiservice.updateData(Number(form.controls['id'].value),{"name":form.controls['upd'].value}).subscribe(response=>{
      console.log(response);
    })
  }
  deletelayer(form:any){
    console.log(Number(form.controls['id'].value));
    this.apiservice.deleteData(Number(form.controls['id'].value)).subscribe(response=>{
      console.log(response);
    })
  }
}
