//navbar


let nHome, nPage, nAbout, home, about, pages;
nHome = document.querySelector(".nav1");
nPage = document.querySelector(".nav2");
nAbout = document.querySelector(".nav3");

home = document.querySelector(".home");
pages = document.querySelector(".pages");
about = document.querySelector(".about");

nPage.classList.add('hov');
nAbout.classList.add('hov');
about.style.display = 'none';
pages.style.display = 'none';

 nHome.onclick = function(){
 	this.style.zIndex = 1;
 	nPage.style.zIndex = 0;
 	nPage.classList.add('hov');
 	nAbout.style.zIndex = 0;
 	about.style.display = 'none';
 	pages.style.display = 'none';
 	nAbout.classList.add('hov');
 	this.classList.remove('hov');
 	home.style.display = 'block';
 }

 nPage.onclick = function(){
 	this.style.zIndex = 1;
 	pages.style.display = 'block';
 	nHome.style.zIndex = 0;
 	nHome.classList.add('hov');
 	nAbout.style.zIndex = 0;
 	nAbout.classList.add('hov');
 	about.style.display = 'none';
 	home.style.display = 'none';
 	this.classList.remove('hov');
 }

 nAbout.onclick = function(){
 	about.style.display = 'inline-block'
 	this.style.zIndex = 1;
 	this.classList.remove('hov');
 	nPage.style.zIndex = 0;
 	nPage.classList.add('hov');
 	nHome.style.zIndex = 0;
	nHome.classList.add('hov');
	home.style.display = 'none';
	pages.style.display = 'none';
 }
