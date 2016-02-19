/*

    Use this function to fetch data from a URL.

    Inputs

        1. url: it's the address of the data you want to fetch, for example "https://gender-api.com/get?name=matteo"

        2. successFunction: a function to execute when we receive data (it may take a few seconds before we receive something)

    Requirements

        This function relies on jQuery, so make sure jQuery is included in your HTML

*/

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
    person.image = row.gsx$image.$t
    // etc.. you do it :)

    peopleList.push(person) // store this in the main data array

    // increment the counter
    // to avoid infinite loops
    counter = counter + 1
  }
  console.log('peopleList ready!')
  return peopleList
}