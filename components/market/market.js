angular.module('marketModule',[])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/market',{
		templateUrl:'components/market/market.html',
		controller:'marketCtrl',
		css:'components/market/market.css'
	})
}])

.controller('marketCtrl',['$scope','$http',function($scope,$http){
	$http.get('json/market.json').success(function(res){
		$scope.goodList=res.data.categories;
		$scope.isShow=true;
		$scope.changeShow=function(id){
			$scope.goods=res.data.products[id];
		}
		
		$scope.sortData=function(type){
			console.log(type);
			$scope.sortType=type;
		}
//		$scope.change=function(id){
//			$scope.goods=res.data.products[id];
//			$scope.style=partner_price;
////			$scope.isShow=!$scope.isShow;	
//		}
		
		$scope.change01=function(){
			$scope.isShow=!$scope.isShow;
		}
		
		$scope.goods=res.data.products[103532];
		console.log(res.data.products);
	})
	
}])