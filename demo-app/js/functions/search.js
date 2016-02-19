function searchList(list, text)
{
  // let's apply the JS filter function to peopleList
  // to return only people whose data contains the text from the input box
  var searchResults = list.filter(function(person)
  {
    // from a person (structured JS Object)
    // we extract all the values (name, likesPets, etc.)
    // and add them to a string
    // this process is called "flattening"
    var flattenedValues = ''
    for (property in person) 
    {
      var value = person[property]
      flattenedValues += ' ' + value
    }
    // let's see if our search pattern (userInput) is contained in the flattenedValues string
    var searchPattern = new RegExp(text,'ig')
    // we use the JS test function for this
    // http://www.w3schools.com/jsref/jsref_regexp_test.asp
    var contains = searchPattern.test(flattenedValues) 		
    // console.log('Does "' + flattenedValues + '" contains "' + inputText + '"? ' + contains)
    return contains
  })
  return searchResults
}

function searchListByYesOrNo (list, text)
{
  var searchResults = list.filter(function(person)
  {
    console.log (person)
    var termMatch = false

    for (var prop in person)
    {
      var searchPattern = new RegExp(text,'ig')

      termMatched = searchPattern.test(prop) 

      if (person[prop] == true && termMatched)
      {
        termMatch = true
      }
    }
    return termMatch
  })
  return searchResults
}