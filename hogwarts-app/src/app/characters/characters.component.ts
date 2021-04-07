import { Component, OnInit } from '@angular/core';
import { ApiCallService } from "../api-call.service";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private api:ApiCallService) { }

  ngOnInit(): void {
    this.getCharacter("Slytherin")
  }

  async getCharacter(house:String){
    (await this.api.getCharacter(house)).subscribe(
      (characterList:JSON)=>{
        console.log(characterList);
      }
    )
  }

}
