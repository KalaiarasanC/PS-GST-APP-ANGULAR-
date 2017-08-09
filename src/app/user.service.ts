import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

	private data; 

  constructor() {
this.data=[{
	code:"235",
	name:"XzYYY",
	price:70,
	taxPercentage:12
},{
	code:"236",
	name:"opXYYY",
	price:70,
	taxPercentage:1
},{
	code:"237",
	name:"ssXYYY",
	price:70,
	taxPercentage:12
}

];
   }


   insertData(obj){
   	this.data.push(obj);
   	return 0;
   }

   getData(){
   	return this.data;
   }
}
