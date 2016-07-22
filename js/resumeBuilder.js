/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$("#main").append('Anton')

var bio = {'name' : 'Anton Iovbak', 'role' : 'Web Developer', 
		'contacts' : {'email' : 'antoniovbak14@gmail.com', 'phone number' : '+7 777 002 44 35',
		'GitHub account' : 'AInsolence', 'location' : 'Almaty'}, 
		'welcome_message' : 'Hello! Nice to meet you here dudes!', 
		'skills' : ['Python', 'JavaScript', 'HTML', 'CSS', 'Postgre SQL', 'Linux', 'GIT'],
		'bioPic' : 'https://'}


var formattedName = HTMLheaderName.replace('%data%', bio['name']);

$("#header").append(formattedName);

var work = {};
work.position = 'Web Developer';
work.employer = 'Udacity';
work.years_work = '1';
work.city = 'San Francisco';

var education = {};
education['school'] = 'Udacity online university';
education['years_attend'] = '1';

$("#main").prepend(work['position']);
$("#main").prepend(' ');
$("#main").prepend(education.school);
