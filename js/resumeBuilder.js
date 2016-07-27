/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Define variables with information about person

var bio = {"name" : "Anton Iovbak", "role" : "Web Developer", 
		"contacts" : {"email" : "antoniovbak14@gmail.com", "phone number" : "+7 777 002 44 35",
		"GitHub account" : "AInsolence", "location" : "Almaty"}, 
		"welcome_message" : "Hello! Nice to meet you here dudes!", 
		"skills" : ["Python", "JavaScript", "HTML", "CSS", "Postgre SQL", "Linux", "GIT"],
		"bioPic" : "https://"};

var work = {
			"jobs" : [
			{
				"position" : "Web Developer",
				"employer" : "Udacity",
				"years_work" : "1",
				"city" : "San Francisco"}, 
			{
			"position" : "Python Developer",
			"employer" : "Udacious",
			"years_work" : "0.5",
			"city" : "New York"}
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
				"description" : "Web crawler engine on Python with indexing and ranking sites from web."}, 
				{"title" : "Petlife site", "technologies" : ["HTML", "CSS"], "date" : "may 2016", 
				"description" : "Simple site on HTML5 and CSS3 using Bootstrap framework"}, 
				{"title" : "Tournament", "technologies" : ["Python", "Postgre SQL", "Virtual Box", "Vagrant"], 
				"date" : "june 2016", 
				"description" : "Tournament table used SWISS score count system, stored data in Postgre SQL DB and managed with Python module"}, 
				{"title" : "Resume", "technologies" : ["HTML", "CSS", "JavaScript", "JSON", "JQuery"],
				"date" : "july 2016", 
				"description" : "Interactive web site with information for employers using JavaScript"}]};

// Adding skills to index.html

$("#header").append(HTMLskillsStart);
	
for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}

//Adding work experience to index.html

$("#workExperience").append(HTMLworkStart);

for (job in work.jobs) {
	
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		$(".work-entry").append(formattedEmployer);
		
		var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		$(".work-entry").append(formattedworkTitle);
	};

