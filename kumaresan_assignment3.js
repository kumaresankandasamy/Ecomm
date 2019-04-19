var cart=[];
 var Item=function(id,name,price,count){
 	
 	this.id=id;
 	this.name=name;
 	this.price=price;
 	this.count=count;
 }
 function addItemToCart(id,name,price,count){
 	for(var i in cart){
 		if(cart[i].name===name){
	cart[i].count++;
}
 	}
 	var item=new Item(id,name,price,count);
 	cart.push(item);
 }
 addItemToCart(1,"Apple",10.50,1);
 addItemToCart(2,"pear",8.50,2);
 addItemToCart(3,"Orange",7.50,3);

console.log(cart);
console.log(cart[0]);
console.log(cart[0].name); 

function removeItemFromCart(name){
	for(var i in cart){
		if(cart[i].name===name){
			cart[i].count--;
			if(cart[i].count===0){
				cart.splice(i,1);
			}
			break;
		}
	}
}
console.log(cart[0].count);
removeItemFromCart("Apple");
console.log(cart);

function countcart(){
	var totalcount=0;
	for(var i in cart){
		totalcount +=cart[i].count;
	}
	return totalcount;
}
console.log(countcart());

function totalcart(){
	var totalprice=0;
	for (var i in cart) {
		totalprice +=cart[i].price;
	}
	return totalprice;
}
console.log(totalcart());