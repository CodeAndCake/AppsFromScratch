function showList (list) 
{
  // update HTML
  $('ul').html( makeListHTML(list) ); // html is a jQuery function 

  // add behaviour to the list items
  $('li').on('click', function()
  {
    var personId = $(this).attr('id')
    var person = list[personId]
    showProfile(person)
  })
}

function showProfile (person)
{
  var personHTML = makePersonHTML(person)

  $('#person').html(personHTML)
  
  $('#home').hide();
  $('#details').show();
}