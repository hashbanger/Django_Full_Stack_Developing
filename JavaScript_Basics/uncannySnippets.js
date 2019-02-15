// This file contains some js snippets that may be unexpected if seen from perspective of other mainstream languages.
// Prrashant Brahmbhatt

a = 2;
var	a;
console.log(a);

console.log( a );
var	a = 2;

foo();
var	foo	= function bar(){
}

foo();	//	TypeError bar();	//	ReferenceError
var	foo	= function bar(){
};

foo();	//	3
function foo(){
console.log(1);
};
var	foo	= function() { 
console.log(2 ); 
};
function foo() { 
console.log(3);
};

foo();
var	a =	true; 
if (a) { function foo()	
{console.log( "a" );
}}
else { function foo() 
{console.log( "b" );
}}

foo();
function foo(){
var a =4;
function bar(){
console.log(a);
}
bar();
}

foo();
function foo(){
var a =4;
function bar(){
console.log(a);
}
return bar;
}
var x = foo();
x();