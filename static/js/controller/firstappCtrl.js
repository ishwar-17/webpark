app.controller('firstappCtrl',['$scope',function ($scope){
   console.log("first app controller.......");
   
    $scope.member = {};
    $scope.add = function(user){
        $scope.member = angular.copy(user);
        alert("User Data Infromation is Submitted....!!!!");
        console.log($scope.member);
        $scope.user ='';
    };
    /*$scope.compare = function (repass) {
        $scope.isconfirm = $scope.password == repass ? true : false;
    }*/
}])