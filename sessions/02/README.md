<!-- - [x] in the last episode.. HTML + CSS recap (with *spot the difference*?) -->

<!--- [ ] Robot: first [reacting](http://worrydream.com/LearnableProgramming/#react) then [abstracting](http://worrydream.com/LearnableProgramming/#abstract)-->

# Apps from scratch, day 2

1. [What is programming?](#programming-vs-coding) 
* Where is data?

#### Building blocks

* [Variables](#variables)
* [Objects](#objects)
* [Functions](#functions)
* [APIs](#apis)
* [Arrays](#arrays)
* [Loops](#loops)
* [Templating](#templating)


# Programming vs coding

Do *coding* and *programming* mean the same thing?

* Coding: writing code
* Programming: designing a list of instructions to get something done (aka **algorithm**) and then coding such instructions

[What's an algorithm?](http://www.bbc.co.uk/guides/z3whpv4#zyfwjxs)

* Computers can code.
* Computers can't program. People can.


### Programming is a **way of thinking**

Before we learn how to *code* a program, we should learn how to *think* about problems and solutions.

**Computational thinking** 

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

<!--  

	Inspiring talk from Ajit Narayan about abstraction, language, grammar, speech and a visual grammar engine

	http://avazapp.com/freespeech/

	http://www.ted.com/talks/ajit_narayanan_a_word_game_to_communicate_in_any_language/transcript?language=en

  -->

Imagine you read this sentence in a language you don't speak. You can still try and make sense of it, by comparing it to a language you know. This process of *trying to make sense* is very important in programming.

How about this language?

`cat.drink(milk)` JavaScript (written by an English-speaking human)



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
	


### Principles of Programming (POP)

There are lots of programming languages, and they share the same core principles, and the same **building blocks**: 

1. **Variables** store data 
* **Functions** define reusable sets of instructions
* **Logic** is about making choices (if this then that)

What variables, functions and logic do you use in your everyday life (even if you don't call them so)?

* **Variables** weather (sunny, cloudy, warm, cold..), date, location.. 
* **Functions** get out of bed, check weather (on you phone, on TV..), check calendar
* **Logic** if sunny then wear sunglasses, if rainy then take umbrella

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

if (canYouSee(target)) {
	// walk towards it
	...
}

``` -->



# Let's code

Meet the [**JavaScript Console**](http://webmasters.stackexchange.com/a/77337).

![](assets/console.png)

It's like having a chat with your browser.

```javascript
hello
	Uncaught ReferenceError: hello is not defined
"hello"
	"hello"
```

Difference between words with **speech marks** (the browser simply parrots them) and words without speech marks 

```javascript	
var salutation = "hello"
	undefined
salutation
	"hello"
salutation = "hej"
	"hej"
salutation
	"hej"
```

Using **variables** to get the browser to remember things.

```javascript	
alert("ciao")
	undefined
alert(salutation)
	undefined
prompt("How do you say hello in your language?")
	"ciao"
var userSalutation = prompt("How do you say hello?")
	undefined
userSalutation
	"hola"
```

The browser can perform certain actions (aka **functions**) natively, like humans can natively breath, eg: `alert` and `prompt` 

We can also teach the browser how to do stuff, by **defining our own functions**
	
```javascript	
cat
	Uncaught ReferenceError: cat is not defined
var cat = {}
	undefined
cat.name = "Bill"
	"Bill"
cat
	Object {name: "Bill"}
```

**Objects** are useful to keep things organised.

```javascript	
cat.meow = function(){ alert("MEOOOOOOW") }
	function (){ alert("MEOOOOOOW") }
cat.meow()
	undefined
cat.drink = function(beverage){ alert("I am drinking " + beverage) }
	function (beverage){ alert("I am drinking " + beverage) }
cat.drink("milk")
	undefined
cat.drink("tea")
	undefined
cat.drink("beer")
	undefined
```

We can add pretty much anything to objects, including functions.

Functions are useful to **make code reusable**. For instance, the action of *drinking* remains the same, no matter what you are drinking.


### Meet jQuery

> [jQuery](https://jquery.com/) is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.

You may have heard of jQuery because of its *plugins* (image sliders, date pickers, colour pickers, form validators, image uploaders..) and maybe you've tried to mess around with those a bit.

jQuery uses CSS-like selectors, so for example if you want to manipulate a `h1` element in your page, you can do it like this

```js
jQuery("h1").hide();
``` 

which is the equivalent of telling the browser to `select all h1 elements in the page` (same as CSS) and `apply the hide function to them` 

### Making stuff happen on demand

This is what makes *programming* languages so much more powerful than coding languages like HTML and CSS. 

Programming has something to do with the *future*: you define instructions and *behaviour* that will happen in the future, *if* and *when* something specific happens.

For example, we want a certain element in the page to hide only when we click on a certain button. Using jQuery, we can do it like this

```js
// $ is a shortcut for jQuery
// jQuery("button") is the same as $("button")
// select the button, and make it run the function hideH1 when the "click" happens
$("button").on("click", hideH1);

// define the hideH1 function
function hideH1() {
	jQuery("h1").hide();
}
```

# Challenge

Go to jQuery Fundamentals and learn about [jQuery HTML manipulation](http://jqfundamentals.com/chapter/traversing-manipulating).

[![](assets/jQuery-Fundamentals-editor.png)](http://jqfundamentals.com/chapter/traversing-manipulating)

Using its *editor*, make these happen:

1. Change the content of `h3` (to whatever you like)
* Change the content of the `li` currently saying `CSS` (to whatever you like)
* Make the `select` dropdown disappear
* Tick the `checkbox`
* Type some text into the `input` text box, capture its `value` and then add it at the end of the `ul`



# Back to the brief

<!-- back to the future joke -->

> Make an app that helps people **make lunch**. The app must take a human **input** (eg: search keywords), use **data from the Web**, and then present a human-readable **output** (eg: list of recipes)

1. Break down the problem
* Code it


### 1. Break down the problem

That is, design the *algorithm*

1. The user
2. The HTML character
3. The JS character
4. The API character

We need four volunteers (and post-its)


### 2. Code the algorithm

1. Capture `input` value into `var`
* `console.log` it
* Add listener to `button`
* Introduce GitHub
* Introduce JSON
* Copy-paste the API wrapper
* `console.log` results
* `while` loop (Choc demo)
* Template





















## Variables

### When?

Whenever you want a computer to **remember something**.

### Why?

Variables are useful because they let us write programs without knowing the data which will flow through them.

```js
// we don't know their name just yet, but we can define how to greet them
function greet(name) {
	alert("Hello " + name + "!");
}
// we store their name in a variable
var userName = prompt("What's your name?");
// and then we greet them using that variable
greet(userName);
```

### How?

To use a variable, we must 

1. *declare* it: give it a **label**, let the computer know about the variable

	`var myName;`
2. *assign* it: give it a **value**, let the computer know what *value* we are storing in the variable

	`myName = "Matteo";`

#### How do we name them? 

* Variable names should be **clear and meaningful**: `myName` is better than `n` or `name` 
* Variable names should begin with letters, `$` or `_` and only contain letters, numbers, `$` and `_`
* Variable names are **case sensitive**, which means that `myName` is different to `myname` or `MyName` or `MYNAME`
* Variable names cannot be multiple words, so you can use [*camel case*](http://en.wikipedia.org/wiki/CamelCase) for  variables like `userTelephoneNumber`, instead of `usertelephonenumber`.


## Objects

### When?

Whenever you want to store **related values** together.

### Why?

**Objects** are useful to keep things organised.

### How?

To create an object, we *declare* a variable as usual, and then we use *curly brackets* to surround **key-value** property pairs:

```js
var objectName = { 
  propertyName: propertyValue,
  propertyName: propertyValue,
  ...
};
```

For example

```js
var cat = 
{
	name: "Bruno",
	age: 2,
	meow: function() { 
		alert("MEOOOOOOW"); 
	},
	drink: function(beverage) { 
		alert("I am drinking " + beverage); 
	}
}
```

#### How do we access them?

An object is not useful unless we can look inside it and grab the values of its properties. 

We can do that in two ways:

1. using *dot notation*, where we write the name of the variable, followed by a `.` and then the property name

	`cat.name`
	
2. using *bracket notation*, where we write the variable name, then *square brackets* with the property name in speech marks

	`cat["name"]`

#### How do we change them?

We can change the values of the object properties at any time during a program, using the *dot* or *bracket* notation.

`cat.name = "Bob";`

We can also add entirely new properties!

`cat.colour = "brown";`

## Functions

### When?

Whenever we want a computer to **do something**, like capturing an input, making a calculation, comparing data, answering a question, sending data, requesting data, drawing stuff on screen... anything.

### Why?

Functions are useful to **make code reusable and flexible**. For instance, the action of *drinking* remains the same, no matter what you are drinking.

```js
cat.drink = function(beverage) { 
	alert("I am drinking " + beverage); 
}
// let the cat drink various drinks
cat.drink("milk");
cat.drink("tea");
cat.drink("beer");
```

### How?

To use a function, we must

1. *declare* it: give it a **name** and teach the computer about the **steps** required to perform that action

	```js
	function meow() {
		alert("MEOOOOOOW");
	}
	``` 
2. *call* it: tell the computer to **execute** the code inside the function, by writing its name followed by *round brackets*	

	```js
	meow();
	// and again
	meow();
	```

### Arguments

`meow()` is a **reusable** function. How can we make it **flexible**?

```js
function meow(message) {
	alert("MEOOOOOOW " + message);
}
// different messages
meow("I'm hungry");
meow("I need a nap");
``` 

The `message` is a **parameter**, that is a [variable](#variables) which lives inside the `meow` function.

`I'm hungry` and `I need a nap` are called **arguments** ([don't argue, that's what they're called](http://programmers.stackexchange.com/questions/186293/why-are-actual-parameters-called-arguments)) and they are the actual values that we *pass* to a function.

### What happens in a function, stays in a function

There's another powerful thing we can do with functions: we can use them to take in some values, compute them, and then return a new value.

```js
function areYouAnAdult(age) {
  var answer;
  if (age < 18) answer = "no";
  else answer = "yes";
  return answer;
};
```

`return` does two things: 

1. it gives a value back to whoever asked for it 
2. it immediately exits the function

```js
areYouAnAdult(16); // returns "no"
areYouAnAdult(23); // returns "yes"
```

Without `return` we wouldn't know the answer!

## APIs

*Application Programming Interface*... wtf?

### When?

Whenever you want to use to use *3rd party* **data**, **software** or **hardware**.

For example, if you want to embed a map to your app you can use the [Google Maps API](https://developers.google.com/maps), instead of programming a whole new mapping system from scratch.

If you want to add a Twitter feed to your page you can use the [Twitter API](https://dev.twitter.com/rest/tools/console).

If you want to use geographical information about  your users, you can use the [HTML5 geolocation API](http://www.w3schools.com/html/html5_geolocation.asp)

### Why?

> Instead of reinventing the wheel, you can borrow someone else's wheel...

APIs work a bit like a library: 

1. You go to the library **API provider**
* You get a library card **API key**
* You borrow books **data** using your API key
* If you don't play by the rules, the librarian will prevent you from getting more books.

For companies, providing APIs is beneficial for:

* **branding**, eg getting a *Like* button on many other sites
* **control**, eg Twitter control which data you can use from it, how much of it and how you can manipulate it 
* **service improvement**, eg TFL published APIs for their transport data and developers created apps that help people plan their journeys more efficiently (which is good for TFL too)

### How?

You will have to **read the manual**.

Data APIs work with URLs. We can use URLs to **GET data** and **POST data**.

> Like calling a *function* over the Web..

<!--* Data from the Web
* Don't care what it looks like, just give me the data (see [The interface layer](https://medium.com/bridge-collection/the-interface-layer-when-design-commoditizes-tech-e7017872173a)) and I'll make it work and look proper
* 
* URLs to get and send data, examples-->


* To **GET data** from Google Search

	[https://www.google.co.uk/search**?q=banana**](https://www.google.co.uk/search?q=banana)
	
	We add `q=your+search+terms` to the URL and Google will return results for those terms

* To **GET data** from Facebook
	
	[https://**graph**.facebook.com/**RavensbourneUK**](https://graph.facebook.com/RavensbourneUK)
	
	We swap `www` for `graph` and Facebook will return a data object about the person or page we requested
	
* To **GET data** from the [Gender API](https://gender-api.com)

	[https://gender-api.com/**get?name=matteo**](https://gender-api.com/get?name=matteo)

* Many more APIs on [MashAPE](https://www.mashape.com) 

Every API is slightly different in syntax (which is why you have to read their manual), but the core method is the same: sending and receiving data via URLs

<!--Data APIs vs service APIs-->

```js
// https://www.mashape.com/edamam/recipe-search-and-diet
// The Edamam Recipe Search API lets you search over 1.5 million recipes from 500+ top web recipe sources

// this function takes in a phrase to search (searchString)..
// ..and a function to execute when we receive data from the API (callbackFunction)
function getRecipesFromAPI(searchString, callbackFunction) {

	// this is the API endpoint, which means the URL to which our search request is sent
	var apiEndpoint = 'https://api.edamam.com/search';

	// we're sending some data with our request
	var apiData = {
		// the app ID and key work like a library card 
		// every time we're borrowing some data from Edamam (the API service provider)
		// we use these to let Edamam know it's us
		_app_id: '602e4c99',
		_app_key: 'badc73a4282fd038b7547e9c5854a2d6',
		// q stands for query, and it's the search term for an ingredient or a recipe
		q: searchString
	}

	// perform an asynchronous HTTP (Ajax) request using jQuery
	// learn more about it at https://api.jquery.com/jQuery.ajax
	// $ is a shortcut for jQuery
	$.ajax({
		// send the request to the API endpoint
		url: apiEndpoint,
		// the request data we're sending
		data: apiData,
		// we want to receive a JSON object
		dataType: 'jsonp',
		
		// what to do when the API responds with some data
		success: function(responseJSON)  {
			// at this point we can call the callback function
			callbackFunction(responseJSON);              
		}
	})
}
```

## Arrays

### When?

When you want to store a list of things that have the **same data structure**.

Data APIs often return **lists** of objects (a list of recipes, a list of photos, a list of posts etc).

Each object contains different data, but has the same data structure.

### Why?

It's useful to have **consistent data structures** when you need to compare a lot of values quickly.

We may want to compare them so that we can sort them (eg the most popular picture, or the recipe with the shortest preparation time).

### How?

To create an array, we declare a variable like we always do, but then we surround our list of values with *square brackets* and separate each value with a comma.

To create an array of **numbers**
```js
var primeNumbers = [2, 3, 5, 7, 11, 13]; 
// the list goes on but we stop here
```

We can store any sort of JavaScript value in an array, not just numbers. Here's an example where we make an array of **strings**

```js
var animals = ["antelope", "zebra", "cat", "dog"]; 
// the list could go on
```

APIs often return arrays of **objects**

```js
var recipes = [
	{
		name: 'Banana bread',
		ingredients: [ ... ],
		picture: 'http://example.com/banana-bread.jpg'
	},
	{
		name: 'Banana fritters',
		ingredients: [ ... ],
		picture: 'http://example.com/banana-fritters.png'
	}
];
// the list could go on
```

#### How long?

To know how long an array is, we can use its `length` property

`recipes.length`

#### How do we access them?

To access a particular value in an array, we use its **index**, which represents its *position* in the array. 

The first index in an array is `0`, so if we want to access the first element in an array, we specify the name of the array variable, then `0` in *square brackets*

```js
var animals = ["antelope", "zebra", "cat", "dog"]; 

animals[0] // "antelope"
animals[2] // "cat"
```

The **zero-based indexing** is one of the most confusing aspects of arrays for new programmers :scream_cat:

#### How do we change them?

To change a value

```js 
animals[1] = "crocodile";
```

We can also add entirely new values to them, using the `push()` function

```js 
animals.push("penguin");
```


## Loops

### When?

Whenever you want to take some action for every element in an array.

### Why?

Instead of writing (almost) the same code over and over, we can use a loop to **iterate through each element** in the array.

### How?

Loops are super-common in programming.

```js
var people = ["Danny","Chris","George","John","Paul","Ringo"];
var counter = 0;
var total = people.length;
while (counter < total) {
  var person = people[counter];
  console.log(person);
  counter = counter + 1;
}
```

There are four ingredients to a loop:

1. An `array`
2. A `counter` variable, to keep track of the array element we're manipulating at each iteration of the loop
3. A `while` statement, which keeps checking for a condition (in this case, whether the counter is smaller than the total number of elements in the array)

	**While the condition is `true`** the computer will execute the code block inside `{ ... }`

4. Don't forget to **increment** the `counter` at the end of the loop, otherwise you'd get a dreaded **infinite loop** (and your browser would probably crash).

[![](assets/choc.png)](http://s.codepen.io/yukik/debug/oXNaMo)




## Templating

### When?

Whenever you have *raw data* that needs to be *dressed up*. 

### Why?

[**Separation of concerns**](http://en.wikipedia.org/wiki/Separation_of_concerns): keep *data* separated from its *presentation*.

### How?

```js
// this function is like an HTML sausage machine
// pass in some recipe data
// and it will return an HTML list item wrapped around that data
function getRecipeListItem(recipe)
{
	// create a variable to store the HTML code
	// we put the static (non variable) bits in speech marks
	// and the variable bits outside of speech marks
    var li = "<li>"
        + "<img src=" + recipe.image + ">"
        + "<h3>" + recipe.label + "</h3>"
        + "<p>This recipe is <b>" + recipe.level + "</b> and will take you " + recipe.totalTime + " minutes to prepare.</p>"
        + "<a href=" + recipe.url + " target=_blank>Let's make this recipe</a>"
        + "</li>"

    return li    
}
```
