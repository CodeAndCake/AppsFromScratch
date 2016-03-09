// First let's store all the interface elements we need from HTML in an object
// We are using jQuery ($) to select stuff from HTML
var html = {
	pageWrapper: $('article'),
	pageSearch: $('#pageSearch'),
	searchInput: $('#pageSearch input[type=search]'),
	findButton: $('#pageSearch button'),
	dropDown: $('#pageSearch select'),
	results: $('#pageSearch .results'),
	totalFound: $('#pageSearch .results .total'),
	resultsList: $('#pageSearch .results ul'),
	pageProfile: $('#pageProfile'),
	backButton: $('#pageProfile .back'),
	person: $('#pageProfile .person')
};

// Let's connect to the database
var databaseURL = 'https://appsfromscratch.firebaseio.com/demo-app';
var database = new Firebase(databaseURL);

// Let's add behaviour to the page elements
html.findButton.on('click', onFindButtonClick);
html.backButton.on('click', onBackButtonClick);

// FUNCTIONS!
function onFindButtonClick () {
		
	// We should first clear any previous search results
	if(html.results.length > 0) html.results.empty();
	
	// Get the value from the dropdown 		
	var selectedDropdownOption = html.dropDown.val();

	console.log('onFindButtonClick ' + selectedDropdownOption);

	// Let's define how we want the data to be filtered...
	if (selectedDropdownOption == 'Keep my pet') 
	{
		// ???
	}	
	else if (selectedDropdownOption == 'Bake a cake') 
	{
		database.orderByChild('bakingSkills').on('child_added', onChildAdded);
	} 
	else if (selectedDropdownOption == 'Move my piano') 
	{
		database.orderByChild('diySkills').on('child_added', onChildAdded);
	}

	// ... then ask the database for data
	function onChildAdded (response) {
			
		var person = response.val();

		var personHTML = $('<li>' 
			+ '<h2>' + person.name + '</h2>' 
			+ '</li>');
		
		// store the person in the button
		personHTML.data("person", person);
			
		personHTML.on('click', function(){

			var person = $(this).data("person")
			onResultClick(person);

		});
			
		html.results.append(personHTML);
	}
		
}
	
function onResultClick (data) {
   		
	var profileHTML = $('<h2>' + data.name  + '</h2>' 
		+ '<img src="' + data.image + '">' 
		+ '<div class="about">' + data.about + '</div>'
		+ '<button id="message">Message ' + data.name + ' now</button>');
 		
 	html.person.html(profileHTML);
 		
 	html.pageWrapper.addClass('profile');
 }
 	
function onBackButtonClick () {
 	html.pageWrapper.removeClass('profile');
}
 

 
  