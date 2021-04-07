import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from "./staff/staff.component"
import { CharactersComponent } from "./characters/characters.component";
import { StudentsComponent } from "./students/students.component";

const routes: Routes = [
  { path: 'staff', component: StaffComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'students', component: StudentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { 

  

}
