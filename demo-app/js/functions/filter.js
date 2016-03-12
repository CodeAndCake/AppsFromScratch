/*
about: "I like coding and teaching people how to do it!"
bakingSkills: 4
bodyStrength: 3
diySkills: 2
image: "http://api.randomuser.me/portraits/men/33.jpg"
likesPets: true
name: "Matteo"
d
*/

function filterAndSortList (completeList, selectedOption){

 
 
  var filteredList = completeList.filter(function(person){

    var value = person[selectedOption];

      if(typeof value == 'number'){
        var min = 4;
        var max = 5;
        if(value >= min && value <= max){
          return true;
        }else{
          return false;
        }

      }

      if(typeof value == 'boolean'){
      
        if(value == true){
          return true;
        }else{
          return false;
        }

      }

  });


  var sortedList = filteredList.sort(function(personA, personB){


    var valueA = personA[selectedOption];
    var valueB = personB[selectedOption];


      if(typeof valueA == 'number' && typeof valueB == 'number'){
        
        // in descending order (big numbers first)
        return valueB - valueA;

      }
 

  });

  
  return sortedList;

}

/*function filterList (completeList, filterCriteria){

  var filteredList = [] // an empty list

  // loop through completeList
  var counter = 0
  var total = completeList.length

  while (counter < total){


    // grab the current person from the list and store into a variable
    var person = completeList[counter];



    if (filterCriteria == 'Keep my pet'){
      
      // add rows to filteredList only if likesPets is true
      // we wouldn't give our pet to someone who dislikes them would we?
      if (person.likesPets == true){
        // "push" is JavaScript's lingo for "add to a list"
        filteredList.push(person);
      }


    }else if (filterCriteria == 'Bake a cake'){
      
      // add rows to filteredList only if bakingSkills is bigger than 3
      if (person.bakingSkills > 3){
        // "push" is JavaScript's lingo for "add to a list"
        filteredList.push(person);
      }



    }else if (filterCriteria == 'Move my piano'){

      // you do it :)
    }else if (filterCriteria == 'Babysitting'){
     

      if (person.babysitting > 4){
        // "push" is JavaScript's lingo for "add to a list"
        filteredList.push(person)
      }

    }


    counter = counter + 1;

  }


  filteredList.sort(function(left, right){

  });
  
  return filteredList;

}*/