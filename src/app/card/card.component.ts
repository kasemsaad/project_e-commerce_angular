import { CommonModule, NgFor, NgIf} from '@angular/common';
import { Component, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRequestService } from '../services/api-request.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, NgIf,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private router:Router , private  productServicee:ApiRequestService , private cartService:CartService){}

  @Input() productItem : any ;

  splitTitle() {
    return this.productItem.title.split(' '); // Split title by space
  }
  getStars(rating: number): number[] {
    return Array.from({ length: Math.ceil(rating) }, (_, index) => index);
  }
  handelDetails(id:any){
    this.router.navigate(["details",id])
      }
      productArrayData :any

        ngOnInit(){
      this.productServicee.getProductList().subscribe((res:any)=>this.productArrayData = res.products)

    }
      addToCart(product:any){
        this.cartService.AddToCart(product)
      }




}
