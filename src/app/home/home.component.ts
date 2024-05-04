import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardComponent } from '../card/card.component';
import {ApiRequestService} from'../services/api-request.service'
// import * as products from '../../assets/products-list.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,CommonModule,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: any ;
  constructor(private apiRequestService: ApiRequestService) {}
  ngOnInit() {
    this.apiRequestService.getProductList().subscribe((res) => this.products = res);
  }

}
