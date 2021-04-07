import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
url_Characters = "http://hp-api.herokuapp.com/api/characters/house/";
url_Staff = "http://hp-api.herokuapp.com/api/characters/staff";
url_Students = "http://hp-api.herokuapp.com/api/characters/students";
  constructor(private http:HttpClient) { }

  public async getCharacter(house:String){
    let character_list = this.http.get<JSON>(this.url_Characters+house);
    return character_list;
  }

  public async getStaff(){
    let staff_list = this.http.get<JSON>(this.url_Staff);
    return staff_list;
  }

  public async getStudent(){
    let student_list = this.http.get<JSON>(this.url_Students);
    return student_list;
  }
}

