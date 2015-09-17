(function(){
	var app=angular.module('store-products',[]);
	//- translates to camel casing in angular js
	app.directive('productTitle',function(){
		return {
			//returns a directive defination object
			//configuration defining how your directive is going to work
			/**
			 * use element directives for ui widgets and including web pages
			 * use attribute dirctives when adding a behaviour to html like tooltip
			 */
			restrict:'E',//Type of directive(E for element) restrict:'A' for attribute
			templateUrl:'View/product-title.html'
				//attribute directives are also used
		};
	});
	app.directive('productPanels',function(){
		return {
			restrict:'E',
			templateUrl:'View/product-panels.html',
			controller:function(){
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
			},
			controllerAs:'panel'
		};
	});
})();

