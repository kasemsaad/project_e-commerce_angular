import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavbarComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {
  handleSubmitForm(){
    console.log(this.register)
    // console.log(this.register.value)
  }
  register : FormGroup;
  constructor(){
    this.register =new FormGroup({
    name : new FormControl('',[Validators.required , Validators.minLength(2)]),
    email : new FormControl('',[Validators.required , Validators.minLength(2)]),
    password : new FormControl('',[Validators.required , Validators.minLength(2)])

    })
  }
}
