/*
This is empty on purpose! Your code to build the resume will go here.
 */

<<<<<<< HEAD
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
=======
//Define variables with information about person:

var bio = {"name" : "Anton Iovbak", "role" : "Web Developer", 
		"contacts" : {"email" : "antoniovbak14@gmail.com", "phone number" : "+7 777 002 44 35",
		"GitHub account" : "AInsolence", "location" : "Almaty"}, 
		"welcome_message" : "Hello! Nice to meet you here dudes!", 
		"skills" : ["Python", "JavaScript", "HTML", "CSS", "Postgre SQL", "Linux", "GIT"],
		"bioPic" : "https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg"};

var work = {
			"jobs" : [
			{
				"position" : "Web Developer",
				"employer" : "Udacity",
				"date" : "19.02.2016",
				"years_work" : "1",
				"city" : "San Francisco",
				"description" : "As Web Developer I'm working with many technologies to create usefull services for site users."}, 
			{
			"position" : "Python Developer",
			"employer" : "Udacious",
			"date" : "01.05.2016",
			"years_work" : "0.5",
			"city" : "New York",
			"description" : "As Python Developer I'm working with many technologies to create usefull desktop applets."}
			]};

var education = {
				"schools" : [
				{"name" : "KazNU",
				"city": "Almaty",
				"degree" : "BA",
				"major" : "Psychology",
				"date" : "01.2004 - 06.2008"
				},
				{"name" : "Almaty Humanitarium and Technical University",
				"city" : "Almaty",
				"degree" : "BA",
				"major" : "Economy",
				"date" : "01.2009 - 06.2011"}]
};

var on_education = {
				"online_edu" : [{"on_name" : "Udacity Online University",
				"on_degree" : "BA",
				"on_title" : "Computer Science",
				"on_date" : "02.2016 - till now",
				"on_url" : "https://www.udacity.com/"}]
				};
				
var projects = { "my projects" : [
				{"title" : "Web Crawler Engine", "technologies" : ["Python"], "date" : "march 2016",
				"description" : "Web crawler engine on Python with indexing and ranking sites from web.",
				"image" : "http://www.maran.com/dictionary/w/web/image.gif"}, 
				{"title" : "Petlife site", "technologies" : ["HTML", "CSS"], "date" : "may 2016", 
				"description" : "Simple site on HTML5 and CSS3 using Bootstrap framework",
				"image" : "https://www.mercergov.org/Images/ImageManager/pets.jpg"}, 
				{"title" : "Tournament", "technologies" : ["Python", "Postgre SQL", "Virtual Box", "Vagrant"], 
				"date" : "june 2016", 
				"description" : "Tournament table used SWISS score count system, stored data in Postgre SQL DB and managed with Python module",
				"image" : "http://app42paas.shephertz.com/wp-content/themes/twentytwelve/images/devcenter/integrate_icons/postgre/postgre_python.png"}, 
				{"title" : "Resume", "technologies" : ["HTML", "CSS", "JavaScript", "JSON", "JQuery"],
				"date" : "july 2016", 
				"description" : "Interactive web site with information for employers using JavaScript",
				"image" : "http://www.youngmindstechnologies.com/images/webdesign.png"}]};


// Adding personal info to index.html:
				
$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome_message));

// Adding skills to index.html

$("#header").append(HTMLskillsStart);
	
for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}

//Define function added work experience to index.html:


work.display = function () {

	for (job in work.jobs) {
		
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);		
		var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEmployerTitle = formattedEmployer + formattedworkTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedworkDates);
		$(".work-entry:last").append(formattedworkLocation);
		$(".work-entry:last").append(formattedworkDescription);
}};

work.display();

//Show in console click location position:

$(document).on("click", function(click_location){
	var x = click_location.pageX;
	var y = click_location.pageY;
	logClicks(x, y);
});

// International Names in resume:

$("#main").append(internationalizeButton);

function inName(full_name){
	var name = full_name.trim().split(' ');
	var firstName = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase();
	var lastName = name[1].toUpperCase();
	return (firstName + ' ' + lastName);
}

//Encapsulating display function for projects object:

projects.display = function (){
	for (var pro in projects["my projects"]) {
	$("#projects").append(HTMLprojectStart);
	
	var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects["my projects"][pro].title);
	var formattedProjectDates = HTMLprojectDates.replace('%data%', projects["my projects"][pro].date);
	var formattedProjectImage = HTMLprojectImage.replace('%data%', projects["my projects"][pro].image);
	var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects["my projects"][pro].description);

	$(".project-entry:last").append(formattedProjectTitle);
	$(".project-entry:last").append(formattedProjectDates);
	$(".project-entry:last").append(formattedProjectDescription);
	$(".project-entry:last").append(formattedProjectImage);	
	};
}

projects.display();

//Encapsulating display method for education and on_education object:

education.display = function (){
	for (var school in education.schools) {
	$("#education").append(HTMLschoolStart);
	
	var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
	var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
	var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].date);
	var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].city);
	var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
	
	$(".education-entry:last").append(formattedSchoolName);
	$(".education-entry:last").append(formattedSchoolDegree);
	$(".education-entry:last").append(formattedSchoolDates);
	$(".education-entry:last").append(formattedSchoolLocation);
	$(".education-entry:last").append(formattedSchoolMajor);	
	};
}

on_education.display = function () {
		for (var on_school in on_education.online_edu) {
		$(".education-entry:last").append(HTMLonlineClasses);
		
		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', on_education.online_edu[on_school].on_title);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', on_education.online_edu[on_school].on_name);
		var formattedOnlineDates = HTMLonlineDates.replace('%data%', on_education.online_edu[on_school].on_date);
		var formattedOnlineURL = HTMLonlineURL.replace('%data%', on_education.online_edu[on_school].on_url);
		
		$(".education-entry:last").append(formattedOnlineTitle);
		$(".education-entry:last").append(formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
		};
}

education.display();
on_education.display();


//Adding googleMap:

$("#mapDiv").append(googleMap);




>>>>>>> ae614de626526c67d09f26c455d12311574cc8f1
