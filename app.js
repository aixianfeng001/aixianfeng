angular.module('aixianfeng',['ngRoute','angularCSS','homeModule','marketModule'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.otherwise({redirectTo: '/home'});
}])