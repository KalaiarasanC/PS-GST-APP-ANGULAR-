import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';



@Component({
  selector: 'app-bill-product',
  templateUrl: './bill-product.component.html',
  styleUrls: ['./bill-product.component.css']
})
export class BillProductComponent implements OnInit {

public items;
public localItems;
total=0;
indexs:number;
  constructor (private user:UserService) { }

  ngOnInit() {
  	this.items = this.user.getData();
  	this.localItems =[];

  }

  addToBill(e){
  	e.preventDefault();
  	var exist = false;
  	var arr = [];
  	var searchTerm =e.target.elements[0].value;
  	this.items.map(function(item){

  		if(item.name == searchTerm || item.code == searchTerm ){
  			exist = true;
  			arr.push(item);		
  		}
  	});
  	if(!exist){
  		alert(searchTerm + "not found!");
  		console.log("0 of items :", this.items[0]);
  		//this.localItems.push(this.items[0]);
  	}else{
  			for(let i = 0; i<arr.length; i++){
  				this.localItems.push(arr[i]);
  			}
  	}
	return 0;
  }

  removeFromBill(i){
  		this.grandTotalSub(this.localItems[i]);
  		event.preventDefault();
		//console.log(i);
  		this.localItems.splice(i,1); 	
  }

 	grandTotalAdd( i){
 		var obj = this.localItems[i];
 		console.log(typeof obj.quantity);
 		if(typeof obj.quantity == 'number'){
 		this.total += Math.ceil((obj.quantity*obj.price)+((obj.quantity*obj.price)*(obj.taxPercentage/100)));
		///console.log(this.localItems[i].quantity);
	}
 	}	
 	grandTotalSub(obj){
 		 		this.total -= Math.ceil(obj.quantity*obj.price)+((obj.quantity*obj.price)*(obj.taxPercentage/100));		
 		 		this.total = Math.floor(this.total);
 	}
}
