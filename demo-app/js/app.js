
var databaseURL = 'https://appsfromscratch.firebaseio.com/demo-app'

var database = new Firebase(databaseURL);

var peopleList = []; // an empty list, for now 

// load data, see the Firebase manual https://www.firebase.com/docs/web/guide/retrieving-data.html#section-event-types
database.on('child_added', function(child){

  var personData = child.val();

  // "push" is JavaScript's lingo for "add to a list"
  peopleList.push(personData);

});


// hide the detail page by default
$('#details').hide();


$('button').on('click', function(){
    
  console.log(peopleList);
  // get user input
  var selectedOption = $('select').val() // this is jQuery val()

  console.log(peopleList);
 
  // filter people by user selection
  var resultsList = filterAndSortList(peopleList, selectedOption);

  // and show the results
  showList(resultsList)

});


$('#back').on('click', function(){
    
  $('#home').show();
  $('#details').hide();

});










/*// LIST of VARIABLES, aka INGREDIENTS

// DATA
var database = new Firebase('https://appsfromscratch.firebaseio.com/demo-app')
var peopleList = [] // an empty list, for now   

// INTERFACE
// we can select interface elements using jQuery ($ is a shortcut for jQuery)
// TODO wrap these in an OBJECT
// var $pageWrapper = $('article')
// var $pageSearch = $('#pageSearch')
// var $searchInput = $('input[type=search]', $pageSearch)
// var $dropDown = $('select', $pageSearch)
// var $findButton = $('button', $pageSearch)
// var $results = $('.results', $pageSearch)
// var $totalFound = $('.total', $results)
// var $resultsList = $('ul', $results)
// var $pageProfile = $('#pageProfile')
// var $backButton = $('.back', $pageProfile)
// var $person = $('.person', $pageProfile)

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

// METHOD

// load data
database.on('child_added', function(person) 
{
  var personData = person.val() // this is Firebase val()
  // "push" is JavaScript's lingo for "add to a list"
  peopleList.push(personData) 
})
// see the manual https://www.firebase.com/docs/web/guide/retrieving-data.html#section-event-types

// define how our user interface (UI) elements behave
// when someone clicks the Find button...
$findButton.on('click', function()
{
  // get user input
  var selectedOption = $dropDown.val() // this is jQuery val()

  // filter people by user selection
  var filteredList = filterList(peopleList, selectedOption)

  // sort people by user selection
  var sortedList = sortList(filteredList, selectedOption)
  
  // and show the results
  showList(sortedList)
})

// when someone types in the search box...
$searchInput.on('keypress keyup', function()
{
  // let's capture the text from the input box
  // store it in the userInput variable	
  var text = $searchInput.val()

  if (text == '')
  {
    // clearList()
  }
  else
  {
    var searchResults = searchList(peopleList, text)
    // var searchResults = searchListByYesOrNo(peopleList, text) 
    // console.log(searchResults)
    // finally, we spit out the searchResults 
    // using the showList function
    // so that users can see
    showList(searchResults)
  }
})

// when the user clicks the Back button...
$backButton.on('click', function()
{
  // remove the class="profile" to slide the whole thing back to the search page
  $pageWrapper.removeClass('profile') 
})

function showList (list) 
{
  // update HTML
  $totalFound.html(makeTotalFoundHTML(list))
  $resultsList.html(makeListHTML(list))

  // add behaviour to the list items
  $('li', $resultsList).on('click', function()
  {
    var personId = $(this).attr('id')
    var person = list[personId]
    showProfile(person)
  })
  
  // and finally, show the results
  // add class="active" to $results, so that it will show (see pageSearch.css
  $results.addClass('active')
}

function showProfile (person)
{
  var personHTML = makePersonHTML(person)

  $person.html(personHTML)
  
  // we add class="profile" to make the whole thing slide to the left and display the profile page
  $pageWrapper.addClass('profile')
}*/