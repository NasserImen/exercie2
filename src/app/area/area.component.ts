import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})


export class AreaComponent implements OnInit {
  x =1
  y =0
  pi =3.14

  constructor() { }

  ngOnInit(): void {
  }
carre (){
  console.log(this.x);
  
this.y = this.x*this.x;
console.log(this.y);

}
cercle(){
  this.y = this.x*2*this.pi
  console.log(this.y);
  
}
}
