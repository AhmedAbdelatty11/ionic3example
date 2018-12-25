import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as WC from 'woocommerce-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  WooCommerce: any;
  products: any[];

  constructor(public navCtrl: NavController) {

    this.WooCommerce = WC({
      url: "https://ostyle-eg.com",
      consumerKey: "ck_5d7ce2cba9aaf400fa42bf57520f349516e15369",
      consumerSecret: "cs_4fcd09c347614d6c057b3a994f2087349e592ff0",
      wpAPI : true,
version:"wc/v2",
queryStringAuth: true // Force Basic Authentication as query string true and using under HTTPS
    });

    this.WooCommerce.getAsync("products").then( (data) => {
      console.log(JSON.parse(data.body));
      this.products =JSON.parse(data.body);
    },
    (err) => {console.log(err)
    })
  }

}
