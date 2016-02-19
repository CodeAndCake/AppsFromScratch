function getSortedList (completeList, sortCriteria)
{
  var sortedList = [] // an empty array

  // loop through completeList
  var counter = 0
  var total = completeList.length

  while (counter < total)
  {
    // grab the current person from the list and store into a variable
    var person = completeList[counter]

    if (sortCriteria == 'Keep my pet')
    {
      // we don't need to sort the completeList
      return completeList
    }
    else if (sortCriteria == 'Bake a cake')
    {
      // we sort the list by the bakingSkills value
      // in descending order (big numbers first)
      return completeList.sort(function(personA, personB)
      {
        return personB.bakingSkills - personA.bakingSkills
      })
    }
    else if (sortCriteria == 'Move my piano')
    {
      // you do it :)
    }
    else if (sortCriteria == 'Mow the lawn')
    {
      // we sort the list by the mowTheLawn value
      // in descending order (big numbers first)
      return completeList.sort(function(personA, personB)
      {
        return personB.mowTheLawn - personA.mowTheLawn
      })
    }
    counter = counter + 1
  }

  return sortedList
}