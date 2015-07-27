var PHPProjectSPortfolio = 
//------------------------------------------insert/paste json data below
{ 
  "PHPProjects": [
    
	 {
		"id":1,
       "project_name": "ClientSide Google Map",
      "owner": {       
        "avatar_url": "map.jpg", 
      },           
      "description": "https://github.com/vernkennedy/ClientSideGoogleMap/blob/gh-pages/description.txt", 
	  "summary": "A Rule Based Expert System / web portal for academic planning and exploration of student opportunities at The College of Wooster",
      "code_url": "https://github.com/vernkennedy/ClientSideGoogleMap/tree/gh-pages",
	  "demo_url": "http://vernkennedy.github.io/ClientSideGoogleMap/",
      "frontend_infor": "Html5,CSS3,JavaScript,Html5 Drag and Drop API",      
      "backend_infor": "Php5,SQL,MySQL",
	  "demotype":"Live Demo"
    },
  
    {
		"id":2,
      "project_name": "Drupal Module",
      "owner": {       
        "avatar_url": "drupal.jpg", 
      },           
      "description": "https://github.com/vernkennedy/DrupalModule/blob/master/readme.txt",
	  "summary": "A Rule Based Expert System / web portal for academic planning and exploration of student opportunities at The College of Wooster",
      "code_url": "https://github.com/vernkennedy/DrupalModule", 
	   "demo_url": "https://www.youtube.com/watch?v=dxbr7o5pThM&feature=youtu.be",
      "frontend_infor": "Html5,CSS3",      
      "backend_infor": "Php5,SQL,MySQL",
	  "demotype":"Video Demo"
    },
	
	{
		"id":3,
      "project_name": "JSON Portifolio",
      "owner": {       
        "avatar_url": "drupal.jpg", 
      },           
      "description": "https://github.com/vernkennedy/DrupalModule/blob/master/readme.txt",
	  "summary": "A Rule Based Expert System / web portal for academic planning and exploration of student opportunities at The College of Wooster",
      "code_url": "https://github.com/vernkennedy/DrupalModule", 
	   "demo_url": "https://www.youtube.com/watch?v=dxbr7o5pThM&feature=youtu.be",
      "frontend_infor": "Html5,CSS3",      
      "backend_infor": "Php5,SQL,MySQL",
	  "demotype":"Live Demo"
    },
	
	
  ]
}

//-----------------------------------------------------------------------insert data above

content = "";
var i;
for (i = 0; i < PHPProjectSPortfolio.PHPProjects.length; i++) {
    content +="<li>"
				+"<img src="+PHPProjectSPortfolio.PHPProjects[i].owner.avatar_url+">"
				+"<h3 align=center>"+ PHPProjectSPortfolio.PHPProjects[i].project_name +"</h3>"
				+"<a href="+PHPProjectSPortfolio.PHPProjects[i].description+">Full Description</a>"
				+" <a href="+PHPProjectSPortfolio.PHPProjects[i].demo_url+">"+PHPProjectSPortfolio.PHPProjects[i].demotype+"</a>"
				+" <a href="+PHPProjectSPortfolio.PHPProjects[i].code_url + ">Code</a><br><br>"
				+"<b>Summary</b><br>"+PHPProjectSPortfolio.PHPProjects[i].summary + "<br><br>"
				+"<b>Front-end Technologies used:</b><br>"+PHPProjectSPortfolio.PHPProjects[i].frontend_infor +"<br><br>"
				+"<b>Middle Tier and Backend Technologies used:</b><br>"+ PHPProjectSPortfolio.PHPProjects[i].backend_infor 
			+"</li>";
}


document.getElementById("demo").innerHTML = "<ol>"+content+"</ol>";
