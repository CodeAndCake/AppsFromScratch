function getFilteredList (completeList, filterCriteria)
{
  var filteredList = [] // an empty list

  // loop through completeList
  var counter = 0
  var total = completeList.length

  while (counter < total)
  {
    // grab the current person from the list and store into a variable
    var person = completeList[counter]

    if (filterCriteria == 'Keep my pet')
    {
      // add rows to filteredList only if likesPets is true
      // we wouldn't give our pet to someone who dislikes them would we?
      if (person.likesPets == true)
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
    else if (filterCriteria == 'Babysitting')
    {
      if (person.babysitting > 4)
      {
        // "push" is JavaScript's lingo for "add to a list"
        filteredList.push(person)
      }
    }
    counter = counter + 1
  }
  return filteredList
}