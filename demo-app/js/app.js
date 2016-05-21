
var databaseURL = 'https://codeyourapp.firebaseio.com';

var database = new Firebase(databaseURL);

var dataList = []; // an empty list, for now

// load data, see the Firebase manual https://www.firebase.com/docs/web/guide/retrieving-data.html#section-event-types
database.on('child_added', function(firebaseObject) 
{
  var data = firebaseObject.val(); // this is Firebase val()
  // "push" is JavaScript's lingo for "add to a list"
  dataList.push(data);
});


// hide the detail page by default
$('#details').hide();


$('button').click( function()
{
  // get user input
  var selectedOption = $('select').val(); // this is jQuery val()
  // filter people by user selection
  var resultsList = filterAndSortList(dataList, selectedOption);
  // and show the results
  showList(resultsList);
});


$('#back').on('click', function()
{
  $('#home').show();
  $('#details').hide();
});
