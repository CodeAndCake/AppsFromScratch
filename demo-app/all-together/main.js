var spreadsheetURL = 'https://spreadsheets.google.com/feeds/list/1BGkw8j2gas0j1V_JQhE5QLRROoExNfv_Yk74Dri6shg/1/public/values?alt=json'

var peopleList

// let's use jQuery to select the #search input field 
// and store it in a variable (so that we can re-use it later)
// # is for id
var searchField = $('#search'); 
searchField.on('keypress', function(){
	
	// let's capture the text from the input box
	// store it in the userInput variable	
	var userInput = searchField.val();
	
	// let's apply the JS filter function to peopleList
	// to return only people whose data contains the text from the input box
	var searchResults = peopleList.filter(function(person){
		
		// from a person (structured JS Object)
		// we extract all the values (name, likesPets, etc.)
		// and add them to a string
		// this process is called "flattening"
		var flattenedValues = '';
		for (property in person) {
			var value = person[property]
			flattenedValues += ' ' + value;
 		}
 		// let's see if our search pattern (userInput) is contained in the flattenedValues string
 		var searchPattern = new RegExp(userInput,'ig');
 		// we use the JS test function for this
 		// http://www.w3schools.com/jsref/jsref_regexp_test.asp
 		var contains = searchPattern.test(flattenedValues); 		
 		console.log('Does "' + flattenedValues + '" contains "' + userInput + '"? ' + contains)
 		return contains
	});
	
	console.log(searchResults);
	// finally, we spit out the searchResults 
	// using the displayList function
	// so that users can see
	displayList($('#result'), searchResults)
});

// execute loadData
loadData(spreadsheetURL, useData)

// when the user clicks the button...
$('button').on('click', function(){
    // get user input
    var selectedOption = getSelectedOption()

    // filter people by user selection
    var filteredList = getFilteredList(peopleList,  selectedOption)

    // sort people by user selection
    var sortedList = getSortedList(filteredList,  selectedOption)
     // display filtered+sorted data

    displayList($('#result'), sortedList)

})

// define what to do with the loaded data
function useData(jsonFile) {
	console.log('data loaded!')
  peopleList = getPeopleList(jsonFile)
}

// FUNCTIONS from https://github.com/CodeAndCake/AppsFromScratch/blob/v2/demo-app

/*

    Use this function to fetch data from a URL.

    Inputs

        1. url: it's the address of the data you want to fetch, for example "https://gender-api.com/get?name=matteo"

        2. successFunction: a function to execute when we receive data (it may take a few seconds before we receive something)

    Requirements

        This function relies on jQuery, so make sure jQuery is included in your document, eg:
 
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

function getPeopleList (jsonFile) {
    // we'll store a list of people in this variable
    var peopleList = []

    // from the whole json file, we only want to extract certain bits
    // first we select the list of spreadsheet rows, and put it in a variable
    var rows = jsonFile.feed.entry

    // then we loop through the rows and extract the info we need
    var counter = 0
    var total = rows.length
    // while loop
    while (counter < total)
    {
        var row = rows[counter]
        
         var person =
        {
            name: row.gsx$name.$t,
            likesPets: row.gsx$likespets.$t,
            bodyStrength: row.gsx$bodystrength.$t,
            bakingSkills: row.gsx$bakingskills.$t,
            diySkills: row.gsx$diyskills.$t,
            // etc.. you do it :)
        }

        peopleList.push(person) // store this in the main data array

        // increment the counter
        // to avoid infinite loops
        counter = counter + 1
    }
    console.log('peopleList ready!')
    return peopleList
}

function getSelectedOption() {

    var selectedOption = $('select option:selected').val()
    return selectedOption
}

// Filter and sort fromList according to user choices

function getFilteredList(fromList, filterCriteria)
{

    var filteredList = [] // an empty array

    // loop through fromList
    var counter = 0;
    var total = fromList.length;

    while (counter < total)
    {
        // grab the current person from the list and store into a variable
        var person = fromList[counter];

        if (filterCriteria == 'Keep my pet')
        {
            // add rows to filteredList only if likesPets is 'yes'
            // we wouldn't give our pet to someone who dislikes them would we?
            if (person.likesPets == 'yes')
            {
                // "push" is JavaScript's lingo for "add to a list"
                filteredList.push(person)
            }
        }
        else if (filterCriteria == 'Bake a cake')
        {
            // add rows to filteredList only if bakingSkills is bigger than 3
            if (person.bakingSkills > 3)
            {
                // "push" is JavaScript's lingo for "add to a list"
                filteredList.push(person)
            }
        }
        else if (filterCriteria == 'Move my piano')
        {
            // you do it :)
        }

        counter = counter + 1;
    }

    return filteredList
}

function getSortedList(fromList, sortCriteria)
{

    var sortedList = [] // an empty array

    // loop through fromList
    var counter = 0;
    var total = fromList.length;

    while (counter < total)
    {
        // grab the current person from the list and store into a variable
        var person = fromList[counter];

        if (sortCriteria == 'Keep my pet')
        {
            // we don't need to sort the fromList
            return fromList
        }
        else if (sortCriteria == 'Bake a cake')
        {
            // we sort the list by the bakingSkills value
            return fromList.sort(function(personA, personB){
                return personA.bakingSkills - personB.bakingSkills;
            });
        }
        else if (sortCriteria == 'Move my piano')
        {
            // you do it :)
        }

        counter = counter + 1;
    }

    return sortedList
}

function displayList (container, list) {

    // loop through list
    var counter = 0;
    var total = list.length;

    var totalFoundContainer = $('#total_found', container);
    var listContainer = $('#list', container);

    listContainer.empty();

     while (counter < total) {

        var person = list[counter]

        var li = "<li>" + "<h3>" + person.name + "</h3>" + "</li>"

        // append the list item to our HTML
        listContainer.append(li)

        counter = counter + 1
    }

    if(total == 0){

        totalFoundContainer.html('No result found');

    }else if(total == 1){

        totalFoundContainer.html('1 person found');

    }else{

        totalFoundContainer.html( total + ' people found');

    }

    container.addClass('active');

}








