### Plan

AM:
 
- [ ] 0.5 hour

	[Quiz time](https://github.com/RavensbourneWebMedia/Web-development-workshop/tree/2016/sessions/04#quiz-time) with Team A and Team 1

- [ ] 1 hour
	
	Move `script` elements to the end of the `body`
	
	Breakpoint tool
	
	Displaying data (we started last week but it didn't work so let's do that again properly) how to create a string of HTML out of a data object and append it in your HTML

PM:

- [ ] 1 hour

	Filter data
	
	Integrate pre-written functions with an emphasis on what to customise

- [ ] 0.5 hour

	Fun, lightweight activity: CSS / start creating your own database






http://www.unheap.com

[jQuery challenge by Codecademy](https://www.codecademy.com/learn/jQuery)

Yuki:

- [ ] take [sorting and filtering functions from demo-app](https://github.com/CodeAndCake/AppsFromScratch/blob/v3/demo-app) and create versions of those functions that work with [Firebase API queries](https://www.firebase.com/docs/web/api/query/)





# Coding and app-making for beginners 

## Day 5


###  A couple  of programming essentials

#### Functions

### Functions
	
Functions are sets of instructions, packaged nicely for us to use over an over. 

Functions make code **reusable**. 

<!--
For instance, you could make a function to teach a *robot* how to `drink` something. The steps required to perform a drinking task remain the same, no matter what the robot is drinking.

```javascript
robot.drink("tea");
robot.drink("water");
robot.drink("coffee");
``` 
-->

Remember, you use functions of sorts everyday to do simple tasks. For instance, to make tea!

A function for making tea might look like this (not actual JS, just the logical steps)

```
function makeTea ( whichTea, howMuchSugar, howMuchMilk ) {   
	1. check for teabags of whichTea type   
	2. fill the kettle   
	3. boil the water   
	4. get a clean cup   
	5. put teabag in the cup 
	6. if howMuchSugar is more than zero, and we have sugar, then add sugar to the cup
	7. if howMuchMilk is more than zero, and we have milk, then add milk to the cup  
	8. return the tea! 
}
```
 
It would be exhausting for us to have to say out loud all of those individual steps every time we wanted to ask someone for a cup of tea!

Likewise, if we want to search through lots of variables to see if there's a `pear` inside, then we can use a function to carry out the repetitive task of going through many pieces of data.

We can *declare* a function like this to do that job

```javascript
function checkForPears (objectToCheck) {
	if (objectToCheck == "pear") {
		console.log("There's a pear in here!")
	} else {
		console.log("No pears in here, better luck next time!")
	};
}
```

We have packaged our instructions into a function, which means we don't have to type out all that code every time we want to search through variables. 

<!--All we need to type is this:-->

```javascript
var myFavouriteFruit = "orange";
checkForPears(myFavouriteFruit);
```

Because we have no `pear` in `myFavouriteFruit`, the Console will log `No pears in here, better luck next time!`.

So, to use a function you must

1. *declare* it: give it a **name** and teach the computer all the **steps** required to perform it

	```javascript
	function checkForPears (objectToCheck) {
		if (objectToCheck == "pear") {
			console.log("There's a pear in here!")
		} else {
			console.log("No pears in here, better luck next time!")
		};
	}
	```
2. *call* it: tell the computer to **execute** the code inside the function, by writing its name followed by *round brackets* `()`	

	```javascript
	checkForPears("orange");
	```
	
In between *round brackets* `()` we can pass one or more *variables* to the function.
	
```javascript
checkForPears("banana");
checkForPears("coconut");
checkForPears("plum");
var lastFruitInTheFridge = "kiwi";
checkForPears(lastFruitInTheFridge);
```
	
The variables we *pass* to a function in between *round brackets* `()` will be used inside the function as the temporary value for `objectToCheck`.

Variables inside a function are very useful, because they make the function **reusable**.

<!--
### Arguments

`checkForPears` is a **reusable** function. What makes it **flexible**?

It's `fruit`, a [variable](#variables) which lives inside the `checkForPears` function.

`I'm hungry` and `I need a nap` are called **arguments** ([don't argue, that's what they're called](http://programmers.stackexchange.com/questions/186293/why-are-actual-parameters-called-arguments)) and they are the actual values that we *pass* to a function.
-->

#### What happens in a function, stays in a function

There's another powerful thing we can do with functions: we can use them to take in some values, *compute* them, and then *return* a new value.

```js
function areYouAnAdult(age) {
	var answer;
	if (age < 18) {
	 	answer = "no";
	} else {
	 	answer = "yes";
	} 
	return answer;
};
```

`return` does two things: 

1. it gives a value back
2. it immediately exits the function

```js
areYouAnAdult(16); // returns "no"
areYouAnAdult(23); // returns "yes"
```

Without `return` we wouldn't know the answer!


#### Arrays

Two weeks ago, we created an emtpy list `peopleList[]` in our `app.js` file. This created an empty space for us to store the data of each person.

In JavaScript, these lists are called `arrays`. You store data in `arrays` much like a numbered shopping list.  

For example, create an array in the console like this:

```javascript
	var shoppingList = ['chilli', 'avocado', 'lime'];
``` 

You can check what's in each position. Instead of starting with number 1, `arrays` automatically always start with 0.

Chilli is at position 0, avocado is postion 1 and lime is at position 2.

 Written like this: 

`shoppingList[0]` the value at position 0 in `shoppingList` is chilli. 

`shoppingList[1]` the value at position 1 is avocado.

`shoppingList[2]` the value at position 2 is lime.

<!--   ARRAY GRAPHIC   -->
![alt text](assets/arrays.png "Arrays")

Arrays have some handy features such as the `length` property - it returns the length of the list.

Check how many things are in your array like this:

```javascript
	console.log(shoppingList.length);
```

#### Loops

`Loops` are essential for our app to work!

Have you ever played an album on loop? The first song plays, then the next, then the next until you reach the last song and it starts all over again:

* The **instruction** or **function** is **play**

* The **array** being looped through is the **album**

* The **data** used are the songs

In your app, you will sift through, filter and sort out every set of data in your database. You'll `loop` through the entire database and use functions (or sets of instructions and actions) to do things with that data. 

This saves you rewriting your functions for every single person, place, or artist in your database.

<!--  LOOP INTERACTIVE DEMONSTRATION  -->


#### jQuery

jQuery is a useful library of prewritten functions (sets of intructions and actions).

Many common functions are nicely packaged in jQuery to save us time!

For your app, you'll need to know a couple of things:

* You can use jQuery to select parts of your HTML
* You can use jQuery to perform `functions` on those selected parts

Using jQuery in your code can look like this:


<!--   jQuery GRAPHIC   -->
![alt text](assets/jQuery.png "Arrays")

In order to use jQuery we must load it in our HTML document. Remember how you loaded Firebase in your HTML document `head`? Using `<script></script>` tags - we need to load jQuery in the same way.

In the document `<head>` under 

## Code recap
### What have you done so far?


1. In your index.html file, you created the structure of your app's interface
2. You've styled that interface using CSS. You targeted specific html elements by giving them `classes` `.` and `ids` `#`
3. In the app.js file, you created a new Firebase database
```javascript
var database = new Firebase('https://appsfromscratch.firebaseio.com/demo-app')
```
4. Created an empty `array` (or list)
```javascript
var peopleList = [] // an empty list, for now 
```
5. Loaded each `person`'s data within the database into the array `peopleList[]` 
```javascript
// load data
database.on('child_added', function(person) 
{
  var personData = person.val() // this is Firebase val()
  peopleList.push(personData) // "push" is JavaScript's lingo for "add to a list"
})
// see the manual https://www.firebase.com/docs/web/guide/retrieving-data.html#section-event-types
```

Remember, that last step uses some Firebase functions: 

* `on()` is the Firebase listener that says ***when** something happens (an **event** like a click) then perform an action* 

* `val()`is a Firebase function that collects the data you've stored inside each `person`. In our case, the data was `likesPets`, `bakingSkills`, `bodyStrength` and so on...

It also uses a JavaScript function:

* `push()` adds whatever is passed through the brackets () into an `array`.

Didn't we use `push()` to save data into our database? 

Yes! We checked the Firebase manual to see which functions they created to make saving data into their databases easier. It just so happens they also use `push()`. You used that Firebase function to save data into the database : `database.push(person)`


## Let's continue!


<!--### 1. Create an `html` object

First, prepare a JavaScript object which selects all the HTML elements. This will make it easier to display data in your HTML. 

Go to **LINK HERE** and copy the following code:

```javaScript
// First let's store all the interface elements we need from HTML in an object
// We are using jQuery ($) to select stuff from HTML
var html = {
  pageWrapper: $('article'),
  pageSearch: $('#pageSearch'),
  searchInput: $('#pageSearch input[type=search]'),
  findButton: $('#pageSearch button'),
  dropDown: $('#pageSearch select'),
  results: $('#pageSearch .results'),
  totalFound: $('#pageSearch .results .total'),
  resultsList: $('#pageSearch .results ul'),
  pageProfile: $('#pageProfile'),
  backButton: $('#pageProfile .back'),
  person: $('#pageProfile .person')
};
```
Paste it into app.js under the `peopleList[]` array.

In this object which we've named `html`, jQuery is used `$` to select HTML elements from your interface by `class` and `id`.-->

<!--  HTML OBJECT GRAPHIC  -->


### 2. When a user clicks on the find button, what happens?

Go to **LINK HERE** and copy the following code:

```javascript
// define how our user interface (UI) elements behave
// when someone clicks the Find button...
$findButton.on('click', function()
{
  // get user input
  var selectedOption = $dropDown.val() // this is jQuery val()

  // filter people by user selection
  var filteredList = filterList(peopleList, selectedOption)

  // sort people by user selection
  var sortedList = sortList(filteredList, selectedOption)
  
  // and show the results
  showList(sortedList)
})
```

#### Let's break it down

First the outer shell:
```javascript
$findButton.on('click', function(){
..............
..............
})
``` 

`$findButton` selects the find button.

`.on('click', function(){ ...........   })` says **when** the user **clicks** the selected element, perform this function. In our case, **when** the user **clicks** `findButton`, perform this function.

*Inside* the function:

```javascript
  // get user input
  var selectedOption = $dropDown.val() // this is jQuery val()
```
1. Select the `dropdown` with jQuery `$`
2. Get the value of the clicked `option` (for example the option 'Look after my pet')
3. Save that value in a variable `var` named `selectedOption`


```javascript
   // filter people by user selection
  var filteredList = filterList(peopleList, selectedOption)

  // sort people by user selection
  var sortedList = sortList(filteredList, selectedOption)
  
  // and show the results
  showList(sortedList)
```
Using these 3 lines you: 

1. **filter** the data to match the user's selection (leaving out results that don't match the user selection)

	For example, if the selected option is `Keep my pet`, we will filter out all the people that don't like pets (ie `person.likePets = false`)
* **sort** the filtered data into order - small to big, or big to small. 

<!--the highest criteria match comes first (think Google search - most relevant results come up higher in the search results)-->
	For example, if the selected option is `Move my piano`, we will sort the people based on their body strength (ie `person.bodyStrength = 5`)
* **display** the filtered and sorted data

There's something missing, right?


### 3.Filter, sort and display

Yes! Each of those 3 lines of code contains a function which we must declare, otherwise nothing will happen when the user clicks on the `findButton`.

You'll need to create some new JavaScript files 

Right-click under your files in the left sidebar of your Thimble project. Create a `New Folder` and call it `js`. Now right-click on the javaScript folder and create a `New Folder` inside it called `functions`. Right-click on app.js and `Move To` the `js` file.

Inside the functions folder, create 3 `New File`s:
* filter.js - go to this link **LINK HERE**, copy all the code and paste into your filter.js file
* sort.js - go to this link **LINK HERE**, copy all the code and paste into your sort.js file
* show.js - go to this link **LINK HERE**, copy all the code and paste into your show.js file<!-- NEED TO CHECK IF IS OK - showList and showProfile in one file -->




## Your turn!




<!--
1. [Inspirations](#inspirations): cool stuff built with JS
* [JS challenge](#challenge)
* [Prototype](#prototyping) one component of your app


# Inspirations

Some cool stuff built with JS (100% Web technologies)!

[Emotion detection  
	![](assets/sad-face.png)](http://auduno.github.io/clmtrackr/examples/clm_emotiondetection.html)

[Audio (from mic) visualiser
![](assets/noise-viz.png)](http://googlechrome.github.io/web-audio-samples/samples/audio/visualizer-live.html)

[3D London Tube map    
	![](assets/tube-map.png)](http://brunoimbrizi.com/experiments/#/07)

[Cyber-attacks map  
	![](assets/cyber-attacks.png)](http://map.norsecorp.com/)

[Social media activity map  
	![](assets/social-media.png)](http://wearedata.watchdogs.com/start.php?locale=en-EN&city=london)


# Challenge!

1. [Fork this pen](http://codepen.io/baddeo/full/JYpgwL)!
* Add an `option` to the dropdown. 
 
	You may have to add new data to the *spreadsheet* (aka the database).   
* Code the app's behaviour in response to the new option.

	There are 3 functions you will need to hack:
	
	* `getPeopleList`
	* `getFilteredList`
	* `getSortedList`



# Prototyping

-->


<!--- [ ] Aimee can help with HTML and CSS-->


<!--

1. [Questions](#questions) about computers, people and the **interfaces** in between
* [Wireframing](#wireframing) (*user* interfaces)
* [Prototyping with code](#prototyping-with-code) (*programming* interfaces)




# Session 5

Key questions: 

* What is your app *value*? 
* How do you *communicate* it?


### AM

* [Designing behaviours](#designing-behaviours)
* [Telling the user story](#telling-the-user-story)
* [Wireframing](#wireframing) and [prototyping](#prototyping)

### PM

* [Presentations](#presentations)



# Designing behaviours

Not just interfaces.

We deal with interfaces, tools and devices, but what we design, ultimately, are **human behaviours**. 

We design means to **enforce**, **prevent** or **facilitate** behaviours.

### Persuasive interfaces

[![](http://goodui.org/images/idea009.png)](http://goodui.org/#9 "Telling who it's for instead of targeting everyone")

[![](http://goodui.org/images/idea004.png)](http://goodui.org/#4 "Social proof > testimonials")

[![](http://goodui.org/images/idea018.png)](http://goodui.org/#18 "Benefit Buttons instead of just task based ones")

[![](http://goodui.org/images/idea007.png)](http://goodui.org/#7 "Recommending instead of showing equal choices")

[![](http://goodui.org/images/idea030.png)](http://goodui.org/#30 "Loss Aversion instead of emphasizing gains")

[![](http://goodui.org/images/idea035.png)](http://goodui.org/#35 "Urgency instead of timelessness")

[![](http://goodui.org/images/idea036.png)](http://goodui.org/#36 "Scarcity instead of abundance")

[![](http://goodui.org/images/idea041.png)](http://goodui.org/#41 "Anchoring instead of starting with the price")

[![](http://goodui.org/images/idea044.png)](http://goodui.org/#44 "Smaller Commitments instead of one big one")


### Engaging interfaces

[![](http://goodui.org/images/idea048.png)](http://goodui.org/#48 "Natural Language instead of dry text")

[![](http://goodui.org/images/idea013.png)](http://goodui.org/#13 "Just enough input > gradual engagement")

[![](http://goodui.org/images/idea037.png)](http://goodui.org/#37 "Recognition instead of recall")

[![](http://goodui.org/images/idea014.png)](http://goodui.org/#14 "Exposing Options instead of hiding them")

[![](http://goodui.org/images/idea033.png)](http://goodui.org/#33 "Inline Validation instead of out-of-context errors")

[![](http://goodui.org/images/idea025.png)](http://goodui.org/#25 "Designing For Zero Data instead of just data heavy cases.")

[![](http://goodui.org/images/idea053.png)](http://goodui.org/#53 "Useful Calculations instead of asking to do math")

[![](http://goodui.org/images/idea008.png)](http://goodui.org/#8 "Undos instead of prompting for confirmation")

[![](http://goodui.org/images/idea052.png)](http://goodui.org/#52 "Thanking instead of simply confirming completion")

[![](http://goodui.org/images/idea058.png)](http://goodui.org/#58 "Set Collections instead of independent items")

[![](http://goodui.org/images/idea023.png)](http://goodui.org/#23 "Fewer Borders instead of wasting attention")

[![](http://goodui.org/images/idea047.png)](http://goodui.org/#47 "Icon Labels instead of opening for interpretation")

Also, check out animated examples of design patterns at [UseYourInterface](http://useyourinterface.com)



# Telling the user story

Don't present *features*. Tell a *story*.

1. **WHO** 

	* Think about a realistic *protagonist*
	* Give her a name
 	* Make her relatable
2. **WHERE** and **WHEN** 

	Think about a scenario
3. **HOW** 

	What are the *feelings* of your protagonist?
4. **WHAT** 

	* What *actions* does she take? 
	* What are their *results*?

![](assets/story.png)

# Wireframing

See last session's [notes on wireframing](../04/README.md#wireframes)

Think about the **3-4 key pages** that communicate what's unique about your app and how it benefits who uses it

Use [Moqups](https://moqups.com) or [Divshot](https://architect.divshot.com) to create your wireframes

# Prototyping

We'll show you hot to use [Invision](http://invisionapp.com), to link your wireframes and set them in motion.

Your prototypes will communicate how your app works, and offer a springboard for conversations with developers, designers, collaborators, investors...

-->


### License

[![](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ](http://creativecommons.org/licenses/by-nc-sa/4.0)

