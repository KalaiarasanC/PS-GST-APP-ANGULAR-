import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
items =[];
selectedId;
name;
price;
tax;
quantity:number

  constructor(private router:Router, private user:UserService) {
  		this.	items =[];
		this.loadData();
   }

  ngOnInit() {
  }

loadData(){
	this.items = this.user.getData(); 
	return 0;
	}

updateItems(val){
		this.selectedId=val;
		console.log(val);
		this.items.map(function(item){
			if(item.code == val)
			{
				console.log(item);
			}

		});
console.log(this.items);

return 0;
}



}
