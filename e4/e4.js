//var fetch = require('node-fetch');

function getInvoiceCurrency(date, currency){
	
	const d = new Date(date);
	d.setDate(d.getDate() - 1);

	const c = new Date(date);
	c.setDate(c.getDate() - 7);	

	date = d.toISOString().slice(0, 10);
	const date2 = c.toISOString().slice(0, 10);

	const url = `http://api.nbp.pl/api/exchangerates/rates/a/${currency}/${date2}/${date}/?format=json`;

	fetch(url).then(
		response => response.json().then(data => console.log(data.rates[data.rates.length -1].mid))
	);
}
getInvoiceCurrency(new Date('2015-12-28'), 'USD');// === 3.7493, 'test1');
getInvoiceCurrency(new Date('2015-08-31'), 'EUR');// === 4.2325, 'test2');
getInvoiceCurrency(new Date('2017-07-31'), 'USD');// === 3.6406, 'test3');
getInvoiceCurrency(new Date('2017-07-31'), 'EUR');// === 4.2617, 'test4');

getInvoiceCurrency(new Date('2016-12-27'), 'EUR');// === 4.4126, 'test4');
getInvoiceCurrency(new Date('2015-12-27'), 'EUR');// === 4.2411, 'test4');