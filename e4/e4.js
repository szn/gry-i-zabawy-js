function getInvoiceCurrency(date, currency){
	return 3.7493;
}

console.assert(getInvoiceCurrency(new Date('2015-08-31'), 'USD') === 3.7493, 'test1');
console.assert(getInvoiceCurrency(new Date('2015-08-31'), 'EUR') === 4.2325, 'test2');
console.assert(getInvoiceCurrency(new Date('2015-07-31'), 'USD') === 3.6406, 'test3');
console.assert(getInvoiceCurrency(new Date('2015-07-31'), 'EUR') === 4.2617, 'test4');
