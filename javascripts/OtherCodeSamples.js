var PHPProjectSPortfolio = 
//------------------------------------------insert/paste json data below
{ 
  "PHPProjects": [
    
	 {
		"id":3,
       "project_name": "ClientSide Google Map",
      "owner": {       
        "avatar_url": "map.jpg", 
      },           
      "description": "https://github.com/redguide/nodejs",      
      "code_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
	  "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "Html5,CSS3,JavaScript,Html5 Drag and Drop API",      
      "backend_infor": "Php5,SQL,MySQL"  
    },
  
    {
		"id":4,
      "project_name": "Drupal Module",
      "owner": {       
        "avatar_url": "drupal.jpg", 
      },           
      "description": "https://github.com/redguide/nodejs",      
      "code_url": "https://api.github.com/repos/redguide/nodejs", 
	   "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "Html5,CSS3",      
      "backend_infor": "Php5,SQL,MySQL"  
    }
  ]
}

//-----------------------------------------------------------------------insert data above

text = "";
var i;
for (i = 0; i < PHPProjectSPortfolio.PHPProjects.length; i++) {
    text +="<li><img src="+PHPProjectSPortfolio.PHPProjects[i].owner.avatar_url+"><br><br><h3 align=center>"+ PHPProjectSPortfolio.PHPProjects[i].project_name + "</h3><a href="+PHPProjectSPortfolio.PHPProjects[i].description+ ">Description</a> <a href="+PHPProjectSPortfolio.PHPProjects[i].demo_url+ ">Demo</a> <a href="+PHPProjectSPortfolio.PHPProjects[i].code_url + ">Code</a><br><br><br><br><br></li>";
}


document.getElementById("demo").innerHTML = "<ol>"+text+"</ol>";
