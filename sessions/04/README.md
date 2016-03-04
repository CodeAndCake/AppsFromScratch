### The plan!

AM: 

- **0.5 hour** [Matteo]

	Recap: 
	
	* Spot *variables* and *objects* and *functions* in your code from last week
	* Read through the code line by line, ask them to write comments so that they have an English "translation" of the JS they wrote 
	* Explain Firebase ready-made functions, like `.on()` and `.val()`, and *events* like `child_added` (RTFM)
	
	* PRACTICE Use `database` to send data to the `demo-app` db via *Console*:
 
	```javascript
	var person = {
		name: "YOUR NAME",
	  	about: "A BLURB ABOUT YOU",
	  	bakingSkills: 5, // from 0 to 5
	  	bodyStrength: 3, // from 0 to 5
	  	diySkills: 4, // from 0 to 5
	  	image: "http://api.randomuser.me/portraits/women/27.jpg", 
	  	likesPets: true // true or false
	}
	database.push(person);
	```
	
	What is an API? http://qr.ae/RUOovV
	
- **1 hour** [Aimee]

	CSS selectors for `class` and `id` 
	
	```css
	.text-centred	
	{
		text-align: center;
	}
	.clickable
	{
		cursor: pointer;
	}
	```
	
	Mention **indentation**. It's not OCD. It's actually really useful to have tidy code, makes it easier to read and spot mistakes (such as missing brackets, one of the most common beginner mistakes).
	
	Then make a list with some placeholder items and style it (in the afternoon we'll show you how to populate that list with actual data from `database` using JS). This is industry-standard practice.
	
PM:	

- **0.5 hour** [Yuki]

	*Don't reinvent the wheel*: introduce **coding libraries**, talk about them but we don't need to use them (jQuery, Backbone, P5.js, D3.js, Aframe for VR etc.)

	- [ ] Intro: why are libraries useful?
	- [ ] Demo: JS with and without jQuery (Yuki)
	- [ ] For each library we talk about: main purpose companies who use it, cool examples
	
<!-- 
Material to look at 

* https://github.com/RavensbourneWebMedia/Web-development-workshop/blob/2015/sessions/week-10.md#meet-jquery 
* http://jqfundamentals.com/chapter/jquery-basics
-->
	
- **1 hour** [Matteo and Aimee]

	How to use jQuery: 
	
	1. select, eg: `$('ul')` 
	* call functions on your selection, like `.append("<p>hi</p>")`
	* explain joining strings, eg: `"<li>" + data.name + "</li>"`

	 Challenge: display the data loaded from `database` in the `ul`
	 
	 Extra challenge for the fast ones: animations on how the list appears ([animate.css](https://daneden.github.io/animate.css/))
	
	- [ ] create step-by-step guide

<!-- 	 	
- **1 hour** 

	jQuery to display data from `database`
	
-->

<!--- **1.5 hour** 

	On your own / with your group: create your own Firebase app and using the technique we demoed (above), push data to your own db.
 	
	Even if you're working on the same idea as a group, it's in your interest to build your individual db on Firebase and your individual prototype on Thimble (so you'll end up with several variations of the same idea).
	
	- [ ] create step-by-step guide for setting up a Firebase thingy
	- [ ] some guidance on how to design a database (what is the *unit* of data, what are the *properties* that will be filterable, what other properties would be nice to have)

-->


<!--
<link href="fuck.css">

<img src="fuck.jpg">

<script src="fuck.js"></script>
 
why the fuck?
-->

<!-- 
**Not another demo**: give them written instructions to integrate code at their own pace (life of a programmer)
	
	- add jQuery to `head`
	- create new JS file with function that returns selected dropdown's option
	- call that function when you click the button! 
	- [ ] bonus challenge?	
-->


# Coding and app-making for beginners 

## Day 4

If you haven't already, **sign up for a Firebase account** at [firebase.com](https://www.firebase.com/). Then copy-paste your *username / email* into the [bit.ly/copyPasteCodeYourApp](https://bit.ly/copyPasteCodeYourApp).

[Last week](../03) you learned how to use **JS** to connect your app to an online **database**, load **data** and store it in your app's memory.

You also started **wireframing** different app *recipes* using the same basic *ingredients*: interface inputs, a database and some filtering logic.

**Today** we'll begin by recapping your JS code which *loads* data from Firebase, and we'll learn how to *upload* new data to Firebase.

We'll also introduce two magic words that you'll sprinkle across HTML, CSS and JS: `class` and `id`!

Then you'll start using **jQuery**, one of the most popular JS *libraries* (that is, collections of code to accomplish common programming tasks, generally free) to display data from Firebase in your app's interface. 


# JavaScript recap

Go to [thimble.mozilla.org](https://thimble.mozilla.org/) and log in. Then open your project from last week. 

<!--### Spot the usual suspects-->

In `app.js` can you spot *variables*, *objects* and *functions*?

### Commenting your code to make sense of it

Let's read through your JS code line by line, and write comments so that you have an English *translation* of the JS you wrote. 

In JS you can write a comment using double-slash `//`

```javascript
// this is a JavaScript comment
var databaseURL = 'https://appsfromscratch.firebaseio.com/demo-app'
``` 

Translating JS into your own plain-English comments will help you make sense of your code. Even after years of JS development, and despite English not being our mother tongue, we find reading English much easier than JS :)

### Firebase said so

When using a service like Firebase, we need to follow some of *their* rules and conventions, which are all explained in their code *manual*, aka the **docs**: [firebase.com/docs](https://www.firebase.com/docs)

For example, Firebase provides us with a `.val()` function to extract data *objects* from what they call a `child`.

It wouldn't work if we tried a different function name, like `.value()` or `giveMeTheData()`.

**A large part of a coder's work is reading docs** (or if you're like us, *skimming through* them) to learn how the services you are using are meant to be handled. This is no different than a plumber reading a boiler's manual before she works on it. 

> Remember: you are not expected to know how everything works! 

Instead of stuffing your head with specific code instructions, you can learn how to quickly find what you need in the docs, and apply it to your code. 

What often determines the success of a tech startup like Firebase is how their code is documented. If it has good docs, then more developers are going to use it.

#### Your turn

Let's see if you can find out how to upload new data to a Firebase database. 

In particular, we want to add an *object* to our existing *list* of people at `https://appsfromscratch.firebaseio.com/demo-app`. 

The *object* looks like this:

```javascript
var person = {
	name: "YOUR NAME",
  	about: "A BLURB ABOUT YOURSELF",
  	bakingSkills: 5, // from 0 to 5
  	bodyStrength: 3, // from 0 to 5
  	diySkills: 4, // from 0 to 5
  	image: "http://api.randomuser.me/portraits/women/27.jpg", 
  	likesPets: true // true or false
}
```

Open the Firebase docs 	[firebase.com/docs](https://www.firebase.com/docs) and see if you can find **which function** you need.

You can use your browser Console (open it on your Thimble app window) to try out different solutions. 

```js
database.
// Complete the line above... 
// Which Firebase function goes after the dot?
```

Don't worry, you won't break anything!

<!-- https://www.firebase.com/docs/web/guide/saving-data.html -->


# Be specific!

So far in your CSS experiments you changed the look & feel of the different parts of your HTML. 

You *selected* headings using `h1`, paragraphs  with `p`, buttons with `button` and dropdowns with `select`.

In your CSS file, you can see something like this:

```css
p 
{
	color: #25008c;
	font-size: 20px;
	text-align: center;
	/* this is a CSS comment */
}
```

The block of CSS code inside curly brackets `{}` applies to every paragraph `p` in your HTML file. 

### `class` attribute

Targeting your elements by simply using their name (like `p`, `h1` and so on) has worked fine up until now.

But... 

* What if you want to apply different styles to different paragraphs `p`?
* What if some of the same styles are applied to several elements, and you find you're repeating yourself?

<!--You can use `class` to target your elements more specifically and create different appearances for the same *type* of element.--> 

In HTML you can use `class` to *classify* your elements, and in CSS you can target those elements to give them different styles. 

In your HTML opening tags, add in `class="  "` with your own class names inside the `" "`. You can **add as many classes as you want**, separated by a space:

```html
<p class="text-centered special-text" > Swap skills or time with people in your area </p>
<p class="text-centered" > Just pick an option from the dropdown to get started </p>
``` 

Above, there are two classes added to the first `p` - `text-centred` and `special-text`.

You could call them whatever you like: **class names are entirely up to you**. However, it makes sense to give them descriptive short names.

In CSS, target these classes using a dot `.` before the class name, like so:

```css
.text-centred
{
	text-align: center;
}

.special-text
{
	color: pink;
}
```

Now you can use `text-centred` to centre other elements instead of having to create or add the style `text-align: center;` to every single element you want centred. 

```html
<h1 class="text-centred">I'd like someone to...</h1>
```

Likewise the second class `special-text` can be used to turn the text inside any element pink.

Classes are useful for **shared rules**.

### `id` attribute

Whilst classes are used for shared rules, sometimes it's important to **get super, super specific**!

Adding an `id` is like giving an element a name of its own. 

For example, if `animal` were an HTML element, you could write something like this:

```html
<animal class="mammal dog" id="Sparky" > </animal>
<animal class="mammal cat" id="Bruno" > </animal>
```

As you can see, the two `animals` share a class `mammal` and have other, more specific classes: `dog` and `cat`. Their **unique** name is inside the `id` attribute.

<!--In the dog world, a dog is the `element`, its `class` could be dalmatian and it's `id` could be Sparky.-->

Giving an element a unique `id` allows you to style it differently from any other instances of the same element on the page. It is important that no two elements on the same HTML have the same `id`. In other words, `id` must be unique. 

```html
<p class="text-centered" id="instructions" > Just pick an option from the dropdown to get started </p>
```

In CSS, target ids using a hash `#` before the id name, like so:

```css
#instructions
{
	color: black;
}
```

Ids are the most powerful CSS selectors: the styles you apply to them override all other styles.


# Indent it

One of the most common beginner mistakes is missing brackets.

How do you make it easier to read your code and spot such mistakes? 

With **indentation**!

Use the <kbd>tab</kbd> key (to the left of the letter <kbd>Q</kbd> on your keyboard) to push lines of code inwards for tidy, legible code.

Compare the two examples of HTML below. Which is easier to read?

```html
	<body>
<h1>Short title</h1>
<p>In this example, we have a relatively long paragraph. With longer content inside our element, we want to make it as easy as possible to differentiate between our code and our content. If we don't indent our code, you can see how it becomes harder to spot where our p element starts and where it ends.</p>
<p>Indentation is also useful to spot errors in our code such as missing brackets or unclosed tags.</p><p>A good practice is to have both the opening and closing tags of the element aligned, with the inner content indented on a new line.</p></body>
```

```html
<body>
	<h1>Short title</h1>
	<p>
		In this example, we have a relatively long paragraph. With longer content inside our element, we want to make it as easy as possible to differentiate between our code and our content. If we don't indent our code, you can see how it becomes harder to spot where our p element starts and where it ends.
	</p>
	<p>
		Indentation is also useful to spot errors in our code such as missing brackets or unclosed tags.
	</p>
	<p>
		A good practice is to have both the opening and closing tags of the element aligned, with the content indented on a new line.
	</p>
</body>	
```

In CSS, the *best practices* are much debated. On the whole, it's essential to open and close your brackets `{}`, then inside them on a new line, place your *indented* styles like so:

```css
.text-centred {
	text-align: center;
}
```

Or so:

```css
.text-centred
{
	text-align: center;
}
```

How **NOT** to do it:

```css
.text-centred{text-align: center;}
```

If your code is not indented, it can be *really easy* to miss out a bracket or semi-colon, then spend half an hour trying to figure out why the page is broken!

There is no right or wrong way, use whichever way you find more comfortable to read.


# Making a list

So far your interface features only **input** elements and some text. 

Last week, you started *wireframing* how the **output** elements could look. In other words, how your interface would display a **list of results** from the database.

It's common practice to *mock up* interfaces with *placeholder data*, and then hook them up with *real data*.

So this is what we'll do:

1. Before lunch, mock up a list of results with HTML and CSS
* After lunch, learn how to use JS to display real data inside that list. 

<!-- Last week, you created an empty list `peopleList = []` in JavaScript. Using the Firebase function `val()`, you stored each child's data inside a variable `personData` and then pushed (or stored) them into the empty `peopleList`. 

Next, you'll get to know lists in HTML. This is where your users search results will be displayed. The search results will contain data from `peopleList`. -->

#### Your turn

<!--Create a list with some placeholder items and style them.-->

1. Create an unordered list, aka `ul`

	```html
	<ul>
	</ul>
	```
* Create some empty list items `li` inside your `ul`

	```html
	<ul>
		<li></li>
		<li></li>
	</ul>
	```
* Put some placeholder content inside your list - think about what you want your search results to display. In this example we've added an image `img`, a heading `h2` and a short paragraph `p`.


	```html
	<ul>
		<li>
			<img src="">
	        <h2>Jo</h2>
	        <p>I like coding and coffee</p>
		</li>
		<li>
			<img src="">
	        <h2>Mo</h2>
	        <p>I like cats and plants</p>
		</li>
	</ul>
	```
* Style your list by targeting the elements in CSS. As we discussed earlier, you can do this by adding classes for similar items. For example:

	```html
	<ul>
		<li>
			<img class="thumbnail" src="">
	        <h2>Jo</h2>
	        <p class="short-blurb">I like coding and coffee</p>
		</li>
		<li>
			<img class="thumbnail" src="">
	        <h2>Mo</h2>
	        <p class="short-blurb">I like cats and plants</p>
		</li>
	</ul>
	```

	How would you target that class in your CSS?
	
	```css
	.thumbnail
	{
		width: 50px;
	}
	```

	In CSS, there's another way to target elements **nested** inside other elements:


	```css
	li img
	{
		width: 50px;
	}
	```
	
	Here, the rule is for all images `img` inside list items `li`.
	
	Remember, if you don't know how to style your element, Google may have the answers!



<!--

1. [Questions](#questions) about computers, people and the **interfaces** in between
* [Wireframing](#wireframing) (*user* interfaces)
* [Prototyping with code](#prototyping-with-code) (*programming* interfaces)


# Questions

### How much do you need to know about a **car**, in order to **drive** it?

In most cases, you just need to know what pedals to push, what levers to operate, what buttons to press and what knobs to turn.

In other words, you can drive a car just by knowing how to use its **interface**.

### How much do you need to know about a **computer program**, in order to **code** it?

You do not always need to know how a script or program works, as long as you know:

1. How to **ask** it do do something
* How to process its **response** 

In other words, you can code a computer program if you know how to use its **interface**.

### Have you heard of APIs before?

[**A**pplication **P**rogramming **I**nterface](https://en.wikipedia.org/wiki/Application_programming_interface).

An API **exposes** parts of a system and **determines** how we (programmers) can interact with them to accomplish our (programming) goals. 

### The parts of a system which are *programmable* have an API 

An API tells us *which* parts of a system are exposed, and *how* we are allowed to tinker with them. 

A **programming language** can be understood as an API, in the sense that it's the tool between us and programming a computer. 

-->
<!--
# Wireframing

1. See what's out there
* Wireframe your app idea 
* Review it with class

### Before you design a {XYZ}, you may want to see how others are doing it.

Pick 3 apps that are relevant to your app idea (inspiring interfaces, similar business model etc.) and discuss them with your group.

You can take inspiration from [useronboard.com](http://www.useronboard.com/onboarding-teardowns/).

### Wireframing with the user in mind

Your wireframes shouldn't present *features*. They should tell a *story*.

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
-->


<!--
# Session 4



# Example of JS Library


[http://threejs.org/](http://threejs.org/)   
http://pixijs.github.io/examples/   
http://greensock.com/products/   

http://auduno.github.io/clmtrackr/examples/clm_emotiondetection.html

audio form 
http://airtightinteractive.com/demos/js/reactive/
http://googlechrome.github.io/web-audio-samples/samples/audio/visualizer-live.html


What is Library and what is frame work?


Also https://unity3d.com/

Also https://developer.leapmotion.com/




Key questions: 

* What does your app do? 
* How do you *test* it?

### AM

* [Impact mapping](#impact-mapping)
* [User stories](#user-stories)
* [Your (user) stories](#your-stories)

### PM

* [Wireframing](#wireframes)
* [Rapid prototyping](#rapid-prototyping)





# Impact mapping

As developers, we tend to focus (or get bogged down) on features.

But in order for your idea to succeed, you have to step back and make sure that you think not about the features but about the **impacts** of the software that affects people's behaviour.

Impact mapping is a way of visualising connections between *goals*, relevant people called *actors*, the impacts to their behaviours, and the *features* of the product called *deliverables*.

> Maximum impact by minimum software

[Watch this video](https://www.youtube.com/watch?v=RznIi2WkJb0)


[Impact mapping](http://impactmapping.org/drawing.php)
 is a **strategic planning technique**.

An impact map is a visualisation of scope and underlying assumptions, created **collaboratively**. 

![](assets/map.png)

It is a **mind-map** grown during a discussion facilitated by answering the following four questions:

#### Why?

The centre of an impact map answers the most important question: **Why are we doing this?** This is the **goal** we are trying to achieve.

#### Who?

The first branch of an impact map provides answers to the following questions: Who can **produce** the desired effect? Who can **obstruct** it? Who are the **users** of our product? Who will be **impacted** by it? These are the **actors** who can influence the outcome.

#### How?

The second branch level of an impact map sets the actors in the perspective of our business goal. It answers the following questions: **How should our actors' behaviour change?** How can they help us to achieve the goal? How can they obstruct or prevent us from succeeding? These are the impacts that we're trying to create.

#### What?

Once we have the first three questions answered, we can talk about scope. The third branch level of an impact map answers the following question: What can we do, as an organisation or a delivery team, to support the required impacts? These are the **deliverables**, software **features** and organisational **activities**.

![](assets/im_example.png)

### All together now

Go to [GoConqr](https://www.goconqr.com/) and sign up.

In pairs, create an impact map for your product / app idea.
 


# User stories

Have you ever heard of [**BDD** *behaviour-driven development*](http://en.wikipedia.org/wiki/Behavior-driven_development)?

BDD uses the specification of **desired behaviour** as a *ubiquitous language* for all project team members. 

A ubiquitous language is a (semi-)formal language that is shared by all members of a team as a common means of discussing the domain of the project in question.

### What are user stories?

Plain English sentences that **describe the basic units of functionality** of your product.

Useful to:

* state **product requirements** without writing endless pages of documentation
* have a **checklist** for software development 
* not depended on the whims of a stakeholder 
* get *everyone on the same page*

![](assets/dilbert-userstories.jpg)

In one sentence, a user story encapsulates

* **Who** is this functionality for?
* **What** does s/he want?
* **When** does s/he want it?  
* **Why** is it valuable to the her?


> Who are we?
![](assets/who-are-we.png)

> What do we want?
![](assets/who-are-we.png)

> When do we want it?
![](assets/who-are-we.png)

> Why?
![](assets/who-are-we.png)


### The actual format

As a `who?`, I want to `what?`, so that `why?` [`when`]

#### Examples

* As `an administrator`, I want to `search for my customers by their first and last names`, so that `I quickly find specific people to contact`.
* As `a user`, when `closing the application`, I want to `be prompted to save anything that has changed since the last save` so that `I don't lose work`.
* As `a student`, I want to `find my grades online` so that `I don't have to wait until the next day to know whether I passed`.
* As `a book shopper`, I want to `read reviews of a selected book` to `help me decide whether to buy it`.
* As `an author`, I want `the spell checker to ignore words with numbers` so that `only truly misspelled words are indicated`.

### How do you write user stories?

1. Brainstorm and jot down **actors** in the **system**, eg: visitor, potential customer, new customer, customer, system admin, developer, content editor
* For each actor, jot down **actions** s/he may want to do, eg: read about the service, get contact details, find info about opening times.. 
* For each action think about `before I do that, I need to` chains.
* Separate actions between **tasks** (intermediate in a chain) and **goals** (end of chain) 
* Map actions to actors (one action could be assigned to more than one actor)
* Write a user story for each action assigned to a actor, from the actor's perspective.
* **WHO and WHAT are required**, WHY and WHEN are optional
* Organise actions that the system **must / could / shouldn't** allows actors to do


### Your stories

1. Open [**this spreadsheet**](https://docs.google.com/spreadsheets/d/186THtFpf1sIfaWMRGbU6hfNBfKwcJQeFxP255E4wZK4/edit?usp=sharing)
2. Duplicate the `_blank` sheet and give it your name
3. Jot down stories following the [steps above](#how-do-you write-user-stories)





### BDD
 
1. In order to [benefit]
2. As a [Role]
3. I want [feature]


An example with BBC website:

1. As a user of BBC website
2. I want to have a web page for every TV brand of the BBC
3. So that I can get all the information about my favourite Brand




# Wireframes

Is *this* a wireframe?

![](assets/wireframe-example.png)

Is *this* a wireframe?

![](assets/not-a-wireframe-example.jpg)

Is *this* a wireframe?

![](assets/wireframe-bullshit.jpg)

Just like a map is an abstraction of a place that helps us describe its location and geography, **wireframes are abstractions** of the **structure** of an interactive system and the **relationships** between its components.

* Wireframes are about **communicating your ideas**.

* They are about **content**, **context** and **interaction**. 

	Use **real content**, not *lorem ipsum*. 
	
	**Words** are key. [Interface design is copywriting](https://gettingreal.37signals.com/ch09_Copywriting_is_Interface_Design.php)
	
	Think about **button labels**, how do you label user actions: is it `Share` or `Post` or `Publish` or `Say it!` or `Broadcast` for instance?  

* They're **NOT about style**. 

	When wireframing, don't worry about *colours*, *graphics* and *typography*. 



### Wireframes *with code*

> Standing on the shoulders of giants...

or

> Don't reinvent the wheel

Meet [Bootstrap](http://getbootstrap.com/), a framework to build mobile-first Web-apps and sites. It comes with a set of common *building blocks* to quickly put together interfaces

[![](assets/bootstrap.png)](http://getbootstrap.com/)

[Divshot](https://architect.divshot.com/) and [Jetstrap](https://jetstrap.com/) are drag&drop interface builders based on Bootstrap, which you can use to make clickable wireframes.



### Wireframes *sans code* 

Using [Moqups](https://moqups.com/)

[![](assets/moqups.gif)](https://moqups.com)




# Rapid prototyping

In an *iterative* approach to design, rapid prototyping is the process of **quickly mocking up the future state of a system** and validating it with users, stakeholders, developers and designers. 

![](assets/prototype-review-refine.jpg)

Doing this **rapidly and iteratively** ensures that you're moving in the right direction, and lets you quickly **share** that direction.

### What is a prototype?

* Prototypes **answer questions** (the more specific the better). Establish a **clear purpose** for each prototype you make.

* Prototypes stand between your ideas (**assumptions**) and your users (**behaviours**).

* Prototypes should be **quick** (and cheap) to make, re-make and possibly discard.

* Prototypes should be **close** to the real thing. 

### Do

1. **Work collaboratively** with users, teammates and stakeholders while prototyping. Apart from giving valuable feedback, they also gain a sense of **ownership** of the final product.
* When creating interactive high-fidelity prototypes and simulations, build in **realistic delays** (for instance, for screen refreshing or moving through steps of a transaction), so that users do not expect instant response times from the final product.
* Avoid *prototype creep* by **setting expectations** for the process, including ones affecting the purpose, fidelity, scope and duration. Remind everyone, including yourself, that rapid prototyping is a **means to an end**, not an end in itself.
* Begin every prototype review session with the disclaimer that **this is just a prototype**, a mock-up, not the actual solution. This reminds users that this is a **work in progress**, it encourages feedback, and in the case of high-fidelity prototypes, it prevents users from mistaking it for a working solution.

**Reuse, reuse, reuse**. For computer-based prototyping, this means saving reusable templates, stencils, patterns and widgets for future projects.

### Don't

1. **Don't be a perfectionist**. In most cases, rapid prototyping does not have to be 100% perfect, just **good enough** to give everyone a common understanding.
* **Don't prototype everything**. Most of the time, you shouldn't have to. A good rule of thumb is to focus on the **20% of the functionality that will be used 80% of the time**, key functionality that will be used most often. 
* Don't take every change or request that comes out of a prototype review as a new requirement. Rapid prototyping helps capture missed requirements, but these new requirements should be evaluated carefully. Some may be implemented, while others are pushed to a future release.
* Don't begin prototype review sessions without **clear guidelines for feedback**. Be very specific about the type of feedback you are looking for. `Are the steps logically arranged? Is the navigation clear and intuitive?` If not, be prepared for `I don't like the blue in the header` or `Can't we use this font instead?` or `Can you make this bigger, bolder, in red and flashing?`


Don't prototype features or functionality that cannot be implemented. When in doubt, confirm with developers before starting.




### Which tools?

Each prototyping tool has its own feature set and strengths. Based on your needs and the requirements of your project(s), evaluate which tool would be most appropriate:

1. How **easy** is it to learn and use the tool?
* Are there a repositories of **reusable templates** or widgets available?
* How easy is it to make changes on the fly or to **incorporate feedback**?
* Does it have any **collaboration features**, such as allowing multiple people to work on it at the same time?
* What are the licensing terms and **costs**?

[![Illustration by Larry Buchanan](assets/prototyping-tools.png)](http://larrybuch.com)


##### Tools to consider

* [Sketch](http://www.bohemiancoding.com/sketch/) [Mac only]
* [OmniGraffle](#https://www.omnigroup.com/omnigraffle) [Mac only]
* [Axure](http://www.axure.com) [Mac and Win]
* [Balsamiq](https://balsamiq.com/products/mockups) [Mac and Win]
* [Adobe Muse](http://muse.adobe.com) [Mac and Win]
* [Justinmind](http://www.justinmind.com) [Mac and Win]
* Photoshop and Illustrator [Mac and Win], check out [Web Zap](http://webzap.uiparade.com)
* [Framer](http://framerjs.com)  [Mac only] for slick animations
* [Blocs](http://blocsapp.com) [Mac only] interface builder for Bootstrap
* [Divshot](https://divshot.com/features), online interface builder for Bootstrap




### Your turn

Using [Invision](http://invisionapp.com), let's start prototyping two user flows:

* *onboarding* process (everybody should have that)
* a problematic scenario, aka *edge case* or *unhappy path* (of your choice, depending on gaps you have identified in your user stories)

Produce prototypes that address [your user stories](#your-stories).

-->


### License

[![](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ](http://creativecommons.org/licenses/by-nc-sa/4.0)