/* 

	Use this function to fetch data from a URL.

	Inputs 
		
		1. url: it's the address of the data you want to fetch, for example "https://gender-api.com/get?name=matteo"

		2. successFunction: a function to execute when we receive data (it may take a few seconds before we receive something)

	Requirements
	
		This function relies on jQuery, so make sure jQuery is included in your document, eg:
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>

*/ 

function loadData (url, successFunction) {

	// perform an asynchronous data request using jQuery
	// asynchronous means we're asking for data NOW but don't know WHEN it'll come back (not immediately)
	// AJAX stands for Asynchronous JavaScript And XML (don't worry about it)
	// learn more about it at https://api.jquery.com/jQuery.ajax
	$.ajax({

		// send the request to the url
		url: url,

		// we want to receive JSON, which is a JavaScript data format
		dataType: 'json',
		
		// what to do when the API responds with some data
		success: function(responseJSON)  {
			// at this point we can call the callback function
			successFunction(responseJSON)            
		}
	})
}