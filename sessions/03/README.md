# Coding and app-making for beginners 

## Day 3 AM

[Last week](../02) you learned how to use **HTML and CSS** to style fancy buttons, dropdowns and lists.

We also discussed *programming-vs-coding* and took a look at JavaScript (aka **JS**) for the first time. We used the JS **Console** to "speak" with our browsers, introducing the building blocks of programming: *variables*, *functions* and *logic*.

But don't worry if it all seems a little blurry one week on...

**Today** we'll start from those concepts, and put them into practice by connecting your app to an online **database**.


# JavaScript essentials

<!--JavaScript can look a little scary at first.--> 

Let's look at some key *tools*, before we dig into your app code:

1. [Variables](#variables)
* [Objects](#objects)
* [If statements](#if-this-then-that)
* [Functions](#functions)
* The [Console](#console)


## Variables

Variables are like *boxes* where you can store data. 

To create a variable, you write

```javascript
var
```
		
then give it a **name** 

```javascript
var fruit
```

and put its **value** after the `=` sign

```javascript
var fruit = "apple";
```

Now your variable is called `fruit` and has an `apple` inside it.

<!--
#### How to use a variable

To use a variable, we must 

1. *declare* it: give it a **label**
* *assign* it: give it a **value**
-->

### How do you name variables? 

* Variable names should be **clear and meaningful**: `fruit` is better than `f`
* Variable names must begin with letters, `$` or `_` and only contain letters, numbers, `$` and `_`
* Variable names are **case sensitive**, which means that `myFruit` is different to `myfruit` or `MyFruit` or `MYFRUIT`
* Variable names cannot have spaces, so you can use [*camel case*](http://en.wikipedia.org/wiki/CamelCase) for variables like `userTelephoneNumber`, which is easier to read than `usertelephonenumber`.

## Objects

An **object** is a special type of *variable*, which stores several pieces of information at once. 

It is useful to keep things organised!

To create an object, you *declare* a variable as usual with `var` followed by a name and `=` and then you put a pair of *curly brackets*.

<!--
 to surround **key-value** property pairs:

```js
var objectName = { 
  propertyName: propertyValue,
  propertyName: propertyValue,
  ...
};
```
-->

```js
var person = {};
```

You can then add **properties** to the object like this

```js
person.name = "Aimee";
person.age = 17; // would you believe it?
person.codingSkills = 3;
person.bakingSkills = 5;
```

### How do you access objects?

An object is not useful unless we can look inside it and grab the *values* of its *properties*. 

You can do that using *dot notation*, where you write the variable name followed by a `.` and then the property name

```js
person.name
```

## Comparing data

JavaScript is very good at comparing data. 

Say we wanted to know whether the `name` of a `person` was `Matteo`:

```js
person.name == "Matteo"
```

In English, this would translate to: if the value of `name` is equal to `Matteo`, then spit out `true`. And if not, spit out `false`.

Notice this subtle but important difference:

1. `=` is to **store** data
*  `==` is to **check** if two values are the same

### If *this* then *that*
	
You may want your app to do different things depending on the result of a comparison. For instance:

```javascript
if (person.age < 18) {
	alert("You are not technically an adult");
} else {
	alert("But are you really an adult?");
}
```
		
So, **if** the `age` property of `person` is lower than `18` an alert will pop up, saying `You are not technically an adult`. Otherwise (aka **else**) if `age` is equal or bigger than `18`, the alert will say `But are you really an adult?`

This is really handy for searching through databases. For instance, when you search for something on Google, they use lots of *if statements* to sort through all the millions of pages to find results that match your search words.

## Functions
	
Functions are sets of instructions, packaged nicely for us to use over and over. 

Functions make code **reusable**. 

<!--
For instance, you could make a function to teach a *robot* how to `drink` something. The steps required to perform a drinking task remain the same, no matter what the robot is drinking.

```javascript
robot.drink("tea");
robot.drink("water");
robot.drink("coffee");
``` 
-->

Remember, you use functions of sorts everyday to do simple tasks. For instance, to *make tea*!

A function for making tea might have these steps:

1. Are there teabags? 

	If not: exit the function. No tea this time :(
	
	Else: continue...
* Fill the kettle with water (we assume there is a working kettle, and we have access to water)  
* Turn the kettle on.
* Is the water boiling? 
	
	If not: wait `X` seconds and then check again...
	
	Else: continue...
* Get a clean cup (we assume there is one and it's in your reach)  
* Put the teabag in the cup 
* Pour `Y` ml of water in the cup.
* Is the cup full?

	If not: go to the previous step (that is, pour some more water)
	
	Else: proceed to the next step 
* **Return** the tea!

<!--
 look like this (not actual JS, just the logical steps)

```
function makeTea ( whichTea, howMuchSugar, howMuchMilk ) {   
	1. check for teabags of whichTea type   
	2. fill the kettle   
	3. boil the water   
	4. get a clean cup   
	5. put teabag in the cup 
	6. if howMuchSugar is more than zero, and we have sugar, then add howMuchSugar to the cup
	7. if howMuchMilk is more than zero, and we have milk, then add howMuchMilk to the cup  
	8. return the tea! 
}
```
-->
 
It would be exhausting for us to explain all of those individual steps every time we wanted to ask someone for a cup of tea!

Likewise, if you want your app to perform a set of actions more than once, it makes sense to wrap those actions in a function. 

For example, you can *declare* a function that checks the `age` of a person:

```js
function isAdult(age) {
	var answer;
	if (age < 18) {
	 	answer = "no";
	} else {
	 	answer = "yes";
	} 
	return answer;
};
```

The code above *explains* to your app how to check if someone is an adult.

You can then run that function on some actual data:

```js
isAdult(16); // returns "no"
isAdult(23); // returns "yes"
isAdult(person.age); // returns "yes" or "no", depending on what you have actually stored in person.age
```

So, to use a function you must

1. *Declare* it. Give it a **name** and teach the computer all the **steps** required to perform it
2. *Call* it. Tell the computer to **execute** the code inside the function, by writing its name followed by *round brackets* `()`	

	In between *round brackets* `()` we can pass one or more *variables* to the function.

<!--	
	If we call the `checkForPears()` function and pass through `"apple"` as our variable (in the `objectToCheck` spot), then JavaScript will execute the instructions placing `"apple"` wherever `objectToCheck` was. The process (although we can't see it happening) would be something like this:
	
	![](assets/functions_pear.jpg)
	
More examples:

```javascript
checkForPears("banana");
checkForPears("coconut");
checkForPears("plum");
var lastFruitInTheFridge = "kiwi";
checkForPears(lastFruitInTheFridge);
```
-->

The variables we *pass* to a function in between *round brackets* `()` will be used inside the function as the temporary value for `age`.

Variables inside a function are very useful, because they make the function **reusable**.

<!--
### Arguments

`checkForPears` is a **reusable** function. What makes it **flexible**?

It's `fruit`, a [variable](#variables) which lives inside the `checkForPears` function.

`I'm hungry` and `I need a nap` are called **arguments** ([don't argue, that's what they're called](http://programmers.stackexchange.com/questions/186293/why-are-actual-parameters-called-arguments)) and they are the actual values that we *pass* to a function.
-->
<!--
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
-->


### Functions in objects

Objects can contain functions! 

Remember the `person` object?

See how it might look with some functions inside.

```js
person.isAdult = function() {
	var answer;
	if (this.age < 18) {
	 	answer = "no";
	} else {
	 	answer = "yes";
	} 
	return answer;
}
```
<!--
Which parts are the functions?

What would happen if we wrote `cat.drink( water )`?
-->

## Console

[Last week](../02#meet-js) we played around with JS using the browser Console.

We don't normally write JS in the Console. Instead, we write our JS programs in a code editor like Thimble (or [Sublime](http://www.sublimetext.com), [Brackets](http://brackets.io) etc) and store them as `.js` files. 

The Console is an essential **testing tool** for people who write JavaScript. 

Why do we need it? Because **JS is invisible**.

When we write HTML and CSS, we can see the results of our code rendered by the browser. 

**JS instead doesn't show up on the page**! It does a lot of stuff behind the scenes (like loading, sorting, storing and comparing data) which we can't see. 

When writing JS, it is very useful to check that our code is running properly, that it doesn't have errors, and that it has all the data it needs at the right time.

Using the Console, we can make JS *visible*. In other words, we can get JS to leave some *traces* inside the Console.

For example, you can use the Console to check what's inside your `person` object by writing this...

```javascript
console.log( person );
```

... which will display everything that's inside `person` in the Console.

![](assets/console.log-person.png)

Click the `➤` next to `Object` to open the object up and see what's inside it.

You could also check if the person is an adult
```javascript
console.log( person.isAdult() );
```

Puzzled? Don't worry, you'll understand why the Console is useful the first time your JS code breaks, and the Console will tell you exactly *what* the *error* is and *where* to find it! 


# Coding and app-making for beginners 

## Day 3 PM

Back to the brief...

### Make an **app** that helps people sort through **data** to **find who/what they are looking for** 

<!--(eg: people in their community to do something together).-->

<!--Remember the [computational thinking](../02#computational-thinking) method?-->

1. First we'll [break down the brief](#first-break-down-the-brief) into smaller chunks, *specifying* how each one could work. This process is what **designing algorithms** is about. 
* Once we have a good understanding of how our app will behave, we can [**code** those algorithms](#then-code-the-algorithms).

## First: break down the brief

We need four volunteers (and post-its). 

1. The **user** (talks only to HTML)
2. The **HTML** character (talks only to the user, on request)
3. The **JS** character (can talk to both HTML and database)
4. The **database** character (talks only to JS, on request)

HTML and JS are siblings or colleagues (they are part of the same app) so they should stand closer, maybe hold hands :)

Let's play out the app behaviour. 

<!--Question: Should JS load data immediately or wait for user input? That is, should we wait for a shopping list or buy the whole store?
 
If the dataset is small, we may as well load it all and then present only what users ask for. This way they won't have to wait.. -->

1. **Load data** and store it in the app *memory*
* Capture **user input**
* **Filter and sort data** according to user choices
* **Output** filtered+sorted data

### But hang on... where is our *actual* database?

We're going to use a cloud-based real-time **database** service called [Firebase](https://www.firebase.com). There are several other solutions, including building your own database, however we chose Firebase because of its performance, features and good documentation. 

Many companies use Firebase to **rapidly prototype** app ideas, without investing time and money on database infrastructure and software.

[![](assets/firebase.png)](https://www.firebase.com)

> 1. Go to [firebase.com](https://www.firebase.com)
> * Click `LOGIN`
> * Click `Sign in with Google`
> * Email: `codeyourapp@gmail.com` 
> * Password: `L***e1n!` 
> * Click on the `DEMO` app
> 	![](assets/firebase-demo.png)

So we have a database, but as you can see it's currently **empty**.

Let's put some data into it!

We prepared a little tool for the *data entry* job. We made it with Thimble, so that you can see its source code and *remix* it.

> Go to [bit.ly/FirebasePusher](https://thimbleprojects.org/codeyourapp/60893/)

> Fill the form with data about yourself, or a made-up person.

> Click `Push it!` to send that data to our Firebase.  

Firebase updates in real-time, so shortly after you hit `Push it!` a new *object* with all the data you entered, will pop up on our own database at [codeyourapp.firebaseio.com](https://codeyourapp.firebaseio.com) :zap:

## Then: code the algorithms

Now that we have data in our Firebase database, we can load it into our app and do stuff with it!

> Go to [thimble.mozilla.org](https://thimble.mozilla.org/) and log in. Then open your project from last week. 

> Create a new file and call it `app.js`.

Like with CSS, we need to tell `index.html` to load our JS file.

> At the end of `body` in `index.html`, add a `script` and point it to `app.js` like so:

> ```html
	...
	<script src="app.js"></script>
</body>
</html>
```	

Your JS file is connected to `index.html`! Now you can write your JS code in `app.js`. 

The browser will read and execute `app.js` every time you load/refresh your app.

<!-- Do a console.log first -->

### 1. Load data and store it in the app memory

*Where* is our data?
	
We need to know where to load data from, that is we need a **URL**. You can think of it as the *address* or *phone number* of your data.

[codeyourapp.firebaseio.com](https://codeyourapp.firebaseio.com)

> In `app.js`, store the database URL as a *variable*:

> ```js
var databaseURL = 'https://codeyourapp.firebaseio.com';
```

Your browser can do [many things out-of-the-box](https://developer.mozilla.org/en/docs/Web/API), for instance: giving you scarily accurate geolocation coordinates, playing audios and vides, doing maths, convert text into voices etc. 

Yet your browser doesn't know how Firebase works, because Firebase doesn't come pre-installed. 

> Before you can use Firebase in your app, you must **install the Firebase JS library**. Do that by adding the following `script` at the end of `body` in `index.html`, just before the other `script` which points to `app.js`

> ```html
	...
	<script src="https://cdn.firebase.com/js/client/2.4.0/firebase.js"></script>
	<script src="app.js"></script>
</body>
</html>
```

Now that your browser knows what Firebase is and how it works, you can create a `database` *variable* as a new instance of `Firebase` and point it to our own `databaseURL`. 

> In `app.js`:

> ```js
var database = new Firebase(databaseURL);
```

We don't need to load the entire database in our app, but only data about *people*. We can think of *people* as a **list** of `person` objects.

> Create a `peopleList` *variable* and set it as an empty list `[]`. 

> ```js
var peopleList = []; // an empty list, for now 
```

The next step will be to load data from `database` and store a bunch of `person` objects in `peopleList`.

`database` is a Firebase *thing*, we haven't made so we don't know how to use it. What to do? **Read the manual!**

The Firebase manuals (aka the *docs*) are online at [firebase.com/docs](https://www.firebase.com/docs/). We're looking for the `Web` manual, and a good place to start is the `Step by Step Guide` ([firebase.com/docs/web/guide](https://www.firebase.com/docs/web/guide)). 

We're going to read how to *retrieve* data (point 4).

[![](assets/firebase-child-added.png)](https://www.firebase.com/docs/web/guide/retrieving-data.html#section-event-types)

So, it looks like the function we're looking for is 

```js
on('child_added', doSomething);`
```

which is typically used to retrieve a *list* of items (in our case, a list of `person` objects).

Let's try it out.

> Call `on('child_added'` function from `database` to load a list of items and store each one in `peopleList`:

> ```js
database.on('child_added', function( firebaseObject ) 
{
	var person = firebaseObject.val(); 
  	peopleList.push(person);
})
```

<!--
// load data, see the Firebase manual https://www.firebase.com/docs/web/guide/retrieving-data.html#section-event-types

// "push" is JavaScript's lingo for "add to a list"
-->

The JS code above, in plain English:

* Hey database!

* For each *child* of `database`, do the following steps:

	* Create a variable `person` 
	
	* Call the `.val()` function to extract the value from  `firebaseObject` and store inside `person`  
	  
	* Add `person` to `peopleList` (`push` is JavaScript's lingo for *add to a list*)
	
	* Repeat until you've looped through all the *children*

* Thanks!
 
At this point, we can use the Console to check if `peopleList` has been loaded with data.

<!--
# Recipe for apps

By now, we all should have an idea of the *ingredients* we'll use to create our app prototypes:

* **input interface**, that is *dropdowns*, *text fields*, *buttons* etc.
* a **database** 
* some **filter logic** to sort through our data and make it accessible

### Challenge

How can we use these same *ingredients* to create different apps that serve different purposes? What is the **potential** for apps using these *ingredients*?

With those *ingredients* in mind, come up with an app *recipe*!

1. Brainstorm a few ideas, no matter how whacky they are and jot them down (a few words or a sentence per idea).
* Pick your favourite idea, and consider:

	* What is the **data unit**? 
	
		For example, in our demo app the *data unit* is a person and in the database we're storing people's profiles. If you're making a recipes app, the *data unit* will be a recipe.  

	* What pieces of information will your *data unit* feature? Which one of them will be used to filter & sort through heaps of data? 
	
		For example, in our demo app for each person we're storing `name`, `blurb`, `profile picture`, `likesPets` (which will help us filter data for the *I'd like someone to keep my pet* option), `bakingSkills` (which will help us filter data for the *I'd like someone to bake a cake* option) etc.
-->
	
<!--
# Wireframes

Before they write any code, designers and developers **visualise** their ideas through *wireframes*.

#### Is *this* a wireframe?

![](assets/wireframe-bullshit.jpg)

#### Is *this* a wireframe?

![](assets/not-a-wireframe-example.jpg)

#### Is *this* a wireframe?

![](assets/wireframe-example2.png)

![](assets/wireframe-example.png)

#### Is *this* a wireframe?

![](assets/wireframes-paper.jpg)

#### Wireframes are like maps

Just like a map is an abstraction of a place that helps us describe its location and geography, **wireframes are abstractions** of the **structure** of an interactive system and the **relationships** between its components.

#### Wireframes are tools to **communicate your ideas**.

Depending on what stage your idea is at, your wireframes will be more or less detailed.

In any case, wireframes shouldn't look *finished*.

Paper wireframes get **more feedback** that digital ones, because people are less afraid to touch them, move them around, scribble notes on them. They don't look finished.

####  Wireframes are about **content**, **context** and **interaction**. 

* Use **real content**, never *lorem ipsum*. 
	
* **Words** are key. [Interface design is copywriting](https://gettingreal.37signals.com/ch09_Copywriting_is_Interface_Design.php)
	
* Think about **button labels**, how do you label user actions: is it `Share` or `Post` or `Publish` or `Say it!` or `Broadcast` for instance?  

#### Wireframes are **NOT about style**. 

When wireframing, don't worry about *colours*, *graphics* and *typography*.

### Your turn!

On the paper template, **wireframe three interfaces** and present them:

1. The interface with the **filter criteria** (aka *input section*)
* The interface that **displays the results** coming back from the db (aka *search results section*)
* The interface triggered when people click / tap on a result (aka *single result section*)

You can download more wireframing templates from [Interface Sketch](http://www.interfacesketch.com).

[![](http://www.interfacesketch.com/previews/generic-smartphones.png)](http://www.interfacesketch.com)
-->


### License

[![](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ](http://creativecommons.org/licenses/by-nc-sa/4.0)
