import { Component, OnInit } from '@angular/core';
import { FinalService } from './../final.service';
import { Singup } from 'src/app/singup/singup.model';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor( public update:FinalService,public router:Router) {
    console.log(this.edit)
    
 
   }
edit=this.update.edited();


 
  model={
    name:'',Email:'',number:0,Password:'',Gender:''
  }
 
 
  
   

  updated(upda:Singup){
    this.update.update(upda);
   
    this.router.navigate(['content']);
  }

  ngOnInit(): void {
   
   this.model.name=this.edit.name;
   this.model.Email=this.edit.Email;
   this.model.number=this.edit.number;
   this.model.Gender=this.edit.Gender;
   this.model.Password=this.edit.Password;
 
    
  }

}
