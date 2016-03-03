function makeTotalFoundHTML (list)
{
  var total = list.length
  if (total == 0) return 'No result found'
  else if (total == 1) return '1 person found'
  else return total + ' people found'
}

function makeListHTML (list) 
{
  var html = '' // empty for now, we'll add HTML as we loop through the list 
  var total = list.length

  // loop through list
  var counter = 0
  while (counter < total) 
  {
    var person = list[counter]
    var li = makeListItemHTML(person, counter)
    
    // add the list item to the html
    html += li
    
    // update the counter, to avoid infinite loops!
    counter = counter + 1
  }
  return html
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

  return li        
}

function makePersonHTML (person)
{
  /*
    This function creates some nice HTML around the person's data

    Return something like this:

    <h2>Yuki</h2>
    <img src="http://cdn.themill.com/media/00000010245.jpg">
    <div class="about">
        I make cakes for parties and special occasion. Contact me about your next cake!
    </div>
    <button id="submit">Message Yuki now</button>
  */

  var html = '<h2>' + person.name  + '</h2>' 
  + '<img src="' + person.image + '">' 
  + '<div class="about">' + person.about + '</div>'
  + '<button id="message">Message ' + person.name + ' now</button>' 

  return html        
}