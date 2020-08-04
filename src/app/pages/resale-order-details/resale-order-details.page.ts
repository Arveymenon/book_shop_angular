import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resale-order-details',
  templateUrl: './resale-order-details.page.html',
  styleUrls: ['./resale-order-details.page.scss'],
})
export class ResaleOrderDetailsPage implements OnInit {
  resaleBooks = [];
  math = Math;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      console.log(params);
      this.http.call('get', 'api/resale/order/details/' + params.params.id).then((data: any) => {
          console.log(data);
          if (data.error == false) {
            this.resaleBooks = data.response.details;
          }
        });
    });
  }

}
