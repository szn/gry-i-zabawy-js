function cleanNo(number){
	return number;
}

console.assert(cleanNo('(223) 456-7890') === '2234567890', 'cleans the number');
console.assert(cleanNo('223.456.7890') === '2234567890', 'cleans numbers with dots');
console.assert(cleanNo('223 456   7890   ') === '2234567890', 'cleans numbers with multiple spaces');
console.assert(cleanNo('123456789') === null, 'invalid when 9 digits');
console.assert(cleanNo('22234567890') === null, 'invalid when 11 digits does not start with a 1');
console.assert(cleanNo('12234567890') === '2234567890', 'valid when 11 digits and starting with 1');
console.assert(cleanNo('+1 (223) 456-7890') === '2234567890', 'valid when 11 digits and starting with 1 even with punctuation');
console.assert(cleanNo('321234567890') === null, 'invalid when more than 11 digits');
console.assert(cleanNo('123-abc-7890') === null, 'invalid with letters');
console.assert(cleanNo('123-@:!-7890') === null, 'invalid with punctuations');
console.assert(cleanNo('(123) 456-7890') === null, 'invalid if area code does not start with 2-9');
console.assert(cleanNo('(223) 056-7890') === null, 'invalid if exchange code does not start with 2-9');
