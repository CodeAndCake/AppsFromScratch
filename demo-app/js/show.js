function showList (list) 
{
  var $ul = $('ul'); // tell jQuery to select the ul (Unordered List)

  if ($ul.length == 0) console.error('You are missing a <ul></ul> in your index.html');

  // update HTML
  $ul.html( makeListHTML(list) ); // html is a jQuery function 

  // add behaviour to the list items
  $('li').on('click', function()
  {
    var personId = $(this).attr('id');
    var person = list[personId];
    showProfile(person);
  })
}

function showProfile (person) 
{
  var personHTML = makePersonHTML(person);

  $('#person').html(personHTML);
  
  $('#home').hide();
  $('#details').show();
}

function makeListHTML (list) 
{
  var html = ''; // empty for now, we'll add HTML as we loop through the list 
  var total = list.length;

  // loop through list
  var counter = 0;
  while (counter < total) 
  {
    var person = list[counter];
    var li = makeListItemHTML(person, counter);
    
    // add the list item to the html
    html += li;
    
    // update the counter, to avoid infinite loops!
    counter = counter + 1;
  }
  return html;
}

function makeListItemHTML (person, index) 
{
  /*
    This function creates some nice HTML around the person's data

    Return something like this:

    <li>
      <h2>Aimee</h2>
    </li>
  */

  // li = List Item
  var li  = '<li id="' + index + '">' 
  + '<h2>' + person.name + '</h2>' 
  + '</li>'        

  return li;        
}

function makePersonHTML (person) 
{
  /*
    This function creates some nice HTML around the person's data

    Return something like this:

    <h2>Matteo</h2>
    <img src="https://ma.tteo.me/assets/surprise.png">
    <div class="about">
        I teach people aged 7 to 60+ how to be creative with code.
    </div>
    <button id="submit">Message Matteo now</button>
  */

  var html = '<h2>' + person.name  + '</h2>' 
  + '<img src="' + person.image + '">' 
  + '<div class="about">' + person.about + '</div>'
  + '<button id="message">Message ' + person.name + ' now</button>' 

  return html;        
}