app.controller('firstappCtrl',['$scope',function ($scope){
   console.log("first app controller.......");

    $scope.member = {};
$scope.master = '';
    $scope.add = function(user){
        $scope.member = angular.copy(user);
        alert("User Data Infromation is Submitted....!!!!");
        console.log($scope.member);
        $scope.user ='';
    };
}])