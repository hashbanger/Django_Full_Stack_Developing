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


function foo(){
var	a	=	2;
function bar() {
    console.log( a );
}
return	bar;
}
var	baz	=	foo();
baz();	//	2	--	Whoa,	closure	was	just	observed,	man.

function foo(){
    var a = 0;
    function bar(){
        console.log(a);
    }
    baz(bar);
}
function baz(fn){
    fn();
}
foo();

var	fn;
function foo(){
    var	a = 2;
	function baz() {
        console.log(a);
    }
    fn = baz;	//	assign	`baz`	to	global	variable 
}
function bar() {
    fn();	//	look	ma,	I	saw	closure! 
}
foo();
bar();	//	2

setTimeout(function timer(){
    console.log( "Hello" );
},1000);

for	(var i=1; i<=5; i++) {
    setTimeout(	function timer(){
        console.log( i ); 
    },	i*1000 );
}
