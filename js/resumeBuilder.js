/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Define variables with information about person:

var bio = {"name" : "Anton Iovbak", "role" : "Web Developer", 
		"contacts" : {"email" : "antoniovbak14@gmail.com", "phone number" : "+7 777 002 44 35",
		"GitHub account" : "AInsolence", "location" : "Almaty"}, 
		"welcome_message" : "Hello! Nice to meet you here dudes!", 
		"skills" : ["Python", "JavaScript", "HTML", "CSS", "Postgre SQL", "Linux", "GIT"],
		"bioPic" : "http://i.telegraph.co.uk/multimedia/archive/03597/POTD_chick_3597497k.jpg"};

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
				"major" : "Psychology"					
				},
				{"name" : "Almaty Humanitarium and Technical University",
				"city" : "Almaty",
				"degree" : "BA",
				"major" : "Economy"}
				],
				"online_edu" : {"name" : "Udacity Online University",
				"city" : "San Francisco",
				"degree" : "BA",
				"major" : "Computer Science"}};
				
var projects = { "my projects" : [
				{"title" : "Web Crawler Engine", "technologies" : ["Python"], "date" : "march 2016",
				"description" : "Web crawler engine on Python with indexing and ranking sites from web.",
				"image" : "http://blog.belatrixsf.com/wp-content/uploads/2014/07/web-crawler.jpg"}, 
				{"title" : "Petlife site", "technologies" : ["HTML", "CSS"], "date" : "may 2016", 
				"description" : "Simple site on HTML5 and CSS3 using Bootstrap framework",
				"image" : "https://www.ellipseinc.com/documents/userfiles/image/24751/Pets.jpg"}, 
				{"title" : "Tournament", "technologies" : ["Python", "Postgre SQL", "Virtual Box", "Vagrant"], 
				"date" : "june 2016", 
				"description" : "Tournament table used SWISS score count system, stored data in Postgre SQL DB and managed with Python module",
				"image" : "http://app42paas.shephertz.com/wp-content/themes/twentytwelve/images/devcenter/integrate_icons/postgre/postgre_python.png"}, 
				{"title" : "Resume", "technologies" : ["HTML", "CSS", "JavaScript", "JSON", "JQuery"],
				"date" : "july 2016", 
				"description" : "Interactive web site with information for employers using JavaScript",
				"image" : "http://insight.jbs.cam.ac.uk/assets/2016_news_computerscience-883x432.jpg"}]};


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


function displayWork() {

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

displayWork()

//Show in console click location position:

$(document).on("click", function(click_location){
	var x = click_location.pageX;
	var y = click_location.pageY;
	logClicks(x, y);
});

// International Names in resume:

$("#header").append(internationalizeButton);

function inName(full_name){
	var name = full_name.trim().split(' ');
	var firstName = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase();
	var lastName = name[1].toUpperCase();
	return (firstName + ' ' + lastName);
}

//Encapsulating display method to projects object:

projects.display = function (){
	for (var pro in projects["my projects"]) {
	$("#projects").append(HTMLprojectStart);
	var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects["my projects"][pro].title);
	var formattedProjectDates = HTMLprojectDates.replace('%data%', projects["my projects"][pro].date);
	var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects["my projects"][pro].description);
	var formattedProjectImage = HTMLprojectImage.replace('%data%', projects["my projects"][pro].image);
	$(".project-entry:last").append(formattedProjectTitle);
	$(".project-entry:last").append(formattedProjectDates);
	$(".project-entry:last").append(formattedProjectDescription);
	$(".project-entry:last").append(formattedProjectImage);	
	};
}

projects.display();