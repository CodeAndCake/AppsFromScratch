<!--
- [ ] `while` or recursive function?
- [ ] `storeData`
- [ ] `sortData`
- [ ] `getPersonListItem`	
-->

<!--- [ ] Robot: first [reacting](http://worrydream.com/LearnableProgramming/#react) then [abstracting](http://worrydream.com/LearnableProgramming/#abstract)-->

# Apps from scratch, day 2

1. How long does it take to make an app? 
* [What is **programming**?](#programming-vs-coding)
* Introduction to **JavaScript**: connect your app to an online database 
* Work together to generate, spec out and test your **ideas** 
* **UX research**: interview people (aka users)


### **How long** does it take to make an **app**?

This course is 24 hours long, ie **3 working days**.

The point of this course is to *introduce* you to the app-making **process** and **tools**

* **CodePen**: free online code editor, live preview
* **Spreadsheet**: simpler database, accessible online
* **HTML**, **CSS** and **JavaScript**: universal languages, entry point to more specialised ones (and useful to know for other jobs!)
* **GitHub repository**: industry-standard collaborative version-control system

In 3 days we may not get an app on the App Store, but don't lose heart. 

In 3 days you will **get started** with design and code and by the end you will:

* have a solid foundation to continue learning
* have first-hand experience of the design and development process
* feel confident speaking about your ideas with other designers, developers and product managers


# Programming vs coding

### Do *coding* and *programming* mean the same thing?

* Coding: writing code
* Programming: designing a list of instructions to get something done (aka **algorithm**) and then coding such instructions

[What's an algorithm?](http://www.bbc.co.uk/guides/z3whpv4#zyfwjxs)

* Computers can code.
* Computers can't program. People can.

### Programming is a **way of thinking**

Before we learn how to *code* a program, we should learn how to *think* about problems and solutions.

### **Computational thinking** 

* Not thinking like computers. Do computers think anyway? 
* Solving problems for **people**, using **code**.

It is about using code creatively to solve real-world problems, to **break down behaviours** in specific and precise ways that can be communicated to other people, and eventually to computers.

### Programming languages

Last week we learned how to create the **visual elements** of a Web product (site, page, app etc) using **HTML** + **CSS**. 

To set things in motion, to have a truly interactive experience, we need another ingredient: **JavaScript**.

#### 1. **HTML** → content and structure  

#### 2. **CSS** → style and design 

#### 3. **JS** → behaviour and logic

HTML and CSS are coding languages.

JavaScript is a programming language (together with PHP, Python, Ruby, C, Java and many others).

<!--
### Natural vs programming languages 

* `the cat drinks milk` English 
* `de kat drinkt melk` Dutch
* `die Katze trinkt Milch` German 
* `il gatto beve latte` Italian 

Can you see a pattern here? A *subject* performing an *action* on an *object*. No matter which language, the structure is the same.

That structure is what we call **grammar**, the rules defining how you can put words together in order to communicate anything.

`drinks milk the cat` wouldn't work as a meaningful sentence, even though the components are the same.

1. `drinks`
* Who? `the cat`
* What? `milk`

If we know the meaning of each component...

... and we know the rules that define the relationships between such components (*grammar*)...

... then we can build the meaning of the whole sentence.

-->
<!--  

	Inspiring talk from Ajit Narayan about abstraction, language, grammar, speech and a visual grammar engine

	http://avazapp.com/freespeech/

	http://www.ted.com/talks/ajit_narayanan_a_word_game_to_communicate_in_any_language/transcript?language=en

-->

<!--Imagine you read this sentence in a language you don't speak. You can still try and make sense of it, by comparing it to a language you know. This process of *trying to make sense* is very important in programming.

How about this language?

`cat.drink(milk)` JavaScript (written by an English-speaking human)-->

### Robot time!

Let's pretend I'm a **robot** and you have to **program me**.

[![](assets/robot.png)](https://thenounproject.com/term/driven/62030/)

* **Mission**: find an object in the room, pick it up

* I only understand these **commands**: 
 
	`walk(steps)`
	
	`turn(degrees)` 
 	
 	`grab(thing)`

* I can hear, but can only say `yes` or `no`

<!--People usually start by giving you very *specific instructions* (eg: walk 3 steps, turn 45 degrees, walk 2 steps..): **remote-controlling**

We can then make them their code more *abstract* and *flexible* with **logic** and **functions**.
	
(The idea is to engage people with an [easy task](http://pss.sagepub.com/content/early/2012/08/31/0956797612446024.abstract) before we challenge them with a demanding one)-->
	
### Principles of Programming (PoP)

There are lots of programming languages: JavaScript, Python, C, C++, Objective-C, Java, Ruby. 

They share the same core principles, and the same **building blocks**: 

1. **Variables** to store data 
* **Functions** to define reusable sets of instructions
* **Logic** to make choices `if this then that`

What variables, functions and logic do you use in your everyday life (even if you don't call them so)?

* **Variables** weather (sunny, cloudy, warm, cold..), date, location.. 
* **Functions** get out of bed, check weather (on you phone, on TV..), check calendar
* **Logic** if sunny then wear sunglasses, if rainy then take an umbrella

Think about the [robot game](#robot-time): which variables, functions and logic did we use?

<!-- ```js

var degrees = 1;
var steps = 1;
var target = "coin";

function grab(object) {
	...
}

function walk(steps) {
	...
}

function turn(degrees) {
	...
}

function canYouSee(target) {
	...
}

if (canYouSee(target)) {
	// walk towards it
	...
} else {
	// turn and check again
}

``` -->

# Back to the brief

> Make an app that helps people sort through heaps of data to **find who/what they are looking for** (eg: people in their community to do something together).

First we'll break down the problem into smaller tasks, *specifying* for each task who does what and when. This process is what **designing algorithms** is about. 

Once we have a good understanding of how our app will behave, we can **code** those algorithms.

### 1. Break down the problem

We need four volunteers (and post-its). 

1. The user (talks only to HTML)
2. The HTML character (talks only to the user, on request)
3. The JS character (can talk to both HTML and API)
4. The API character (talks only to JS, on request)

HTML and JS are siblings or colleagues (they are part of the same app) so they should stand closer, maybe hold hands :)

Let's play out the app behaviour. 

Question: Should JS load data immediately or wait for user input? That is, should we wait for a shopping list or buy the whole store?

<!-- If the dataset is small, we may as well load it all and then present only what users ask for. This way they won't have to wait.. -->

1. Load data and store it in the app memory
* Capture user input
* Filter and sort data according to user choices
* Display filtered+sorted data

### 2. Code the algorithms

1. **Load data and store it in the app memory**
	
	* We need to know where to load data from, that is we need a **URL**. You can think of it as the address or phone number of your data..
	
	* Heads up! We're using **public data** to make things simpler (avoiding authentication procedures, data security measure etc.) so make sure you don't add sensitive information to the spreadsheet.
	
		```js
		var spreadsheetURL = 'https://spreadsheets.google.com/feeds/list/' + key + '/' + worksheet + '/public/values?alt=json'
		```
	
	See the [manual here](https://developers.google.com/gdata/samples/spreadsheet_sample?hl=en)
	
	* Copy-paste the URL into a new browser tab to check if it works and what data we're receiving from it
	
	* Integrate [this helper function](../../demo-app/loadData.js) to load data from a URL (we don't have to reinvent the wheel)
	
	* *Call* `loadData` and tell it where to ask for data (`spreadsheetURL`) and what to do once data is loaded (`storeData`)
		```js
		loadData(spreadsheetURL, storeData)
		```
	* Flesh out `storeData` (introducing [arrays](#arrays) and [loops](#loops))
	
	* Extract row data
	
	```js
	function extractPerson (row) {

		var person = {
			name: row.gsx$name.$t,
			likesPets: row.gsx$likespets.$t
		}

		return person
	}
	```
	
2. Capture user input

	* We can use jQuery to get the selected option. Let's try it in the console first
	
	```js
	$('select') // will grab the whole dropdown element
	$('select option:selected') // will grab the selected option from the dropdown
	$('select option:selected').val() // will return only the value (or text) for the selected option
	```
	
	* Let's create a reusable function to get the selected option
	
	```js
	function getSelectedOption() {

		var selectedOption = $('select option:selected').val()
		return selectedOption
	}
	```
	
	* **When** do we need to capture the selected option? When one presses the `button`.
	
	Let's teach our app to do that
	
	```js
	$('button').on('click', function() {
		var selectedOption = getSelectedOption()
		// and then we need to sort, filter and display data
	})
	```

3. Filter and sort data according to user choices

	```js
	function filterData(data, option) {

		var filteredData = [] // an empty array
		
		// loop through data
		data.forEach(function(person) {
			
			// depending on option, we add rows to filteredData
			// for example, if option is "Keep my pet" we add rows to filteredData only if person.likesPets is 'yes'
			// we wouldn't give our pet to someone who dislikes them would we?
			
			if (option == 'Keep my pet') {
				if (person.likesPets == 'yes') {
					filteredData.push(person)
				}	
			}
			// TODO check the other options..
		})

		return filteredData
	}
	```

4. Display filtered+sorted data
 
	```js
	function displayData (data) {

		// loop through data 
		data.forEach(function(person) {

			// use the template function to get a list item
        	var li = getPersonListItem(person)
        
        	// append the list item to our HTML
        	$('ul').append(li)

		})
	}
	```

<!--

1. Capture `input` value into `var`
* `console.log` it
* Add listener to `button`
* Introduce GitHub
* Introduce JSON
* Copy-paste the API wrapper
* `console.log` results
* `while` loop (Choc demo)
* Template
-->
