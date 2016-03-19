/**
 *
 * Usage:
 *
 * var completeList = [
 * {
 *  name: "Hillary Clinton",
 *  bakingSkills: 5,
 *  likesPet: 4
 * },
 * {
 *  name: "Donald Trump",
 *  bakingSkills: 0,
 *  likesPet: 1,
 * }
 * ];
 *
 * var selectedOption = "bakingSkills";
 *
 * var criterias = [3, 4, 5];
 *
 * filterAndSortList(completeList, selectedOption, criterias);
 *
 */

/**
 * @param  {Array} - required
 * @param  {String} - required
 * @param  {Array} - optional
 * @return {Array}
 */
function filterAndSortList(completeList, selectedOption, criterias) {

	// Using Array method filter function to iterate throught and store the matched items into the filteredList
	// if the function inside returns true, it will store into filteredList
	// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

    var filteredList = completeList.filter(function(person) {

    	// Get the value by the selectedOption.
    	// eg. person['bakingSkills']
    	// See: http://www.w3schools.com/js/js_objects.asp

        var value = person[selectedOption];

        // typeof will check the the type of element
        // eg. It checks if the value is either number or boolean
        // Then if the value is the range of 1 - 5 assigned to person['bakingSkills']
        // It will check if the number is in between 4 to 5
        // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

        if (typeof value == 'number' || typeof value == 'string') {

        	if(criterias != undefined){

                // yet another Array method.
                // It will return the first found item inside the array
        		var found = criterias.find(function(criteria){

        			if(value == criteria){

        				return true;

        			}else{

        				return false;

        			}

                });

                // returns true if there was an item found meeting the criterias
                return found != undefined;

        	}else{

        		if (typeof value == 'number'){

        			var min = 4;
        			var max = 5;

        			return value >= min && value <= max;

        		}

        	}

        }

        if (typeof value == 'boolean') {

            return value;

        }

    });

    // Using Array method sort function to iterate throught and store the matched items into sortedList
    // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    var sortedList = filteredList.sort(function(personA, personB) {

        var valueA = personA[selectedOption]; // eg. personA['bakingSkills'] will assign 5 to valueA
        var valueB = personB[selectedOption]; // eg. personA['bakingSkills'] will assign 4 to valueB

        // Then check if the values are both numbers just in case.
        // And sum those two values and return the resulted number

        if (typeof valueA == 'number' && typeof valueB == 'number') {

            // It will sort results in descending order if the valueB - valueA is more than 0
            // It will sort results in ascending order if the valueB - valueA is less than 0
            return valueB - valueA;

        }

    });


    return sortedList;

}