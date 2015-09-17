// JavaScript Document
(function(){
var app=angular.module('store',['store-products']);
app.controller('StoreController',['$http',function($http){
	var store=this;
	store.products=[];
			/*this.products=gems;*/
	$http.get('Javascript/products.json').success(function(data){
		store.products=data;
	});
}]);
/*var gems=[{
		name:'Dodecahedron',
		price:2.95,
		description:'Dodecahedron is a precious and rarest of gem',
		canPurchase:true,
		soldOut:false,
		images:[
		{full:'Images/dodecahedron-thumb-01.jpg',
		thumb:'Images/dodecahedron-thumb-01.jpg'},
		{full:'Images/dodecahedron-full-02.jpg',
		thumb:'Images/dodecahedron-thumb-02.jpg'}
		],
		reviews:[
		{
			stars:5,
			body:"I love this product",
			author:"joe@thomas.com"
		},
		{
			stars:1,
			body:"This product sucks",
			author:"john@doe.com"
		}
		]
},
{
		name:'Pentagonal Gem',
		price:5.95,
		description:'Pentagonal is a precious and rarest of gem',
		canPurchase:true,
		soldOut:false,
		images:[
		{full:'Images/pentagonal-full-01.jpg',
		thumb:'Images/pentagonal-thumb-01.jpg'},
		{full:'Images/pentagonal-full-02.jpg',
		thumb:'Images/pentagonal-thumb-02.jpg'}
		],
		reviews:[
		{
			stars:5,
			body:"I love this product",
			author:"joe@thomas.com"
		},
		{
			stars:1,
			body:"This product sucks",
			author:"john@doe.com"
		}
		]
}];*/
/*app.controller("PanelController",function(){
		this.tab=1;
		this.selectTab=function(setTab){
			this.tab=setTab;
		};
		this.isSelected=function(checkTab){
			if(this.tab==checkTab)
			return true;
			else 
			return false;
		};
	});*/
	app.controller("ReviewController",function(){
	          this.review={};
			  this.addReview=function(product){
			   product.reviews.push(this.review);
			   this.review={};
			  };
		});
	
	
})();