# Coding and app-making for beginners 

## Day 3

1. **JavaScript**: [get our app to display data](#lets-code)
* [What is good design?](#what-is-design)  
* [Designing behaviours](#designing-behaviours) 
* [Wireframing](#wireframes)


# Let's code

> Make an app that helps people sort through heaps of data to **find who/what they are looking for** (eg: people in their community to do something together).

### 1. Break down the problem

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
	
	* Integrate [loadData function](../../demo-app/loadData.js) to load data from a URL (we don't have to reinvent the wheel)
	
	* *Call* `loadData` and tell it where to ask for data (`spreadsheetURL`) and what to do once data is loaded (`getPeopleList`)
		```js
		loadData(spreadsheetURL, getPeopleList)
		```
	* Integrate [getPeopleList function](../../demo-app/getPeopleList.js)
	
		Introducing [arrays](#arrays) and [loops](#loops)
	
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










# What is design?

**Design** is a response to an inquiry or a problem.

People don't come to your site/app to see your pretty design. 

### UX/UI design: same thing?

UI is like the seat of your car.
UX is the experience you get from that seat.

>UX design is about effectively addressing the needs and circumstances of your users, to produce interfaces that are comfortable and even joyful to use.

![](assets/cooker ui.jpg)
![](assets/washing machine ui.jpg) 

### What is good design?

Even though it looks gorgeous, it's not doing well what is made for.
 
Hot Berta is good example of bad user experience design.

![](assets/Hot-Bertaa.png)

### How to make good design?

Have a clear, **step-by-step process** to help you through the creation of your app

#### Research

**Thinking through** your ideas in detail helps identify potential problems, gaps in your knowledge, and assumptions before you dive into code.

Taking the time to step back and think about **audience** and explore **multiple ideas** will lead to a more successful solution
	
* What is your goal?
* Who is your audience? 
* What is the key issue you are addressing? 
	
#### Sketch

**Brainstorming** helps you to work with peers to kickstart an idea or concept for a design.

<!--**Impact mapping** helps you to focus on the goal you are trying archive by mapping out the cause and effect.-->

Sketch using pen and paper, write down different scenarios and *user journeys*.

#### Collaborate 

Ask other team, specialist, users. 

More brains are better than one.

#### Prototype & test

Process of understanding the product by trial and error.

**User testing** allows you to explore your assumptions and see what improvements need to be made to your design.

#### Iterate

Do more prototyping & testing. 

#### Launch & learn more

It's not end of the process.


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


# Wireframes

Is *this* a wireframe?

![](assets/wireframe-bullshit.jpg)

Is *this* a wireframe?

![](assets/wireframe-example2.png)

Is *this* a wireframe?

![](assets/not-a-wireframe-example.jpg)

Just like a map is an abstraction of a place that helps us describe its location and geography, **wireframes are abstractions** of the **structure** of an interactive system and the **relationships** between its components.

* Wireframes are about **communicating your ideas**.

* They are about **content**, **context** and **interaction**. 

	Use **real content**, not *lorem ipsum*. 
	
	**Words** are key. [Interface design is copywriting](https://gettingreal.37signals.com/ch09_Copywriting_is_Interface_Design.php)
	
	Think about **button labels**, how do you label user actions: is it `Share` or `Post` or `Publish` or `Say it!` or `Broadcast` for instance?  

* They're **NOT about style**. 

	When wireframing, don't worry about *colours*, *graphics* and *typography*. 


<!--
### Wireframes *with code*

> Standing on the shoulders of giants...

or

> Don't reinvent the wheel

Meet [Bootstrap](http://getbootstrap.com/), a framework to build mobile-first Web-apps and sites. It comes with a set of common *building blocks* to quickly put together interfaces

[![](assets/bootstrap.png)](http://getbootstrap.com/)

[Divshot](https://architect.divshot.com/) and [Jetstrap](https://jetstrap.com/) are drag&drop interface builders based on Bootstrap, which you can use to make clickable wireframes.-->

<!-- Later on, you can export those wireframes into HTML&CSS and start building your app on those-->

### Wireframes *sans code* 

Using [Moqups](https://moqups.com/)

[![](assets/moqups.gif)](https://moqups.com)


### License

[![](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ](http://creativecommons.org/licenses/by-nc-sa/4.0)