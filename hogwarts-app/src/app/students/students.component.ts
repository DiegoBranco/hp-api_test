import { Component, OnInit } from '@angular/core';
import { ApiCallService } from "../api-call.service";


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

  async getStudents(){
    (await this.api.getStudent()).subscribe(
      (studentList:JSON)=>{
        console.log(studentList);
      }
    )
  }


}
