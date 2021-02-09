
//About Section
//to skype
document.querySelector('.fa-skype').addEventListener('click', function() {
	openPage('https://www.skype.com/bg/', false);
  });
	
  //to github
  document.querySelector('.fa-github').addEventListener('click', function() {
	openPage('https://github.com', false);
  });
	
  //to linked In
  document.querySelector('.fa-linkedin-in').addEventListener('click', function() {
	  openPage('https://www.linkedin.com', false);
  });
	
  //to Gmail
  document.querySelector('.fa-envelope').addEventListener('click', function() {
	openPage('https://www.google.com/intl/bg/gmail/about', false);
  });
  
  //to Facebook
  document.querySelector('.fa-facebook-f').addEventListener('click', function() {
	openPage('https://www.facebook.com', false);
  });
  

  //Education Section
  //show diploma page
  document.querySelector('.c-education-diploma-btn').addEventListener('click', function() {
	openPage('./sertificates/Diploma.jpg', true);
  });


//*
//Skill Section events
//*
//guide to JS
document.querySelector('.js-link').addEventListener('click', function() {
	openPage('https://developer.mozilla.org/bg/docs/Web/JavaScript', false);
  });
  //guide to React
  document.querySelector('.fa-react').addEventListener('click', function() {
	openPage('https://reactjs.org', false);
  });
  
  //guide to Angular
  document.querySelector('.fa-angular').addEventListener('click', function() {
	openPage('https://angular.io', false);
  });
  //guide to NodeJS
  document.querySelector('.fa-node-js').addEventListener('click', function() {
	openPage('https://nodejs.org', false);
  });
  //guide to SASS
  document.querySelector('.sass-link').addEventListener('click', function() {
	openPage('https://sass-lang.com', false);
  });
  //guide to NPM
  document.querySelector('.fa-npm').addEventListener('click', function() {
	openPage('https://www.npmjs.com', false);
  });
  //guide to HTML5
  document.querySelector('.html5-link').addEventListener('click', function() {
	openPage('https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', false);
  });
  //guide to CSS3
  document.querySelector('.css3-link').addEventListener('click', function() {
	openPage('https://developer.mozilla.org/en-US/docs/Archive/CSS3', false);
  });


//Qualification Section
//Project Rider
document.querySelector('.js-module-project-rider-link').addEventListener('click', function() {
	openPage('https://github.com/PavelRunchev/Project-Rider/tree/master/Project%20Rider%20-%20Exam%203%20January%202018/JavaScript', false);
});

//Software Technology sertificate
document.querySelector('.sertificate-software-technology').addEventListener('click', function() {
	openPage('./sertificates/Software Technology.jpg', true);
});

//JS Fundamentals sertificate
document.querySelector('.sertificate-js-fundamentals').addEventListener('click', function() {
	openPage('./sertificates/JS Fundamentals.jpg', true);
});

//JS Advanced sertificate
document.querySelector('.sertificate-js-advanced').addEventListener('click', function() {
	openPage('./sertificates/JS Advanced.jpg', true);
});

//JS Application sertificate
document.querySelector('.sertificate-js-application').addEventListener('click', function() {
	openPage('./sertificates/JS Application.jpg', true);
});

//JS WEB
//Express-JS sertificate
document.querySelector('.sertificate-web-expressJS').addEventListener('click', function() {
	openPage('./sertificates/ExpressJS Fundamentals.jpg', true);
});

//Express link to github
document.querySelector('.github-link-expressJS-project').addEventListener('click', function() {
	openPage('https://github.com/PavelRunchev/SharedTripp', false);
});

//React link to github
document.querySelector('.github-link-react-project').addEventListener('click', function() {
	openPage('https://github.com/PavelRunchev/React-Defense', false);
});

//React sertificate
document.querySelector('.sertificate-web-react').addEventListener('click', function() {
	openPage('./sertificates/React Fundamentals.jpg', true);
});

//Angular link to github
document.querySelector('.github-link-angular-project').addEventListener('click', function() {
	openPage('https://github.com/PavelRunchev/Angular-Defense', false);
});

//Angular sertificate
document.querySelector('.sertificate-web-angular').addEventListener('click', function() {
	openPage('./sertificates/Angular Fundamentals.jpg', true);
});


//*
//Page CSS
//*

//Web Fundamentals Module
//Project MyBlog
document.querySelector('.web-fundamentals-myBlog-link').addEventListener('click', function() {
	openPage('https://pavelrunchev.github.io/MyBlog', false);
});

//Web Fundamentals sertificate
document.querySelector('.sertificate-web-fundamentals').addEventListener('click', function() {
	openPage('./sertificates/Web Fundamentals.jpg', true);
});

//CSS Advanced Module
//Project Medieval Castles
document.querySelector('.css-advanced-medieval-castles-link').addEventListener('click', function() {
	openPage('https://pavelrunchev.github.io/Medieval-Castles', false);
});

//CSS Advanced sertificate
document.querySelector('.sertificate-css-advanced').addEventListener('click', function() {
	openPage('./sertificates/CSS Advanced.jpg',  true);
});


//*
//Page C#
//*

//Programming Basics sertificate
document.querySelector('.sertificate-programming-basics').addEventListener('click', function() {
	openPage('./sertificates/Programming Basics.jpg', true);
});

//Programming Fundamentals sertificate
document.querySelector('.sertificate-programming-fundamentals').addEventListener('click', function() {
	openPage('./sertificates/Programming Fundamentals.jpg', true);
});

//Software Technology Module
//Project MyBlog
document.querySelector('.software-technology-rider-link').addEventListener('click', function() {
	openPage('https://github.com/PavelRunchev/Project-Rider/tree/master/Project%20Rider%20-%20Exam%203%20January%202018/C%23/ProjectRider', false);
});

//Software Technology sertificate
document.querySelector('.sertificate-software-trchnology-csharp').addEventListener('click', function() {
	openPage('./sertificates/Software Technology.jpg', true);
});


//*
//Page Java
//*

//Programming Basics sertificate
document.querySelector('.sertificate-software-technology-java').addEventListener('click', function() {
	openPage('./sertificates/Software Technology.jpg', true);
});

//Project MyBlog
document.querySelector('.software-technology-rider-link-java').addEventListener('click', function() {
	openPage('https://github.com/PavelRunchev/Project-Rider/tree/master/Project%20Rider%20-%20Exam%203%20January%202018/Java', false);
});



//*
//Project Section events
//*
  
//*
//Jekyl Project
//*
//Medieval-castles link to deploy
document.querySelector('.deploy-jekyll-project').addEventListener('click', function() {
	openPage('https://medieval-castles.firebaseapp.com/', false);
  });
  //Medieval-castles link to github
  document.querySelector('.github-link-jekyll-project').addEventListener('click', function() {
	openPage('https://github.com/PavelRunchev/Medieval-Castles', false);
  });
  //Medieval-castles sertificate
  document.querySelector('.sertificate-jekyll-project').addEventListener('click', function() {
	openPage('./sertificates/CSS Advanced.jpg', true);
  });
	
  //*
  //React Project
  //*
  //Gems Catalog link to deploy
  document.querySelector('.deploy-react-project').addEventListener('click', function() {
	openPage('https://gems-catalog.firebaseapp.com/', false);
  });
  //Gems Catalog link to github
  document.querySelector('.github-link-react-project').addEventListener('click', function() {
	openPage('https://github.com/PavelRunchev/React-Defense', false);
  });
  //Gems Catalog sertificate
  document.querySelector('.sertificate-react-project').addEventListener('click', function() {
	openPage('./sertificates/React Fundamentals.jpg', true);
  });
	
  //*
  //Angular Project
  //*
  //Board Games link to deploy
  document.querySelector('.deploy-angular-project').addEventListener('click', function() {
	openPage('https://messenger-f616f.firebaseapp.com/', false);
  });
  //Board Games link to github
  document.querySelector('.github-link-angular-project').addEventListener('click', function() {
	openPage('https://github.com/PavelRunchev/Angular-Defense', false);
  });
  //Board Games sertificate
  document.querySelector('.sertificate-angular-project').addEventListener('click', function() {
	openPage('./sertificates/Angular Fundamentals.jpg', true);
  });
	
  //*
  //ExpressJS Project
  //*
  //SharedTripp link to deploy
  document.querySelector('.deploy-ExpressJS-project').addEventListener('click', function() {
	openPage('https://nameless-dusk-82332.herokuapp.com', false);
  });
  //SharedTripp link to github
  document.querySelector('.github-link-ExpressJS-project').addEventListener('click', function() {
	openPage('https://github.com/PavelRunchev/SharedTripp', false);
  });
  //SharedTripp sertificate
  document.querySelector('.sertificate-ExpressJS-project').addEventListener('click', function() {
	openPage('./sertificates/ExpressJS Fundamentals.jpg', true);
  });
	
  //*
  //ExpressJS Project
  //*
  //Blogger link to deploy
  document.querySelector('.deploy-ExpressJS-blogger-project').addEventListener('click', function() {
	openPage('https://boiling-bastion-03398.herokuapp.com/', false);
  });
  //Blogger link to github
  document.querySelector('.github-link-ExpressJS-blogger-project').addEventListener('click', function() {
	openPage('https://github.com/PavelRunchev/Blogger', false);
  });
	
//*
//Development Environment Section events
//*
//VS Code
document.querySelector('.vs-code-link').addEventListener('click', function() {
	openPage('https://code.visualstudio.com', false);
  });
  //Web Storm
  document.querySelector('.web-storm-link').addEventListener('click', function() {
	openPage('https://www.jetbrains.com/webstorm/', false);
  });
  //MongoDB
  document.querySelector('.mongoDB-link').addEventListener('click', function() {
	openPage('https://www.mongodb.com/brand-resources', false);
  });
  //Visual Studio
  document.querySelector('.visual-studio-link').addEventListener('click', function() {
	openPage('https://visualstudio.microsoft.com/', false);
  });
  //SQL Server Management Studio
  document.querySelector('.sql-server-management-studio-link').addEventListener('click', function() {
	openPage('https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017', false);
  });
  //intellij Idea
  document.querySelector('.intellij-idea-link').addEventListener('click', function() {
	openPage('https://www.jetbrains.com/idea/', false);
  });
  //MySQL Server
  document.querySelector('.mySQL-server-link').addEventListener('click', function() {
	openPage('https://www.mysql.com/', false);
  });
	
	
	
	
	
		