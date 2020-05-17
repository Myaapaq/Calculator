function add (x, y) {
	console.log(x + y);
}
function subtract (x, y) {	 
	console.log(x - y );
	//return x - y ; 
}
function multiply (x, y) {
	//return array.reduce((current, next) => current * next);
	console.log(x * y );
}
function divide( x, y) {
	//return x / y 
	console.log(x / y );
}
//add the current total to any other number
function sum (array) {
	return array.reduce((current, brandNew)=> current + brandNew, 0 );
} 
function operator(operator, x, y){
	if(operator == '+'){
		add(x, y)
	} else if (operator == '-'){
		subtract(x, y)
	} else if (operator == '*'){
		multiply(x, y)
	} else if (operator == '/'){
		divide (x, y)
	}else{ console.log('try again')}
}

/*
alternate multiply function
function multiply (array) {
	return array.reduce((current, next) => current * next);
}
*/





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