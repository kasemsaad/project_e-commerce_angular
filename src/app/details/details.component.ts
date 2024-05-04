import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRequestService } from '../services/api-request.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailsItem: any;
  @Input() id: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private apiRequestService: ApiRequestService, private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.apiRequestService.getProductList().subscribe((res: any) => {
     
          this.detailsItem = res.products.find((product: any) => product.id === Number(params['id']));
          console.log(this.detailsItem);

      });
    });
  }

  back(): void {
    this.router.navigate(["Home"]);
  }

  handleCart(): void {
    this.router.navigate(["cart"]);
  }

  addToCart(product: any): void {
    this.cartService.AddToCart(product);
  }
}
