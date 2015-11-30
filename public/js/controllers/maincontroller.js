app.controller('MainCtrl', function($scope, BankService) {

	BankService.getInterestRate().then(function (res) {
		$scope.interest_rate = res.data.interestRate;
	});

	console.log($scope.interest_rate);


	$scope.calculatePayment = function() {
		var temp = 0;

		temp = $scope.principal * $scope.interest_rate;

		$scope.monthly_payment = temp / 48;
	}

});