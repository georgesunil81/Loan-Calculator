var express = require('express');

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
	console.log('Listening on port: ' + port);
});

app.get('/interest_rate', function(req, res) {

	var interestRate = 0;

	interestRate = Math.random() / 5;

	interestRate = interestRate.toFixed(2);

	if (interestRate < 0.01) {
		interestRate = 0.01;
	}

	return res.status(200).json({'interestRate':parseFloat(interestRate)});


})
