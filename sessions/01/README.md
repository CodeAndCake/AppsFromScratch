<!--

* !important manage expectations, eg: How long does it take to make an app (show some examples from apps we made, like MeBooks.. and then Pinboard.in)? This course is 3 days.. what can we do with this time?
* 4 blocks of tables for 4 teams (ish)
* smaller group discussions (with post-its and markers) and the "report" to the larger group
* explain prototyping tools like Firebase

-->

# Coding and app-making for beginners

<!-- 
### Hands up if you...

* Have made an app before
* Have used an app before
* Have tried to learn code before

is this useful? 
-->

### **How long** does it take to make an **app**?

This course is 24 hours long, ie **3 working days**.

The point of this course is to *introduce* you to the app-making **process** and **tools**

* **Thimble**: free online code editor, live preview
* **Firebase**: real-time database, excellent for prototyping
* **HTML**, **CSS** and **JavaScript**: universal languages, entry point to more specialised ones (and useful to know for other jobs!)
* **GitHub repository**: industry-standard collaborative version-control system

In 3 days we may not get an app on the App Store, but don't lose heart. 

In 3 days you will **get started** with design and code and by the end you will:

* have a solid foundation to continue learning
* have first-hand experience of the design and development process
* feel confident speaking about your ideas with other designers, developers and product managers



<!---->


This course is about getting **creative** with **code**.

Getting familiar with how coders work day to day, and experiencing the **design and development process** first-hand. How to take an idea from zero to working prototype. 

For many of you, this will be a **memorable day**. You'll write your **first line of code**, and in a few weeks you'll have made **your own app**, from scratch!

We're going to show you the **basics** and together we'll create an app **template** that you can then customise. The app template will connect to an online database to load data, and manipulate it in response to user inputs. 

Using **HTML**, **CSS** and **JavaScript**!

This is an introductory course, inevitably there are parts of the process that we won't cover (such as how to market your app or package it for a specific market).

It's going to be **challenging** and we want to make sure that you also have **fun**!
 
We're not here to talk at you, but to work with you and we want you to **work together** and help each other.

### Two words about ourselves

- **Yuki**: studied art, now develops software at [The Mill](http://www.themill.com) a post-production, visual effects and animation company (working on films like The Gladiator). He's designing and building software that makes work easier and more efficient for the team.

- **Matteo** studied graphic design. He built social platforms and educational games for the BBC, Science Museum and now teaches at Ravensbourne.  

- **Aimee** studied fashion design, makes clothes and websites. She is the *jargon buster*, the bridge between beginners and professional coders.

**No computer scientists**, we all learned code by ourselves through experimenting and tinkering, 

We want to show you that it's easy to get started and anyone can give it a go!


### Introduce each other

We want this course to be **informal** and relaxed, so if you have any questions at any time just ask. We're also going to ask you many **questions**!

We'd like you to introduce yourself to your neighbour. Then we'll ask you to introduce each other to the rest of the group.

1. A bit about yourself
* Why are you on this course?
* What is your experience with coding so far?

You can jot down the answers on post-its and we'll then stick them on the wall...

<!-- make sure we ask questions to the people that are being introduced! -->


### When is lunch?

Research shows that people focus much better when they know what time they're going to eat..

So, we will have **lunch break** at around 12:00 for 1 hour, aiming to wrap up by 3pm.



# Roadmap

### Week 1

* Get to know each other
* Discuss: what is an app, how do we use them, how do we start building one?
* Introduction to HTML and CSS: create your app home screen

<!--Setting the foundations: getting familiar with code (introducing two languages, **HTML & CSS**) and learning how to code the layout for an app.

Key questions: 

* What is *code*? 
* How do you learn to code?-->

### Week 2

* Work together to generate, spec out and test your ideas
* UX research: interview people (aka users)
* Introduction to JavaScript: connect your app to an online database

<!--Stepping up a notch: set things in motion (introducing **JavaScript**) and learning how to use data from the Web in your code.

Key questions: 

* Where is *data*? 
* How do you harness is?-->

### Week 3

* Interface design: sketch out your app’s pages
* Learn how to use digital wireframing tools
* Mark up your wireframes with HTML and CSS
 
<!--Learning how to visualise your ideas, sketch out possible solutions (introducing the **wireframing** method) and start a conversation with your team.

Key questions:
 
* What is an *app*? 
* How do you design one?-->

### Week 4

* Review your wireframes collaboratively
* JavaScript: learn about variables, functions and loops
* Code your app with JavaScript

<!--Translating your wireframes into code: how to quickly **prototype and test** your app. Introducing *behaviour-driven-development*.

Key questions: 

* What does your app do? 
* How do you *test* it?-->

### Week 5

* Make!
* Test!
* Tweak! Repeat...

<!--Polishing up and presenting your prototypes.

Key questions: 

* What is your app value? 
* How do you communicate it?-->

### Week 6

* Finalise  and present your app prototype
* Celebrate your achievements!
* Take away resources to continue on your app-making journey


### GitHub

All the course material is here: 
[**github.com/CodeAndCake/AppsFromScratch**](https://github.com/CodeAndCake/AppsFromScratch) 

Including notes from each session, exercises, sample code, presentations and links to learn more!







# What is an app?

Let's sketch a **working definition** of *app*.

How do you explain what an app is to someone or something who's never seen/used one, like an *alien*?

<!--![](assets/et.png)-->

Pretending one of us is the *alien*, let's ask some obvious questions. If people answer with jargon (eg: *software* or *download*) then we ask them to expand on their meaning.

* **Where** do you find apps?
* Can you buy apps? Who sells them?
* **Who makes** apps?
* **Who uses** apps? Why?
* What does an app **look like**?  
* How do you **interact** with an app? Do you speak into your phone, do you shake it etc?
* What are apps useful for? How do they **serve** people who *download* them?
* **How often** do people use apps? Would you download an app if you need it only once or twice?

There is no clear-cut definition of *app*.

For the sake of this course, we like to think of apps as **small digital tools** that are connected to the Web.

To use an analogy, if a website is like a *book*, which you use to find and consume information, an app is closer to a *whisk*, which you use to make something with.

<!--![](http://www.issip.org/wp-content/uploads/2014/10/Depositphotos_17177253_original1.jpg)-->

![](assets/whisk.png)

Apps generally have a specific function, or a small set of functions. They are not trying to do everything.

![](assets/swiss-army-knife.jpg)


What apps do you use most? 

And do you know what they have in common? Let us tell you...

### Key concepts

1. **Interface**
* **Logic**
* **Data**


### Breaking down apps

Form groups of 2-3 people, choose one app that you are all familiar with and analyse it using this framework:

1. What is the main **purpose** of the app?
* **When** do people need this app? Be specific.
* List the *verbs* of the app, ie what **actions** does the app allow you to do. Think about possible verbs that are not part of the app, and why it may be that you're not allowed to perform those actions.
* What **input** does the app require from you?  
* Where does the app's **data** come from? Who creates it?
* What does the app do with that data (ie what's the app **logic**)?
* What **output** does the app produce?

<!-- 10-15 minutes in groups, then 15-20 minutes review, and then it should be lunch break -->


<!--

> The shortened slang term for a computer or smart phone application.

From the [American Dialect Society](http://www.americandialect.org/woty/all-of-the-words-of-the-year-1990-to-present#2010) Word of the Year 2010 

A small piece of software that has one specific function...


> The days of the software office suite are giving way to a new era of individual units, each purpose-built for a specific function...

From  [What is an app?](http://bogost.com/blog/what_is_an_app), where an app is like a music tune, a small thing compared to a record

> Referring to applications as *apps* is not just a branding technique but a necessary linguistic reduction to conceptualise a lesser type of application. A little piece of software that sits in its little sandbox and doesn’t try to compete with the overarching platform.

From [Gatekeeper and the rise of the total Apple consumer](http://www.molleindustria.org/blog/gatekeeper-and-the-rise-of-the-total-apple-consumer/)

-->













<!--

## What is code?

Can you fill in the blanks?

Think of words with `code` in them? (*Morse code*, *post code*, *dress code*...)

Code existed **before computers**.

Code is about
*   transmitting information
*   giving instructions
*   **communication**

If I want to talk to my **grandma**, I need to use Italian. To communicate with you, I use English. To **talk to a computer**, I use..

It's **instructions** to a computer: extremely powerful, fundamentally thick.

### Thick machines

Imagine a computer is your most picky/pedantic **friend**: 

* **break down** every step, in order
* be extremely **precise**
* it will take you **literally**


## What are computers good at?

COMPUTERS → **Computing** (calculating very fast, comparing quantities), **repeating** (boring) tasks endlessly, **executing** instructions, **storing** data. 

### What are you good at?	

PEOPLE → **Spotting patterns** (connecting the dots), thinking **outside the box**, **inventing** new tools and new ways to use old **tools**.

**Code is a tool**, is how we can get computers to do the **heavy lifting for us**, so that we can focus on being **creative**.

PEOPLE are **good at writing code**.


## How do you learn to code?

Remember how you learned your first language as a child?

Like **learning a new language**, **translating** your ideas into code.

**Today** you're going to learn **2 new languages**.



## Copy + hack

You learned your first language by copying people around you..



**Today** you're going to **copy us** for a bit, then **hack** what you've copied into something **new**.


## Your brief

**Learn by doing**

Make an app that helps people **make lunch**.

The app must take in some human **input**, use **code** to manipulate it, and then present a human-readable **output**.





## What is the Web?

We're building our app using Web technology.. so what is *the Web*?

The Web is not the Internet. If the Internet is a global **brain** (infrastructure), the Web is all the **memories and thoughts** that run on top of it.

Super-short history:

* The Internet started as a military project shortly after WW2. Fearing a soviet nuclear attack, the American army designed a **resilient de-centralised network**: if one *node* goes down, communication can still happen between the other nodes.

* Internet expands beyond the military and is adopted by business and academia. People start sending *emails*. 

* The WWW started as a way of **linking** academic documents together, over **2 computers in Switzerland**. 

* Tim Berners Lee (TBL): "Wouldn't it be great if I could have all my research data always **available** on this computer, and people can just fetch it from there, rather than me having to send emails? In fact, wouldn't it be great if **all the information in the World** could be always available? If every piece of data had an **address** where we can find it, like we find people at certain addresses?"

* TBL: **hypertext + Internet = WWW**, he specified a set of **rules** (HTTP) for computers to exchange documents over the Internet, and a standard **format** for these documents (HTML). 


## How does it WWWork?

You enter an address or click somewhere.

The **browser** turns your request into a HTTP request and sends it out to the Internet, to find a resource/page/site that responds to your request.

If you haven't mistyped your request, this will reach a server on the other end.

A **server** is a computer that is always on. Receives requests and cooks responses, which are sent back to the browser as **HTML+CSS+JS code**.

**RESTaurant analogy**. Sometimes (in the old days) the server sends back a **cooked meal**, in most cases it sends back a list of **ingredients** and a **recipe**.


## HTML + CSS + JavaScript

Different **languages**, different **concerns** (or jobs/purposes)

HTML → structure and content 

CSS → style and design 

JS → behaviour and logic

**RECIPE analogy** (ingredients - serving suggestions - method)

_BBC homepage example > disable CSS to show what code does what_

Today we're going to focus on HTML & CSS

-->



# Your brief

### Make an app that helps people sort through heaps of data to **find who/what they are looking for**.

**The *who/what* is up to you**. People may be looking for other people in their community to do something together, or they may be looking for food recipes, places to go, books to read, films to watch.. 

No matter which data the app uses, its **mechanics** will be the same:

1. **Load data** from an online database (a spreadsheet in our case)
* Capture **user inputs**, when they click on buttons, type into text boxes or choose from a dropdown menu etc.
* **Sort data** according to user choices, for instance filtering out data that doesn't match their choices
* Present a human-readable **output** 


### Interface

Here's an initial sketch of how the app may look and work

[![](assets/demo-app-moqups.png)](https://app.moqups.com/aimeebethmj@gmail.com/424uOp4p55/view/page/a80b23701)

### Data

We'll show you how to create structured data (aka a **database**) using a tool you are probably familiar with: a **spreadsheet**. No scary formula or data crunching though. 

Later on you can change the data to make your app serve your own purposes!

> Heads up! We're using **public data** to make things simpler (avoiding authentication procedures, data security measure etc.) so make sure you don't add sensitive information to the spreadsheet.

> We'll share the link to the spreadsheet with you in class. Email us if you haven't received it.


# Let's code

Go to [CodePen](https://codepen.io/signup/free) and sign up for the free account

### HTML

1. Set up the HTML box (hide the JS and CSS boxes)
* Write title and description without HTML tags 
* `h1` (useful for Google Fonts)
* `p`, a couple of them
* `select` and `option`
* Add a `button` 

### CSS intro

1. Show **Selectors** with *quick wins*
	* Hide `p`
	* `h1` centred
* Save and open **Debug** view.
* Introduce **Web Inspector**, HTML and CSS tabs.
* `background-image`
	* `background-size: cover;`
	* `background-repeat: no-repeat;` and may have to add `html {height: 100%;}`
* CSS **comments** 
* Typography
	* `font-size`
	* `font-weight`
	* [Google Fonts](https://www.google.com/fonts)
* Style `select` and `button`
	* `border: none;`
	* `border-radius`
	* `margin`
	* `padding`
* Colours
	* Web inspector colour picker (maybe pick a colour from Facebook). Everything is lost on *page refresh* so need to copy-paste into our code.
	* `background`
	* `color`
	* `border-color`
	* Check out [Kuler](https://color.adobe.com) and/or [Flat UI colors](https://flatuicolors.com/) for inspirations

### Final touches

* Media queries

	```css
	/* if the screen is larger than 600px..  */
	@media (min-width: 600px) {
	  body {
	    max-width: 600px;
	    margin: auto;
	    font-size: 1em;
	  }
	}
	```
* Icons using [FontAwesome](https://fortawesome.github.io/Font-Awesome/)

	```css
	.dropdown
	{
	  position: relative;
	}
	.dropdown:after
	{
	  content: "\f063";
	  font-family: FontAwesome;
	  position: absolute;
	  top: .75em;
	  right: .75em;
	  font-size: 2em;
	  pointer-events: none;
	}
	```


* Make the app look proper on a phone. Google `how to stop phone zooming out pages`

* Make the app **full screen**. Google `how to hide address bar in mobile browser` and you should find [this tutorial](http://www.html5rocks.com/en/mobile/fullscreen/) 

* Add the app to your phone's **home screen**
 
	`<link rel="apple-touch-icon" href="blabla.png">`
	
* Transparency?	
	
* Take inspiration from these fancy demos by Codrops:
	* [Custom select elements](http://tympanus.net/codrops/2014/07/10/inspiration-for-custom-select-elements/)
	* [Minimal form interface](http://tympanus.net/codrops/2014/04/01/minimal-form-interface)
	* [Natural language form](http://tympanus.net/codrops/2013/05/21/natural-language-form-with-custom-input-elements)


### License

[![](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ](http://creativecommons.org/licenses/by-nc-sa/4.0)