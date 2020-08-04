import { Component } from '@angular/core';
import { AppInitializingService } from 'src/app/services/app-initializing/app-initializing.service';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location/location.service';
import { Storage } from '@ionic/storage';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { HttpService } from 'src/app/services/http/http.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  address: any;

  filters: any;
  selectedFilters = {
    subject: null,
    board: null,
    standard: null,
    refurbished: null,
  };
  showFilters = true;

  mathLib = Math;

  subject = new FormControl();
  board = new FormControl();
  standard = new FormControl();
  refurbished = new FormControl();

  constructor(
    private router: Router,
    private locationService: LocationService,
    public storage: Storage,
    public loading: LoadingService,
    public http: HttpService,
    public cartService: CartService
  ) {
    // this.address = "Sani Park, A/301, Ramesh Nagar Amboli, Jaibhavani Mata RD"
    this.storage.remove('cart');
    this.loading.create();
    this.storage.get('default_address').then((address: any) => {
      console.log(address);

      if (address || address != null) {

        console.log('address found');
        this.locationService.getLocationByCoordinates(address.lat, address.lng).then((res: any) => {
          console.log(res);
          this.loading.dismiss();
          this.address = res;
        });
      } else {
        console.log('no_address');
        this.locationService.getLocation().then((res: any) => {
          console.log(res);
          this.address = res;
          this.loading.dismiss();
        });
      }
    });
    console.log(Math.random());
    this.storage.get('selectedFilters').then(selectedFilters => {
      console.log(selectedFilters);
      if (selectedFilters) {
        
        selectedFilters.subject || selectedFilters.board || selectedFilters.standard || selectedFilters.refurbished ?
        this.showFilters = false : this.showFilters = true;

        this.selectedFilters = selectedFilters;
        this.getBooks();
        
        this.subject.setValue(selectedFilters.board);
        this.standard.setValue(selectedFilters.standard);
        this.board.setValue(selectedFilters.board);
        this.refurbished.setValue(selectedFilters.refurbished);
      }



      this.http.call('get', 'api/books/filter/options').then((res: any) => {
          console.log(res);
          this.filters = res.response;
          this.subject.valueChanges.subscribe((subject: any) => {this.selectedFilters.subject = subject; this.getBooks(); });
          this.standard.valueChanges.subscribe((standard: any) => {this.selectedFilters.standard = standard; this.getBooks(); });
          this.board.valueChanges.subscribe((board: any) => {this.selectedFilters.board = board; this.getBooks(); });
          this.refurbished.valueChanges.subscribe((refurbished: any) => {
            this.selectedFilters.refurbished = refurbished;
            this.getBooks();
          });
          console.log(this.selectedFilters);
        });
    });
  }

  toggleFilter() {
    console.log(this.showFilters);
    this.showFilters === true ? this.showFilters = false : this.showFilters = true;
  }

  resetFilter() {
    this.selectedFilters = {
      subject: null,
      board: null,
      standard: null,
      refurbished: null,
    };
    this.storage.remove('selectedFilters');
    this.subject.reset();
    this.board.reset();
    this.standard.reset();
    this.refurbished.reset();
    this.getBooks();
  }
  
  getBooks() {
    console.log(this.selectedFilters);
    this.storage.set('selectedFilters', this.selectedFilters);
    this.cartService.getBooks(this.selectedFilters).then((res: any) => {
      console.log(res);
      console.log(this.cartService.books);
      this.cartService.calculate();
    });
  }

  cart() {
    this.router.navigate(['cart']);
  }

  addToCart(bookId){
    console.log(bookId);
    console.log(this.cartService.books);
    this.cartService.addProduct(bookId, 1).then(res => {
      console.log(res);
    });
  }
  
  removeFromCart(bookId){
    console.log(bookId);
    console.log(this.cartService.books);
    const book = this.cartService.books.findIndex(o=> o.id == bookId);
    console.log(book);
    this.cartService.removeProduct(bookId, 1).then((res: any) => {
      console.log(res);
      console.log(book);
      // if (book > -1 && res.quantity_in_cart == 1) {
      //   this.cartService.books[book].quantity_in_cart -= 1;
      // }
      // console.log(this.cartService.books);
      // console.log(book.quantity_in_cart);
      // book.quantity_in_cart = res.quantity_in_cart;
      // if(book.quantity_in_cart == 1 && (book.quantity_in_cart - 1 == 0)) {
      // }
    });
  }

  setLocation() {
    this.router.navigate(['select-location']);
  }

  refurbishedToggle(itt) {
    console.log(itt);
    this.cartService.refurbishedToggle(this.cartService.books[itt].id).then((res: any) => {
      console.log(res);
      let cartItt = this.cartService.cart.findIndex(o=> o.id == this.cartService.books[itt].id);
      if (cartItt > -1) {
        this.cartService.cart[cartItt].refurbished = this.cartService.cart[cartItt].refurbished == true ? false : true;
        this.cartService.calculate();
      }
    });
  }

  refurbishedOnly() {
    this.getBooks();
  }
}
