
var databaseURL = 'https://codeyourapp.firebaseio.com';

var database = new Firebase(databaseURL);

var peopleList = []; // an empty list, for now

// load data, see the Firebase manual https://www.firebase.com/docs/web/guide/retrieving-data.html#section-event-types
database.on('child_added', function(child) 
{
  var personData = child.val();
  // "push" is JavaScript's lingo for "add to a list"
  peopleList.push(personData);
});


// hide the detail page by default
$('#details').hide();


$('button').on('click', function()
{
  console.log(peopleList);
  // get user input
  var selectedOption = $('select').val(); // this is jQuery val()
  console.log(peopleList);
  // filter people by user selection
  var resultsList = filterAndSortList(peopleList, selectedOption, [4, 5]);
  // and show the results
  showList(resultsList)
});


$('#back').on('click', function()
{
  $('#home').show();
  $('#details').hide();
});
