var app = angular.module('myFirstApp', []);

app.controller('homepageController', function($scope, $http, $interval) {
    
    // Data used in the view
    $scope.currentValue = "250";
    $scope.colorChoice = "red";
    $scope.findBar = "";


    // displayed numbers and assocç list
    var displayable = {};
    	displayable['currentValue'] = $scope.currentValue;
    	displayable['clicked'] = false;
  	$scope.valueList = [displayable];

    // Reverts the clickable property of a number, creating an underlining effect
  	$scope.underline = function(displayableVal){
					console.log("Underlining");
					displayableVal['clicked'] = !displayableVal['clicked'];
				};

    // Console log tracking key press
	$scope.report = function(){
		console.log($scope.findBar);
	}

    // Returns the new value of the variable 
    function getValue()
    {
    	return (Math.random() * 1000) | 0;

    	 /*
       $http({
       url:'http://188.226.231.13:8080/',
       method:"GET",
       headers: {
       			  'Authorization': 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==',
                  'Content-Type': 'application/json'
                  
       }
  }).

  			success(function(data, status, headers, config) {
 
  				console.log(data);
  			}).
  			error(function(data, status, headers, config) {

  				console.log("Service not responding");
  			});
		*/
    }

    // Scheduled job for ticker control
    $scope.tickerControl = function() {

    	var oldVal = $scope.currentValue;
    	$scope.currentValue = getValue();
    	if(oldVal > $scope.currentValue)
    		$scope.colorChoice = "red";
    	else
    		$scope.colorChoice = "green";

    	var displayable = {};
    	displayable['currentValue'] = $scope.currentValue;
    	displayable['clicked'] = false;

    	//$scope.valueList[$scope.valueList.length] = $scope.currentValue;
    	$scope.valueList[$scope.valueList.length] = displayable;
    }

    // Scheduling a job
    $interval(function(){ $scope.tickerControl(); }, 2000);

});