import { Component, OnInit } from '@angular/core';
import { ApiCallService } from "../api-call.service";


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

async getStaff(){
  (await this.api.getStaff()).subscribe(
    (staffList:JSON)=>{
      console.log(staffList);
    }
  )
}

}
