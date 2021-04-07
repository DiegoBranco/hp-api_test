import { Component, OnInit } from '@angular/core';
import { ApiCallService } from "../api-call.service";
import { person } from "../columnNames.model";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private api:ApiCallService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  public studentData: person[] = [];
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  dataSource;
  student:person;

  handleStudents(studentList:JSON){
    for (let index = 0; index < Object.keys(studentList).length; index++) {
      const element = studentList[index];
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
      this.studentData.push(p);    
    }
    //console.log(this.studentData);
    this.dataSource = this.studentData;
   }

  async getStudents(){
    (await this.api.getStudent()).subscribe(
      (studentList:JSON)=>{
        //console.log(studentList);
        this.handleStudents(studentList);
      }
    )
  }


}
