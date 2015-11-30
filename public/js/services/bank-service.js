app.service('BankService', function($http) {

	this.getInterestRate = function () {

		console.log("BankService called");
		return $http({
			method: 'GET',
			url:'/interest_rate'
		});
	}
	
});