import { Component, OnInit } from '@angular/core';
import { ApiCallService } from "../api-call.service";
import { person } from "../columnNames.model";


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private api:ApiCallService) { }

  ngOnInit(): void {
    this.getStaff();
  }

  public staffData: person[] = [];
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  dataSource;
  staff:person;
  
 handleStaff(staffList:JSON){

  for (let index = 0; index < Object.keys(staffList).length; index++) {
    const element = staffList[index];
    let age:String;
    if(element.yearOfBirth == ""){
      age = "Not Known"
    }else{
      age = (2021-(Number.parseInt(element.yearOfBirth))).toString();
    }
    let patronus:String
    if(element.patronus == ""){
      patronus = "none";
    }else{
      patronus = element.patronus;
    }
    let p:person = {
      name:element.name,
      patronus:patronus,
      age:age,
      image:element.image
    }
    this.staffData.push(p);    
  }
  console.log(this.staffData);
  this.dataSource = this.staffData;
 }

async getStaff(){
  (await this.api.getStaff()).subscribe(
    (staffList:JSON)=>{
      console.log(staffList);
      this.handleStaff(staffList);
    }
  )
}

}
