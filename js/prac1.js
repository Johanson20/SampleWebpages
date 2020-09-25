//creates functions

function dayt()
{
	document.getElementById("daytt").innerHTML = Date();
}

//create a fruits variable
var fruits = ['Apple', ' Mango', ' Orange', ' Banana'];

//Two more functions for playing with arrays
function myFruits()
{
	document.getElementById("fruits").innerHTML = fruits;
}

function addFruit()
{
	var fruit = prompt('What is your favourite fruit? ');
	if (fruit.length > 1)
	{	fruits.push(' ' + fruit);
		document.getElementById("fruits").innerHTML = fruits;
	}
	else {
		fruits.pop();
		document.getElementById("fruits").innerHTML = fruits;
	}
}

function check()
{
	var email1 = document.getElementById('email1');
	var email2 = document.getElementById('email2');
	if (email1.value != email2.value)
		alert("Both email addresses must match!");
}

function newChange()
{
	if (document.getElementById("other").checked)
	{
		document.getElementById("another").style.display = 'inline';
		document.getElementById("newtech").setAttribute('required', true);
	}
	else{
		document.getElementById("newtech").removeAttribute('required');
		document.getElementById("another").style.display = 'none';
	}
}