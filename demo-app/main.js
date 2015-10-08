// Load data and store it in the app memory

	var peoplesList = [] // let's create an empty array

	// build the spreadsheet URL
	// see the manual here https://developers.google.com/gdata/samples/spreadsheet_sample?hl=en
	var key = '1BGkw8j2gas0j1V_JQhE5QLRROoExNfv_Yk74Dri6shg' // the spreasheet unique identifier
	var worksheet = '1' // the first worksheet
	var spreadsheetURL = 'https://spreadsheets.google.com/feeds/list/' + key + '/' + worksheet + '/public/values?alt=json'

	console.log(spreadsheetURL)

	loadData(spreadsheetURL, storeData)

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

	function storeData (jsonFile) {

		// from the whole json object, we only want to extract certain bits

		// first we select the list of spreadsheet rows
		var rows = jsonFile.feed.entry

		// then we loop through the rows and extract the info we need

		// while loop
		var counter = 0;
		var total = rows.length;

		while (counter < total) {

			var row = rows[counter]
			var person = extractPerson(row)
			peoplesList.push(person) // store this in the main data array

			// increment the counter
			// to avoid infinite loops
			counter = counter + 1;
		}

		// for loop
		// rows.forEach(function(row)
		// {
		// 	var person = extractPerson(row)
		// 	data.push(person) // store this in the main data array
		// })

		console.log(data)
	}

	function extractPerson (row) {

		var person = {
			name: row.gsx$name.$t,
			likesPets: row.gsx$likespets.$t
		}

		return person
	}

	// Capture user input

	function getSelectedOption() {

		var selectedOption = $('select option:selected').val()
		return selectedOption
	}

	// Filter and sort data according to user choices

	function filterData(data, option) {

		var filteredData = [] // an empty array

		// loop through data 
		var counter = 0;
		var total = peoplesList.length;

		while (counter < total) {
 			if (option == 'Keep my pet')
			{
				var person = peoplesList[counter];
				// add rows to filteredData only if likesPets is 'yes'
				// we wouldn't give our pet to someone who dislikes them would we?
				if (person.likesPets == 'yes') {
					filteredData.push(person)
				}	
			}
		}
		

		return filteredData
	}

	function sortData(data, option) {

		var sortedData = [] // an empty array

		if (option == 'Keep my pet')
		{
			// we don't need to sort the data
			return data
		}	

		return sortedData
	}

// Display filtered+sorted data

	function displayData (data) {

		// loop through data 
		var counter = 0;
		var total = data.length;

		while (counter < total) {
			
			var person = data[counter];
			
 			var li = getPersonListItem(person)
		
			// append the list item to our HTML
			$('ul').append(li)
			
			counter += 1;
		}
	 
	}

	// this function is like an HTML sausage machine
	// pass in some person data
	// and it will return an HTML list item wrapped around that data
	function getPersonListItem (person) {

		// create a variable to store the HTML code
		// we put the static (non variable) bits in speech marks
		// and the variable bits outside of speech marks
		var li = "<li>"
			+ "<h3>" + person.name + "</h3>"
			+ "</li>"

		return li 
	}


// When should we kick off the whole thing? 
// When people click on the button	

	// use jQuery to select the button
	// 'listen' for when the button is clicked
	$('button').on('click', function() {

		// get user input
		var selectedOption = getSelectedOption()

		// filter and then sort the data
		var filteredData = filterData(peoplesList, selectedOption)
		var sortedData = sortData(filteredData, selectedOption)

		console.log(sortedData)

		// display filtered+sorted data
		displayData(sortedData)
	})
