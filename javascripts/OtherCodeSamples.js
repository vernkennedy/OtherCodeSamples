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
      "description": "https://github.com/vernkennedy/ClientSideGoogleMap/blob/gh-pages/description.txt",      
      "code_url": "https://github.com/vernkennedy/ClientSideGoogleMap/tree/gh-pages",
	  "demo_url": "http://vernkennedy.github.io/ClientSideGoogleMap/",
      "frontend_infor": "Html5,CSS3,JavaScript,Html5 Drag and Drop API",      
      "backend_infor": "Php5,SQL,MySQL"  
    },
  
    {
		"id":4,
      "project_name": "Drupal Module",
      "owner": {       
        "avatar_url": "drupal.jpg", 
      },           
      "description": "https://github.com/vernkennedy/DrupalModule/blob/master/readme.txt",      
      "code_url": "https://github.com/vernkennedy/DrupalModule", 
	   "demo_url": "https://www.youtube.com/watch?v=dxbr7o5pThM&feature=youtu.be",
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
