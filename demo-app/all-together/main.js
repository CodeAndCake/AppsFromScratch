var spreadsheetURL = 'https://spreadsheets.google.com/feeds/list/1BGkw8j2gas0j1V_JQhE5QLRROoExNfv_Yk74Dri6shg/1/public/values?alt=json'

var peopleList

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
function useData(jsonFile) 
{
    console.log('data loaded!')
    peopleList = getPeopleList(jsonFile)
}

// let's use jQuery to select the #search input field 
// and store it in a variable (so that we can re-use it later)
// # is for id
var searchField = $('input[type=search]');
searchField.on('keypress keyup', function(){    
    // let's capture the text from the input box
    // store it in the userInput variable   
    var userInput = searchField.val();
    
    if(userInput == '')
    {
        // empty the display list
    }
    else
    {  
        var searchResults = searchPeopleList(userInput);
        // var searchResults = searchPeopleListByYesOrNo(userInput);

        // console.log(searchResults);
        // finally, we spit out the searchResults 
        // using the displayList function
        // so that users can see
        var resultsContainer = $('#result')
        displayList(resultsContainer, searchResults)
    }

});

function searchPeopleList(inputText)
{
    // let's apply the JS filter function to peopleList
    // to return only people whose data contains the text from the input box
    var searchResults = peopleList.filter(function(person){
        
        // from a person (structured JS Object)
        // we extract all the values (name, likesPets, etc.)
        // and add them to a string
        // this process is called "flattening"
        var flattenedValues = '';
        for (property in person) 
        {
            var value = person[property]
            flattenedValues += value + ' ';
        }
        // let's see if our search pattern (userInput) is contained in the flattenedValues string
        var searchPattern = new RegExp(inputText,'ig');
        // we use the JS test function for this
        // http://www.w3schools.com/jsref/jsref_regexp_test.asp
        var contains = searchPattern.test(flattenedValues);         
        console.log('Does "' + flattenedValues + '" contain "' + inputText + '"? ' + contains)
        return contains
    });
  
    return searchResults;
}

function searchPeopleListByYesOrNo(text)
{
    var searchResults = peopleList.filter(function(person)
    {
        // console.log(person);
        var termMatch = false;
        
        for (var prop in person)
        {
            var searchPattern = new RegExp(text,'ig');
        
            termMatched = searchPattern.test(prop); 
          
            if(person[prop] == "1" && termMatched)
            {
                termMatch = true;
            }
        }
        return termMatch;
    
    });
  
    return searchResults;
}

// FUNCTIONS from https://github.com/CodeAndCake/AppsFromScratch/blob/v2/demo-app

function loadData (url, successFunction) 
{

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

function getPeopleList (jsonFile) 
{
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
        
        var person = {} // an empty object
        // let's stuff the person with data from the json
        person.name = row.gsx$name.$t
        person.likesPets = row.gsx$likespets.$t
        person.bodyStrength = row.gsx$bodystrength.$t
        person.bakingSkills = row.gsx$bakingskills.$t
        person.diySkills = row.gsx$diyskills.$t
        // etc.. you do it :)

        peopleList.push(person) // store this in the main data array

        // increment the counter
        // to avoid infinite loops
        counter = counter + 1
    }
    console.log('peopleList ready!')
    return peopleList
}

function getSelectedOption() 
{

    var selectedOption = $('select option:selected').val()
    return selectedOption
}

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

function displayList (container, list) 
{
    var total = list.length;
    var totalFoundContainer = $('#total_found');
    if (total == 0)  totalFoundContainer.html('No result found');
    else if (total == 1)totalFoundContainer.html('1 person found');
    else totalFoundContainer.html( total + ' people found');

    var listContainer = $('#list');
    listContainer.empty()

    // loop through list
    var counter = 0;
    while (counter < total) 
    {
        var person = list[counter]

        var listItem = $(getListItem(person))

        // when someone clicks on the list item..
        // execute the function onListItemClick
        // and "bind" it to the current person
        // otherwise it would display the wrong person's data
        listItem.on('click', onListItemClick.bind(this, person))

        // append = add at the end..
        listContainer.append(listItem)

        counter = counter + 1
    }

    container.addClass('active');
}

function onListItemClick(person)
{
    var detailsContainer = $('#page2 .profile')
    displayDetails(detailsContainer, person)
}

function displayDetails(container, person)
{
    var personDetails = getDetails(person)

    // make the container display personDetails
    container.html(personDetails)

    $('#page_slider').addClass('details_view')
}

function getListItem(person)
{
    /*
        This function creates some nice HTML around the person's data

        Return something like this:

        <li>
            <h3>Aimee</h3>
        </li>
    */

    // li = List Item
    var li  = "<li>" 
                + "<h3>" 
                    + person.name 
                + "</h3>" 
            + "</li>"        

    return li        
}

function getDetails(person)
{
    /*
        This function creates some nice HTML around the person's data

        Return something like this:

        <img src="http://cdn.themill.com/media/00000010245.jpg">
        <div class="title">
            Long time baker and food writer
        </div>
        <div class="description">
            I make cakes for parties and special occasion. Contact me about your next cake!
        </div>
        <button id="submit">Message Yuki now</button>
    */

    var html  = "<h2>" 
                + person.name 
              + "</h3>" 


    return html        
}

$('#back').on('click', function()
{
   $('#page_slider').removeClass('details_view') 
})