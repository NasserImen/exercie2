import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-user-f',
  templateUrl: './user-f.component.html',
  styleUrls: ['./user-f.component.css']
})
export class UserFComponent implements OnInit {
  userForm : FormGroup;
  
  // userForm = new FormGroup({
  //   name : new FormControl(),
  //   email : new FormControl(),
  //   payementInformations : new FormGroup({
  //     typeCarte : new FormControl(),
  //     numero : new FormControl(),
  //     dateExpiration : new FormControl(),
  //     code  : new FormControl()
  //   })
  // })
  constructor(private fb : FormBuilder) {
    payementInformations : FormGroup;
    this.userForm = this.fb.group({
    name : ['',[Validators.required , Validators.minLength(3)]],
    email : [''],
    payementInformations : this.fb.group({
      typeCarte : [''],
      numero : [''],
      dateExpiration: [''],
      code : ['']
    })

    })
   }

  ngOnInit(): void {
 
  }
 

}
