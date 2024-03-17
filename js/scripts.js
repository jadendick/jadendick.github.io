function scroll()
{
	var x = document.getElementById("topbar");	// Collapse topbar after scrolling down
	var scrollAmount = document.body.scrollTop || document.documentElement.scrollTop;
	console.log(scrollAmount)
	if (scrollAmount > 150)
		x.classList.add("collapsed"); 
	else if (scrollAmount === 0)
		x.classList.remove("collapsed"); 
}

function chooseProject(name) {
	var projects = document.getElementById("project_display").getElementsByClassName("active");
	for(i = 0; i < projects.length; i++)
	{
		if(projects[i].className.indexOf("active") > -1)
		{
			projects[i].classList.remove("active");
			break;
		}
	}
	document.getElementById(name).classList.add("active");
}

