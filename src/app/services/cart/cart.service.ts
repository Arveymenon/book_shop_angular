import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Storage } from '@ionic/storage';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: any = [];

  public books: any = [];
  
  public recommendations = [];

  public total = 0;

  public filter = {
      subject: null,
      standard: null,
      board: null,
      refurbished: false
    };


  constructor(
    private http: HttpService,
    private storage: Storage,
    private loading: LoadingService
  ) {
    // do not remove this function call.
    this.getBooks();
  }

  getBooks(filters?: any) {
    const promise = new Promise((resolve, reject) => {
      this.loading.create();
      this.http.call('post', 'api/books/get/0', JSON.stringify(filters))
      .then((res: any) => {
        console.log(res);
        this.loading.dismiss();
        if (res.error === false) {

              this.storage.get('cart').then((cart: any) => {
              console.log(cart);
              if (cart) {

                this.cart = cart;
                res.response.forEach((element: any) => {
                  const book = cart.find(o => o.id == element.id);
                  console.log(element);
                  console.log(book);
                  if (book) {
                    element.product_type = book.product_type;
                    element.quantity_in_cart = book.quantity_in_cart;
                    element.refurbished = book.refurbished;
                    // tslint:disable-next-line: no-unused-expression
                    } else {
                      element.quantity_in_cart = 0;
                      element.refurbished = false;
                    }
                  });


                this.books = res.response;
                resolve(res.response);
                } else {
                    res.response.forEach((element: any) => {
                        element.quantity_in_cart = 0;
                        element.refurbished = false;
                      });
                    this.books = res.response;
                    resolve(res.response);
                    }
                  });

              } else {
                  console.log('No Books in the database');
                  reject('No Books in the database');
                }
        });
      });
    return promise;
    }

    getCart() {
      return new Promise((resolve, reject) => {

        this.cart = [];
        this.storage.get('cart').then(cart => {
        cart.forEach((element: any) => {
          console.log(element);

          if (element.product_type === 1) {

          this.loading.create();
          this.http.call('post', 'api/books/get/' + element.id)
          .then((res: any) => {

                this.loading.dismiss();
                console.log(res);
                if (res.error === false) {
                  res.response.quantity_in_cart = element.quantity_in_cart;
                  res.response.refurbished = element.refurbished;
                  this.cart.push(res.response);
                  console.log(this.cart);
                }

              });

          } else if (element.product_type === 3) {
            console.log('PackageElement', element);
          }
          console.log(this.books);
          });
        resolve(this.books);
       });
      });
    }

    setCart(cart) {
      const promise = new Promise((resolve, reject) => {
        this.storage.set('cart', cart);
        resolve(cart);
      });
      return promise;
    }

    getRecommendations() {
      if (this.cart) {
        console.log(JSON.stringify(this.cart))
        this.http.call('post', 'api/recommendations/get', JSON.stringify(this.cart))
          .then((res: any) => {
            console.log(res);
            this.recommendations = res.response;
          });
      }
    }

    // addToCart(product, productType) {
    //   return new Promise((resolve, reject)=>{
    //     if (productType === 1) {
    //        this.addBook(product, productType); return;
    //     } else {
    //       product.product_type = productType;
          
    //     }
    //   });
    // }


    calculate() {
      return new Promise((resolve, reject) => {
        let total = 0;

        // this.http.call('post', 'api/books/get/0')
        // .then((res: any) => {
        //   console.log(res);
        //   if (res.error === false) {

        console.log(this.books);
        console.log(this.cart);
        // this.storage.get('cart').then((cart: any) => {
        //   console.log(cart);
        if (this.cart) {
          const calculate = new Promise((resolve2, rej) => {
            this.cart.forEach((element: any) => {
                if (element.product_type === 1) {
                  console.log(element);

                  // If refurbished product available and user has selected it
                  if ((element.book.refurbished_available === 1 ||
                    element.book.refurbished_available === 0) && element.book.refurbished === true) {
                    total = total + (Math.round(element.book.mrp_in_rupees * 0.8) * element.quantity_in_cart);
                    console.log(total);

                  } else {

                    total = total + (element.book.mrp_in_rupees * element.quantity_in_cart);
                    console.log(total);

                  }
                }
                if (element.product_type === 2 || element.product_type === 3) {
                  total = total + (element.book.mrp_in_rupees * element.quantity_in_cart);
                }
              });
            console.log(total);
            resolve2(total);
          });
          calculate.then((calcTotal: number) => {
            console.log(calcTotal);
            this.total = calcTotal;
            resolve(this.total);
          });
        }
              // });
            // }
        // });
    });
  }

  addProduct(ProductId, productType, product?: any) {
    console.log(ProductId);
    console.log(productType);
    
    return new Promise((resolve, reject) => {
    let BookItt: any;
    if(productType == 1){
      BookItt = this.books.findIndex(o => (o.id == ProductId));
      console.log(BookItt);
      this.books[BookItt].quantity_in_cart +=  1;
    }

    const cartBookItt = this.cart.findIndex(o => (o.book.id == ProductId && o.product_type == productType));  // All type. not only books
    console.log(cartBookItt);

    if (cartBookItt > -1) {

        this.cart[cartBookItt].quantity_in_cart +=  1;
        console.log(this.cart);
        console.log(this.books);

        if (this.cart[cartBookItt].refurbished_available === 1 || this.cart[cartBookItt].refurbished_available === 0) {
          this.cart[cartBookItt].refurbished = this.cart[cartBookItt].refurbished === true ? true : false;
        }

        this.cart[cartBookItt].product_type = productType;

        this.setCart(this.cart).then(() => {
          console.log(this.cart);
          this.calculate();
          resolve(this.cart);
        });
      } else {

        var newProduct: any = {};
        newProduct.book = this.books[BookItt] ? this.books[BookItt] : product;
        newProduct.quantity_in_cart = 1;
        newProduct.product_type = productType;
        if (newProduct.refurbished_available === 1 || newProduct.refurbished_available === 0) {
          newProduct.refurbished = newProduct.refurbished === true ? true : false;
        }
        console.log(newProduct);

        this.cart.push(newProduct);

        this.setCart(this.cart).then(() => {
          this.calculate();
          resolve(this.cart);
        });
      }
    });
  }

    removeProduct(productId, productType, product?: any) {
      return new Promise((resolve, reject) => {


        if (productType == 1) {
          const BookItt = this.books.findIndex(o => (o.id == productId));
          console.log(BookItt);
          if (BookItt > -1 )
            this.books[BookItt].quantity_in_cart -=  1;
        }
        //   // Cart Array And Storage

        console.log(this.cart);
        console.log(productId);
        const bookItt = this.cart.findIndex(o => (o.book.id === productId && o.product_type === productType));
        console.log(bookItt);

        if (bookItt > -1) {
          let est = this.cart[bookItt].quantity_in_cart;
          if (est - 1 != 0 ) {
            this.cart[bookItt].quantity_in_cart -= 1;

            this.setCart(this.cart).then(() => {
              resolve(this.cart);
              this.calculate();
            });

          } else {

            // remove the book entirely from the cart
            console.log(this.cart);
            this.cart.splice(bookItt, 1);
            console.log(this.cart);

            this.setCart(this.cart).then(() => {
              resolve(this.cart);
              this.calculate();
            });
          }
        }
        resolve(this.cart[bookItt]);
      });
    }

    removeBook(viewBookItt){
    }

    refurbishedToggle(bookId) {
      console.log(bookId);
      return new Promise((resolve, reject) => {
        console.log(this.cart);
        const viewBookItt = this.books.findIndex(o => o.id == bookId);
        const bookItt = this.cart.findIndex(o => o.id == bookId);
        this.storage.set('cart', this.cart).then(res => {
          this.calculate();
        });
        resolve(this.cart[bookItt]);
        });
    }

}
