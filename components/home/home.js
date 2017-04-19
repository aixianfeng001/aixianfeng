angular.module('homeModule',[])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'components/home/home.html',
		controller:'homeCtrl',
		css:'components/home/home.css'
	})
}])


.service('swiper',['$timeout',function($timeout){
	$timeout(function(){
		new Swiper ('.swiper-container', {
		    loop: true,
		    autoplay:500,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		  }) 
	},10);
}])

.controller('homeCtrl',['$scope','$http','swiper',function($scope,$http){
	$http.get('json/home01.json').success(function(res){
		$scope.arrSwiper = res.data.act_info[0].act_rows;
		$scope.menu1=res.data.act_info[1].act_rows;
		$scope.menu2=res.data.act_info[3].act_rows;
		$scope.menu3title=res.data.act_info[4].act_rows[0].act_rows[0].chead_detail.img;
		$scope.pic01=res.data.act_info[4].act_rows[1].act_rows[0].cactivity_detail.img;
		$scope.pic02=res.data.act_info[4].act_rows[1].act_rows[1].cactivity_detail.img;
		$scope.icons=res.data.act_info[4].act_rows[2].act_rows;
		$scope.goods01=res.data.act_info[4].act_rows[3].act_rows;
		$scope.menu4=res.data.act_info[5].act_rows;
		$scope.menu4Li=res.data.act_info[5].act_rows[0].category_detail.goods;
	})
	
}])