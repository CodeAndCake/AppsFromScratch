// LIST of VARIABLES, aka INGREDIENTS

// DATA
var database = new Firebase('https://appsfromscratch.firebaseio.com/demo-app')
var peopleList = [] // an empty list, for now   

// INTERFACE
// we can select interface elements using jQuery ($ is a shortcut for jQuery)
var $pageWrapper = $('article')
var $pageSearch = $('#pageSearch')
var $searchInput = $('input[type=search]', $pageSearch)
var $dropDown = $('select', $pageSearch)
var $findButton = $('button', $pageSearch)
var $results = $('.results', $pageSearch)
var $totalFound = $('.total', $results)
var $resultsList = $('ul', $results)
var $pageProfile = $('#pageProfile')
var $backButton = $('.back', $pageProfile)
var $person = $('.person', $pageProfile)
    

// METHOD

// load data
database.on('child_added', function(person) 
{
  var personData = person.val() 
  // "push" is JavaScript's lingo for "add to a list"
  peopleList.push(personData) 
})
// see the manual https://www.firebase.com/docs/web/guide/retrieving-data.html#section-event-types

// define how our user interface (UI) elements behave
// when someone clicks the Find button...
$findButton.on('click', function()
{
  // get user input
  var selectedOption = $('option:selected', $dropDown).val()

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
}