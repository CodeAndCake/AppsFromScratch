// Filter and sort fromList according to user choices

function getFilteredList(fromList, filterCriteria) {

    var filteredList = [] // an empty array

    // loop through fromList
    var counter = 0;
    var total = fromList.length;

    while (counter < total) {
        if (filterCriteria == 'Keep my pet') {
            var person = fromList[counter];
            // add rows to filteredList only if likesPets is 'yes'
            // we wouldn't give our pet to someone who dislikes them would we?
            if (person.likesPets == 'yes') {
                filteredList.push(person)
            }
        }

        counter = counter + 1;
    }


    return filteredList
}
