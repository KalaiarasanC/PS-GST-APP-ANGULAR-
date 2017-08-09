import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { UserService } from '../user.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

 value =""; 
 id:string;
 name:string;
 price:number;
 tax:number;
 items:[{}];
 product;
///product : Product;
  constructor(private router:Router, private user:UserService) { 

  }

  ngOnInit() {
  
  }

 addNewItem(e){
     	e.preventDefault();
     	var product={
     code :this.id,
     name : this.name,
     price :this.price,
     taxPercentage : this.tax
  };

    //console.log("product objec:",product);
    this.user.insertData(product);	
    return true;
  }

getValue(e){
	this.value = this.user.getData();
	console.log(this.value.length);
	}
}

interface Product{
	code:string,
	name:string,
	price:number,
	taxPercentage:number
}