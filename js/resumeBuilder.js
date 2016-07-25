/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*$("#main").append('Anton')*/

/*var awesomeThoughts = "I am Anton and I am Awesome";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace('Awesome', 'Fun');
console.log(funThoughts);

$("#main").append(funThoughts); */

var name = 'Anton Iovbak';
var role = 'Python Web Developer';

var formattedName = HTMLheaderName.replace('%data%', name);
$('#header').append(formattedName);

var formattedRole = HTMLheaderRole.replace('%data%', role);
$('#header').prepend(formattedRole);
