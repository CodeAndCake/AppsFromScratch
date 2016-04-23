# Coding and app-making for beginners 

## Day 2 AM

[Last week](../01) we started building your app's **interface** with HTML and CSS. 

**Today** we'll continue making with HTML and CSS. 

Then we'll introduce the principles of **programming** and start playing with **JavaScript**.

<!--
1. [Workshop](#workshop): HTML & CSS recap.
* [What is **programming**](#programming-vs-coding)?
* Meet **JavaScript** and jQuery. 
-->

<!-- * [Group task](#ux-research): UX research. -->

<!-- No database today -->


## HTML & CSS recap

Different **languages**, separate [**concerns**](http://en.wikipedia.org/wiki/Separation_of_concerns#HTML.2C_CSS.2C_JavaScript).

Think of a group of people working together, eg to make a car, a newspaper, a website, to provide education. What are the different *roles* and *concerns* of these people?

##### **HTML** → content and structure  

##### **CSS** → style and design 

<!--##### 3. **JS** → data and logic-->

### Quiz time!

1. Is this code HTML or CSS?

	```html
	<a href="http://example.com"> Click me! </a>
	```
	
	- [ ] HTML
	- [ ] CSS
* Is this code HTML or CSS?

	```css
	a 
	{
		color: orange;
	}	
	```
	
	- [ ] HTML
	- [ ] CSS		 
* What does this code produce?

	```html
	<a href="http://example.com"> Click me! </a>
	```
	
	- [ ] An apple
	- [ ] A paragraph
	- [ ] A hyperlink
* Where in a `.html` document would you find this code?

	```html
	<link href="style.css" rel="stylesheet">
	```
	
	- [ ] In the `gut`
	- [ ] At the end of the `body`
	- [ ] Inside the `head`	
* What does this code produce?

	```css
	a 
	{
		background-color: orange;
	}
	```	
	
	- [ ] It turns every `a` orange
	- [ ] It turns the text of `a` elements orange
	- [ ] It turns the background of `a` elements orange
	- [ ] It turns the border of `a` elements orange
* What's wrong with this HTML code?

	```html
	<p Good morning coders!</p>
	```
* What's wrong with this HTML code?

	```html
	<p> Good morning coders!<p/>
	```
* Why doesn't this CSS code work? 

	```css
	<p>
	{
		color: red; 
	}
	```     
* Why doesn't this CSS code turn my paragraphs red? 

	```css
	p 
	{ 
		colour: red; 
	}      
	```
* Why doesn't this CSS code turn my paragraphs red? 

	```css
   p 
   { 
    	font-size: 20px 
    	color: red;
   }  
   ```

# Let's code

Go to [thimble.mozilla.org](https://thimble.mozilla.org/) and log in. Then open your project from last week. 

Your app HTML structure is inside `index.html`. 

The CSS style is in another file `style.css` which is linked to the HTML with a `link` inside the `head` in `index.html`.

### Thinking inside the **box**

Imagine that there is an **invisible box** around *every* HTML element. 

Your browser likes to put code into boxes, boxes inside boxes inside boxes inside boxes...

Each HTML box has:

1. `margin` (outside)
* `border`
* `padding` (inside)

![](assets/box-model.gif)

<!-- You can use pesticide.io to demonstrate this -->

## Styling interactive elements

### Dropdown

To style your dropdown, you first need to know how it's called in HTML: `select`

> In `style.css` add a new CSS block

> ```css
select
{
	background-color: red; 
}
```

This will turn your dropdown's **background** red. Go ahead and change that to your favourite colour. 

In Thimble, if you right-click on `red` and then `Quick Edit` a colour picker will pop up. Now you can choose between 16 million colours! You could also make it `transparent`.

![](assets/quick-edit.png)

> Remember how to change the **colour of texts**? It's `color` :us:

> ```css
select
{
	background-color: red; 
	color: white;
}
```

Last week you integrated a font from [Google Fonts](https://www.google.com/fonts) into your app, which turned everything into your chosen font. Or did it? 

The dropdown and buttons are still in the standard browser font.

> How do you **change the font** of your dropdown? It's `font-family`

> ```css
select
{
	background-color: red; 
	color: white;
	font-family: 'Lekton'; /* 'Lekton' is our favourite font, you choose your own from https://www.google.com/fonts */
}
```

Currently the dropdown looks too small and its text is not **comfortable to read**. How do you fix that?

> ```css
select
{
	...
	font-size: 200%;
}
```

> Adjust the `font-size` to suit your app content.

Btw `px` stands for *pixels*, which are the little dots that make up the screen. If you go close enough to your computer screen, you'll start seeing the pixels.

### Button

> Add a new CSS block that targets the `button` 

> ```css
button
{
	border: none;
	background-color: red; 
	cursor: pointer;
}
```

> Change the `color` to match your design. 

It's good practice to style all *interactive* interface elements the same **colour and prominent**.

Now you can apply some of the styles from the dropdown to the `button`. 

> How do you make **rounded corners**? With `border-radius`.

> ```css
button
{
	...
	border-radius: 10px;
}
```

Nice. It looks a bit squished though. We can use `padding` to add some space between the button text and its border.

> ```css
button
{
	...
  	padding: 10px;
}
```

### Button states

As an interactive element, a `button` should respond to user interactions, through its look & feel. 

For example, when you roll over a button, it's good practice for it to change its appearance, acknowledging that *something is happening*.

> Add a new CSS block that targets the `hover` state of your `button` 

> ```css
button:hover
{
	color: black;
}
```

Now when you roll over the button, its text will turn black.

### Smooth transitions

Currently the text colour flashes from the normal state to the `hover` state.

> You can make that transition smooth using the `transition` CSS property

> ```css
button
{
	transition: 0.6s;
}
```

`s` stands for seconds.

## Responsive design

So far we've styled individual elements like `a`, `img`, `select` and `button`. It's time to look at the bigger picture. Our design has a couple of issues:

1. Texts over the background image are not *legible*.
* On large screens, your app looks *odd*. 

To address these, we can add a semi-transparent background that will focus people's attention to where they should read and click.

> Create a new CSS rule for `section` and give it a `background-color`.

> ```css
section 
{
	background: rgba(255,255,255,0.6);
	padding: 20px;
}
```

The CSS above will add a white semi-transparent background to the `section` and a `20px` padding around its content, making it all more *legible*.

It still looks *odd* on large screens though.

> ```css
section 
{
	...
	max-width: 500px;
 		margin: auto;
}
```

`max-width` will limit the `section` width to maximum 500px (roughly the width of a smartphone) and `margin: auto;` will put it in the centre. 


# Coding and app-making for beginners 

## Day 2 PM

## Making a list

So far your interface features **input** elements and some text. 

What about the **output** elements? 

<!--In other words, how your interface would display a **list of results** from the database.-->

It's common practice to **mock up** interfaces with *fake data*, and then hook them up with *real data*.

So, we will mock up a **list** of results (people in our *community skill-swap* app example) using HTML and CSS. In the next weeks we'll learn how to populate that list with real data using JS.

> In `index.html` create an **u**nordered **l**ist `ul` under the `button`

> ```html
<ul>
</ul>
```

> Inside the `ul` create a **l**ist **i**tem `li`

> ```html
<ul>
	<li></li>
</ul>
```

Think about what you want your search results to display. For example we could have an image `img`, a heading `h2` and a short paragraph `p`.

> Inside the `li` put some *placeholder* content. 

>	```html
<ul>
	<li>
		<img src="http://api.randomuser.me/portraits/women/27.jpg">
		<h2>Jo</h2>
		<p>I like coding and coffee</p>
	</li>
	<li>
		<img src="http://api.randomuser.me/portraits/men/33.jpg">
		<h2>Mo</h2>
		<p>I like cats and plants</p>
	</li>
</ul>
```

A couple of list items will give us an idea of how your interface will display search results.

We can now **style** these. 

For example, how can we remove the *bullet points* from the list?

> In `style.css` select the list `ul` and define its style. 

> ```css
ul
{
	list-style: none;
}
``` 

In CSS you can select elements **nested** inside other elements like this

>	```css
li img
{
	width: 50px;
}
```
	
The rule above will select all images `img` inside list items `li`.

Confused? Play [CSS Diner flukeout.github.io](http://flukeout.github.io), an online game that teaches you **CSS selectors**! 

> Go ahead and style the list and its components. 
	
> Remember, if you don't know how to style something, Google may have the answers! 

When you search for a solution online, it's good to start your *search query* with the coding language you're using, like `css`, followed by the problem you are trying to solve or the effect you are trying to achieve. 

For example `css how to round the corners of a button`.


# Coding vs programming

## Do **coding** and **programming** mean the same thing?

* *Coding*: writing code
* *Programming*: designing a list of instructions to get something done (aka **algorithm**) and then coding such instructions

[What's an algorithm?](http://www.bbc.co.uk/guides/z3whpv4#zyfwjxs)

* Computers can code.
* Computers can't program. People can.

#### Programming requires us to **think** in a certain way

Before we learn how to *code* a program, we should learn how to *think* about problems and solutions. 

#### **Computational thinking** 

<!--* Not thinking like computers. Do computers think anyway? -->

* Solving problems for **people** using **code**.
* Breaking down complex ideas into smaller chunks and designing **step-by-step instructions** to tackle each task.

### Robot time!

<!--- Robot: first [reacting](http://worrydream.com/LearnableProgramming/#react) then [abstracting](http://worrydream.com/LearnableProgramming/#abstract) -->

Let's pretend I'm a **robot** and you have to **program me**.

[![](assets/robot.png)](https://thenounproject.com/term/driven/62030/)

* **Mission**: find an object in the room, pick it up

* I only understand these **commands**: 
 
	`walk(steps)`
	
	`turn(degrees)` 
 	
 	`grab(thing)`

* I can listen, but can only answer `yes` or `no`

<!--People usually start by giving you very *specific instructions* (eg: walk 3 steps, turn 45 degrees, walk 2 steps..): **remote-controlling**

We can then make them their code more *abstract* and *flexible* with **logic** and **functions**.
	
(The idea is to engage people with an [easy task](http://pss.sagepub.com/content/early/2012/08/31/0956797612446024.abstract) before we challenge them with a demanding one)-->
	
## Principles of Programming

There are lots of programming languages: JavaScript, Python, C, C++, Objective-C, Swift, Java, Ruby. 

They share the same core principles, and the same **building blocks**: 

1. **Variables** to store data 
* **Functions** to define reusable sets of instructions
* **Logic** to make choices `if this then that`

What variables, functions and logic do you use in your everyday life (even if you don't call them so)?

* **Variables** weather (sunny, cloudy, warm, cold etc), date, location... 
* **Functions** get out of bed, check the weather (on your phone, looking outside), check your calendar, make tea...
* **Logic** `if sunny then wear sunglasses`, `if rainy then take an umbrella`

Think about the [robot game](#robot-time): which variables, functions and logic did we use?

### Programming languages

So far we learned how to build interfaces using **HTML** + **CSS**.

As you've seen your interface, despite being very stylish, doesn't do much (yet).

To set things in motion, to have a truly interactive experience, we need another language: **JavaScript**.

##### **HTML** → content and structure  

##### **CSS** → style and design 

##### **JS** → behaviour and logic

HTML and CSS are coding languages.

JavaScript is a programming language (together with PHP, Python, Ruby, Java and many others).

### Meet JS 

**JavaScript lives in every browser**. You don't need to install anything, it's already there.

We'll use the [**JavaScript Console**](http://webmasters.stackexchange.com/a/77337) to learn with a few basic JS tricks.

> Open your browser JavaScript Console by pressing <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>J</kbd>.

> ![](assets/console.png)

We don't normally write JS in the Console. Instead, we write our JS programs in a code editor like Thimble (or [Sublime](http://www.sublimetext.com), [Brackets](http://brackets.io) etc) and store them as `.js` files. 

The Console is an essential **testing tool** for people who write JavaScript. Why do we need it? Because JS is *invisible*.

When we write HTML and CSS, we can see the results of our code rendered by the browser. 

**JS instead doesn't show up on the page**! It does a lot of stuff behind the scenes (like loading, sorting, storing and comparing data) which we can't see. 

Yet, it is very useful when writing JS, to check that our code is running properly, that it doesn't have errors, and that it has all the data it needs at the right time.

Using the Console, we can make JS *visible*. In other words, we can get JS to leave some *traces* inside the Console.

Using the Console is like having a chat with your browser. As long as you talk JS, the browser will talk back to you.

```javascript
hello
	Uncaught ReferenceError: hello is not defined
"hello"
	"hello"
```

Notice the difference between words with **speech marks** (the browser interprets them as *strings* and just parrots them) and words without speech marks... 

#### Variables

```javascript	
var greeting = "hello"
	undefined
greeting
	"hello"
greeting = "hej"
	"hej"
greeting
	"hej"
```

You can use **variables** to get the browser to remember things.

#### Functions

The browser can perform certain *actions* natively, like humans can natively breath.

```javascript	
alert("ciao")
	undefined
alert(greeting)
	undefined
prompt("How do you say hello in your language?")
	"ciao"
var userName = prompt("What's your name?")
	undefined
var userAge = prompt("How old are you?")
	undefined
```

These actions are called **functions**.

Functions are useful to **make code reusable**.

You can also teach the browser how to do stuff, by **defining your own functions**
	
#### Objects	
	
```javascript	
cat
	Uncaught ReferenceError: cat is not defined
var cat = {}
	undefined
cat.name = "Bill"
	"Bill"
cat
	Object {name: "Bill"}
cat.favouriteDrink = "herbal tea"
	"herbal tea"
```

**Objects** are useful to keep things organised.

If a *variable* is like a *jar* that contains one thing, an *object* is like a *fridge* which stores many things in a more/less organised way.

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
cat.drink(cat.favouriteDrink)
	undefined	
```

You can add pretty much anything to objects, including functions.

You can see how functions **make code reusable**. For instance, the action of *drinking* remains the same, no matter what you are drinking.

Now that you're familiar with the basic building blocks of JS ([variables](#variables), [functions](#functions) and [objects](#objects)), keep in mind that the Console is the **most useful tool** when you develop JS code and you want to quickly test it. Every JS developer uses it, every day!

<!--

### Meet the database

So far you have stored and manipulated *data* in your browser. 

However, this is not a scalable solution. What if your **data grows bigger** than the average browser memory? What if you want more people to access that data at **the same time**? What if your app needs to store **confidential information**? What if your app needs to do heavy **data crunching** and you can't rely on the average browser power?

For all those reasons, using a database is part of the solution.

#### Firebase

We're going to use a cloud-based real-time database service called [Firebase](https://www.firebase.com). There are several other solutions, including building your own database, however we chose Firebase because of its performance, features and good documentation. 

Many companies use Firebase to rapidly prototype app ideas, without investing time and money on database infrastructure and software.

Let's learn how Firebase works, before you integrate it into your app: using Chrome, go to [bit.ly/firebaseChat](https://d157rqmxrxj6ey.cloudfront.net/baddeo/31051/) and follow the instructions :)

[![](assets/firebase-challenge.jpg)](https://d157rqmxrxj6ey.cloudfront.net/baddeo/31051/)

-->

<!-- Open your browser JavaScript Console by pressing <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>J</kbd>. -->


> Over the next week, play [JS for cats jsforcats.com](http://jsforcats.com/) 

> It's an introduction to JavaScript "...so easy your human companion could do it too!" :scream_cat:

> [![](https://github.com/CodeAndCake/guides/raw/master/assets/js-for-cats.jpg)](http://jsforcats.com/)


### License

[![](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ](http://creativecommons.org/licenses/by-nc-sa/4.0)
