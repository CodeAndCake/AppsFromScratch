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
var database = new Firebase('https://appsfromscratch.firebaseio.com/demo-app');

// Here we define the search functionality

var pageSearchFunctionality = {
	
	onFindButtonClick: function(){
		
		// We should clear the previous search result if there is alreay
		if(html.results.length > 0) html.results.empty();
		
		// Get the value from the dropdown 		
 		var selectedDropdownOption = html.dropDown.val();
		
		// Here is the way to get the data from the database
 		database.orderByChild("height").on("child_added", function(response) {
 			
 			var data = response.val();
 			var key = response.key();

   			personButton = $('<li id="' + key + '">' 
	 			+ '<h2>' + data.name + '</h2>' 
	 			+ '</li>');
   			
  			personButton.on('click', pageSearchFunctionality.onResultClick.bind(this, data));
  			
 			html.results.append(personButton);
 			html.results.addClass('active');
 			
  		});
 		
 	},
 	
 	onResultClick: function(data){
   		
 		var profileHtml = $('<h2>' + data.name  + '</h2>' 
	 		+ '<img src="' + data.image + '">' 
	 		+ '<div class="about">' + data.about + '</div>'
	 		+ '<button id="message">Message ' + data.name + ' now</button>');
 		
 		html.person.html(profileHtml);
 		
 		html.pageWrapper.addClass('profile');
 	},
 	
 	onBackButtonClick: function(){
 		html.pageWrapper.removeClass('profile');
 	},
 	
};

// Let's add initial behavior to the page elements

html.findButton.on('click', pageSearchFunctionality.onFindButtonClick);
html.backButton.on('click', pageSearchFunctionality.onBackButtonClick);
 

 
  