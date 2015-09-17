/**
 * New node file
 */
(function(){
	var app=angular.module('Demo',[]);
	app.controller('FirstCtrl',['$scope',function FirstCtrl($scope){
		
		$scope.data={message:"Hello"};
	}]);
})();
/*function FirstCtrl($scope){
	$scope.data={message:"Hello"};
}*/