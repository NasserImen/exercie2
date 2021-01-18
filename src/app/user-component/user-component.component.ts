import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  user ={
    name : "",
    email : "",
    address :"",
    hobbies : ["Sport" , "Movies" , "Music"]
  }
  display = true;
  button = "Masquer Hobbies"

  
  constructor() { }

  ngOnInit(): void {
    this.user.name = "toto";
    this.user.email="toto@gmail.com";
    this.user.address = "zzz";
  }
affiche(){
  if(this.display) {
    this.button= "Afficher hobbies"
    this.display = false
  }
  else{
    this.display = true
    this.button = "Masquer Hobbies"
  }
 

}
// removec(index){
//   console.log(index);
//   this.user.hobbies.splice(index,1)
  
// }
}
