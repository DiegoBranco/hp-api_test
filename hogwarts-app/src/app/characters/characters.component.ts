import { Component, OnInit } from '@angular/core';
import { ApiCallService } from "../api-call.service";
import { person } from "../columnNames.model";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})



export class CharactersComponent implements OnInit {

  constructor(private api:ApiCallService) { }
  
  public gryffindorData: person[] = [];
  public slytherinData: person[] = [];
  public hufflepuffData: person[] = [];
  public ravenclawData: person[] = [];
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];

  dataSource;
  character:person;
  selected = 'none';

  ngOnInit(): void {
    this.getCharacter("Gryffindor");
    this.getCharacter("Slytherin");
    this.getCharacter("Hufflepuff");
    this.getCharacter("Ravenclaw");
    this.dataSource = this.gryffindorData;
  }

  onSelectChange(){
    //console.log(this.selected);
    //this.getCharacter(this.selected);
    if(this.selected == "gryffindor"){
      this.dataSource = this.gryffindorData;
      //console.log(this.gryffindorData)
      
    }
    if(this.selected == "slytherin"){
      this.dataSource = this.slytherinData;
      //console.log(this.slytherinData)

    }
    if(this.selected == "hufflepuff"){
      this.dataSource = this.hufflepuffData;
      //console.log(this.hufflepuffData)

    }
    if(this.selected == "ravenclaw"){
      this.dataSource = this.ravenclawData;
      //console.log(this.ravenclawData)
    }
    //console.log(this.dataSource);
  }

  handleCharacter(characterList:JSON,house:String){
    for (let index = 0; index < Object.keys(characterList).length; index++) {
      const element = characterList[index];
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

      if(house == "Gryffindor"){
        this.gryffindorData.push(p);
      }
      if(house == "Slytherin"){
        this.slytherinData.push(p);
      }
      if(house == "Hufflepuff"){
        this.hufflepuffData.push(p);
      }
      if(house == "Ravenclaw"){
        this.ravenclawData.push(p);
      }
    }
    //console.log(this.characterData);

  }

  async getCharacter(house:String){
    (await this.api.getCharacter(house)).subscribe(
      (characterList:JSON)=>{

        console.log(house)
        console.log(characterList);
        this.handleCharacter(characterList,house)
      }
    )
  }

}
