import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public addData(playerdata:any):Observable<any>{
    return this.http.post("http://localhost:8080/add",playerdata)
  }

  public updateData(playerid:Number,data:any):Observable<any>{
    const url=`http://localhost:8080/update/${playerid}`
    return this.http.patch(url,data);
  }

  public deleteData(playerid:number):Observable<any>{
    const url=`http://localhost:8080/delete/${playerid}`
    return this.http.delete(url);
  }

  public findData():Observable<any>{
    const url="http://localhost:8080/findqueries";
    return this.http.get(url);
  }
}
