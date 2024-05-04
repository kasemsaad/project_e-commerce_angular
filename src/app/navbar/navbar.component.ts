import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private cartService:CartService){}

  cartcounter : any

  ngOnInit(){
    this.cartService.getstateOfCart().subscribe((res:any)=>this.cartcounter=res.counter)
  }
}
