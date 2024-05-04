import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


state : any = new BehaviorSubject({
  counter:0,
  cartArray:[],
})



getstateOfCart(){
  return this.state.asObservable()
}

AddToCart(product:any){
  let Array: any[] = [...this.state.value.cartArray];
  if(Array.some((pro:any)=>pro.id ==product.id )){
  const findIndex= Array.findIndex((e:any)=>e.id == product.id)
  Array[findIndex].quantity++
 }else{
  product.quantity=1
  Array.push(product)
 }
const newCount = Array.length

this.state.next({
...this.state,
cartArray:Array,
counter:newCount,
})
}


increment(id :any){


  let Array: any[] = [...this.state.value.cartArray];
    const index = this.state.value.cartArray.findIndex((item :any)=> item.id === id);
    Array[index].quantity+=1
    this.state.next({
        ...this.state,
        cartArray:Array,
        counter:Array.length

    })

}



decrement(id:any){
let Array: any[] = [...this.state.value.cartArray];
  const index = this.state.value.cartArray.findIndex((item:any) => item.id === id);
  if( Array[index].quantity > 0 ){
    Array[index].quantity-=1
      if(Array[index].quantity === 0){
       const splic : any =  Array.splice(index, 1);
       Array=Array.filter((e : any)=> e.id != splic.id)
      }
  }
  this.state.next({
      ...this.state,
      cartArray:Array,
      counter:Array.length,
  })
}
removeFromCart(id:any){
  const indexToRemove = this.state.value.cartArray.findIndex((item:any) => item.id ===id);
          if (    indexToRemove !== -1   ) {
        const newCart=  this.state.value.cartArray.splice(indexToRemove, 1);
       const cart= this.state.value.cartArray.filter((e:any)=> e.id !=newCart.id)
       this.state.next({
          ...this.state,
          cartArray:cart,
          counter:cart.length,
        })

      }
}
}



