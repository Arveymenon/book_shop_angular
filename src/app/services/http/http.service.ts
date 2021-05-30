import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http'; 
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment'
// import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public url = 'http://arvey-book-shop.herokuapp.com/';
  public assets_url = 'http://arvey-book-shop.herokuapp.com/storage/';
  
  constructor(public http: HttpClient) {
    if(environment.production){
      this.url = "http://arvey-book-shop.herokuapp.com/"
      this.assets_url = 'http://arvey-book-shop.herokuapp.com/storage/';
    }else {
      this.url = "http://localhost:8000/"
      this.assets_url = 'http://localhost:8000/';
    }

  }

  call(method, apiEndPoint, body?: any) {
    console.log(apiEndPoint);
    // const url = 'https://schooby.us-east-2.elasticbeanstalk.com/' + apiEndPoint;
    // const url = 'http://192.168.1.192:8000/book_shop_backend/' + apiEndPoint;
    const url = this.url + apiEndPoint;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return new Promise((resolve, reject) => {

      switch(method) {
        case 'get': {
          console.log(url)
          this.http.get(url, { headers })
          .subscribe((data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          },
        );
          break;
        }
        case 'post': {
          this.http.post(url, body, { headers })
          .subscribe((data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
            },
          );
          break;
        }
        case 'put': {
          this.http.put(url, body, { headers })
            .subscribe((data) => {
              resolve(data);
            },
            (error) => {
              reject(error);
              },
            );
          break;
        }
        case 'delete': {
          this.http.delete(url, { headers })
            .subscribe((data) => {
              resolve(data);
            },
            (error) => {
              reject(error);
              },
            );
          break;
        }
        default: {
           console.log('method not defined');
           reject('method not defined');
           break;
        }
     }



      // if(method == 'get'){
      //   this.http.get(body,this.option)
      //   .subscribe((data) => {
      //     resolve(data)
      //   },
      //   (error) => {
      //     reject(error);
      //   },
      // );
      // }else if(method == 'post'){

      // }else if(method == 'put'){

      // }else if(method == 'delete'){

      // }
    });
  }

}
