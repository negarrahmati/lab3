'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Changed!");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(submitClick);
}


function submitClick(e){
	 
	
	var project_val=$('#project').val();
	//console.log("here");
	$(project_val).animate({
		width: $('#width').val()
	});

	var descr= $('#description').val();
	$(project_val+ " .project-description").text(descr);
	
};

var clicked=1;
function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");

    }
    else if(clicked) {
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       $(".project-description p").fadeOut();
       clicked=0;
    }else{

    	$(".project-description p").fadeIn();
       clicked=1;

    }

}