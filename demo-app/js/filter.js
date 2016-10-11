/**

Usage:

var completeList = 
[
	{
		name: "Bernie Sanders",
 		bakingSkills: 5,
 		likesPet: true
  	},
 	{
 		name: "Donald Trump",
 		bakingSkills: 0,
 		likesPet: false,
 	}
];

var selectedOption = "bakingSkills";

filterAndSortList(completeList, selectedOption);

**/

/**
 @param  {Array} - required
 @param  {String} - required
 @return {Array}
**/

function filterAndSortList(completeList, selectedOption) 
{
	// Using the JS native Array method filter function to loop through and store the matched items into the filteredList
	// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

    var filteredList = completeList.filter(function(data) 
    {
		// Get the value for selectedOption
		// eg. data['bakingSkills']
		// See: http://www.w3schools.com/js/js_objects.asp
		
		var value = data[selectedOption];
		
		// typeof will check what type of data value contains, it could be a number, a string or a boolean (true / false)
		// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
		
		if (typeof value == 'string') value = Number(value); // if it's a string transform it into a number
		
		if (typeof value == 'number') 
		{
			var min = 4;
			var max = 5;
			return value >= min && value <= max;	
		}
		else if (typeof value == 'boolean') 
		{
			return value;
		}
	});

	// Using the sort function to loop through filteredList and store the sorted items into sortedList
    // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

	var sortedList = filteredList.sort(function(dataA, dataB) 
	{
		var valueA = dataA[selectedOption]; // eg. dataA['bakingSkills'] will assign 5 to valueA
		var valueB = dataB[selectedOption]; // eg. dataA['bakingSkills'] will assign 4 to valueB
		
		// Then check if the values are both numbers just in case
		// And sum those two values and return the resulted number
		if (typeof valueA == 'number' && typeof valueB == 'number') 
		{
			// It will sort results in descending order if the valueB - valueA is more than 0
			// It will sort results in ascending order if the valueB - valueA is less than 0
			return valueB - valueA;
		}
	});

	return sortedList;
}
