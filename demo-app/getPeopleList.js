function getPeopleList (jsonFile)
{
	// we'll store a list of people in this variable
	var peopleList = []

	// from the whole json file, we only want to extract certain bits
	// first we select the list of spreadsheet rows, and put it in a variable
	var rows = jsonFile.feed.entry

	// then we loop through the rows and extract the info we need
	var counter = 0
	var total = rows.length
	// while loop
	while (counter < total)
	{
		var row = rows[counter]

		var person = {} // an empty object
        // let's stuff the person with data from the json
        person.name = row.gsx$name.$t
        person.likesPets = row.gsx$likespets.$t
        person.bodyStrength = row.gsx$bodystrength.$t
        person.bakingSkills = row.gsx$bakingskills.$t
        person.diySkills = row.gsx$diyskills.$t
        // etc.. you do it :)

		peopleList.push(person) // store this in the main data array

		// increment the counter
		// to avoid infinite loops
		counter = counter + 1
	}

	return peopleList
}