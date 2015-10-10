function displayList (container, list) {

    // loop through list
    var counter = 0;
    var total = list.length

    while (counter < total) {

        var person = list[counter]

        var li = "<li>" + "<h3>" + person.name + "</h3>" + "</li>"

        // append the list item to our HTML
        container.append(li)

        counter = counter + 1
    }

}

