function add (x, y) {
	return x + y;
}
function subtract (x, y) {	 
	return x - y ; 
}
function multiply (array) {
	return array.reduce((current, next) => current * next);
}
function divide( x, y) {
    return x / y 
}
//add the current total to any other number
function sum (array) {
    return array.reduce((current, brandNew)=> current + brandNew, 0 );
} 



/* Extra functions
function power(a, b) {
	return Math.pow(a,b)
}
function factorial(n) {
	if (n == 0){
		return 1
	}
	let product = 1
	for (i = n; i > 0; i--){
		product *=i;
    }
}
	return product;

*/