# Session 3

### AM

1. [Debugging](#debugging)
* [Challenge](#debugging-challenge)!
* [Recipes app](#recipes-app)

### [PM](#afternoon)

1. What is design?
* Brainstorming
* Who are your users (speed interviews)
* Impact maps
* Wireframing



# Debugging

Why *debugging*? So the [story goes](http://en.wikipedia.org/wiki/Debugging#Origin): one morning Grace Hopper found an actual bug stuck in one of the relays of a computer she was working on...

![](assets/grace-moth.jpg)

When programming, things don't always go as expected.

Imagine yourself as a *scientist*: you formulate a **hypothesis** about how the computer is going to interpret and execute your code. When you test that code, your hypothesis doesn't yield the results you're expecting.

For example, you're expecting a `function` to be triggered when someone clicks a `button`. When you click that button, nothing happens.. or even worst, the button click trigger works for you but not for your friend / colleague / client!

What to do?

### 1. Find a way to reproduce the problem

What are the steps required to make the bug **happen consistently**? 
	
Is there any particular hardware / software configuration for the bug to surface? Eg: it only happens on iOS devices, or Internet Explorer 9
	
### 2. Track down the origin of the problem

You may have to simplify your code, for instance creating a reduced version of your program with only a few lines from the original source code, where the bug still happens.
	
This **removes complexity** and prevents us from being side-tracked by unrelated issues.
	
### 3. Study the problem

This is the crucial part. No matter which language you're programming in, it's essential to have a strategy for *seeing the state* of your program when it executes.
	
If you use JavaScript and debug your code in a Web browser, you can use the [Console](http://webmasters.stackexchange.com/a/77337) and [breakpoints](https://developer.chrome.com/devtools/docs/javascript-debugging) to see the state of your program. 
	
* If you have a **syntax error**, the Console will tell you where that error is (file name and line number), as well as a semi-useful indication of what the error may be
```
Uncaught SyntaxError: Unexpected end of input       main.js:5
```	

* If you have a **data error**, the Console will tell you where that error is (file name and line number), as well as a semi-useful indication of what the error may be
```
Uncaught ReferenceError: jQuery is not defined       main.js:25
```	

* If you have a **conceptual error** (nothing is technically wrong but things are not happening as expected) you can use `console.log(someVariable)` and/or [**breakpoints**](https://developer.chrome.com/devtools/docs/javascript-debugging) to see if the program is hitting a certain point of execution, and if your program is being fed the expected data.

![](assets/javascript-debugging-overview.jpg)



### 4. Ask Google

See if someone else had (and hopefully fixed) the same problem.

The more **specific** you are about your problem, the more **relevant** results you should find. Especially on places like [StackOverflow](http://stackoverflow.com).

### 5. Lather, rinse and repeat	


# Debugging challenge

Your turn!

Go to [this pen on CodePen](http://codepen.io/baddeo/pen/YXPpwV?editors=001) and **fork** it (a fork is like a photocopy, for code).

[![](assets/jquery-challenge.jpg)](http://codepen.io/baddeo/pen/YXPpwV?editors=001)

1. Open the *debug* version of your forked pen
2. Right-click anywhere on that page, choose *Inspect Element*
3. Click [**Console**](http://webmasters.stackexchange.com/a/77337) from the panel that will pop up

There are **6 challenges** for you to solve!




# Recipes app

Let's finish the [recipes app](http://codepen.io/baddeo/pen/XbrRRp?editors=001)

What's missing:

1. Search for recipes using an [API](../02/README.md#apis)
* [Loop through](../sessions/02/README.md#loops) the results from the API
* [Display recipes](../sessions/02/README.md#templating)
* [BONUS] Clear previous search results 
* [BONUS] Tell people [something is happening]([visibility of system status](http://www.nngroup.com/articles/ten-usability-heuristics/)) after they hit the *Search* button
* anything else?











# Afternoon

1. (15m) Presentation 
2. (5m) Form groups of 2 people
3. (20m) [Choose a theme](https://habber.makes.org/thimble/LTExNzQzMzkzMjg=/ucd-choose-a-theme) and brainstorm ideas around it
4. (30m) [Who are your users](https://habber.makes.org/thimble/LTQzMTQ4ODc2OA==/ucd-who-are-your-users): interview other groups about your theme
5. (20m) ![Impact maps](http://www.boost.co.nz/blog/wp-content/uploads/2014/09/2014-09-17-15.02.35.jpg)
6. (30m) [Wireframes](https://habber.makes.org/thimble/LTI4MDQ5MzgyNA==/ucd-speed-sketch-your-ideas)




## Presentation

 
* What is design?

	* **Design** is a response to an inquiry or a problem
	* Bad design examples?
	* People don't come to your site/app to see your pretty "design" 

* Have a clear, **step-by-step process** to help you through the creation of your app

* **Thinking through** your ideas in detail helps identify potential problems, gaps in your knowledge, and assumptions before you dive into code.

	Taking the time to step back and think about **audience** and explore **multiple ideas** will lead to a more successful solution
	
	* What is your goal?
	* Who is your audience? 
	* What is the key issue you are addressing? 
	<!--* What is the key issue you are addressing?-->
	<!--* What causes it? -->
	
* **Brainstorming** helps you to work with peers to kickstart an idea or concept for a design.


* **Impact mapping** helps you to focus on the goal you are trying archive by mapping out the cause and effect.


* **Wireframing** act as blueprints for app implementation


* **User testing** allows you to explore your assumptions and see what improvements need to be made to your design.






























<!--
### Notes
* Ideas generation and pitches
* List app ideas
* Vote for ideas (on a spreadsheet)
* Form groups (use an app that connects to the spreadsheet to suggest groups?)
- [ ] Brainswarming
- [ ] Ideas from @stef

- [ ] [What is an app?](http://bogost.com/blog/what_is_an_app), where an app is like a music tune, a small thing compared to a record

> Referring to applications as *apps* is not just a branding technique but a necessary linguistic reduction to conceptualise a lesser type of application. A little piece of software that sits in its little sandbox and doesn’t try to compete with the overarching platform.

From [Gatekeeper and the rise of the total Apple consumer](http://www.molleindustria.org/blog/gatekeeper-and-the-rise-of-the-total-apple-consumer/)

Interesting [analogy to electric motors](http://bogost.com/writing/blog/what_is_an_app/#comment-1666) 
-->


## Teamwork Process
Idea is just idea without communication. 

##### 1. Research
* Card sorting [https://www.captechconsulting.com/blogs/tools-for-the-ux-architect-card-sort](https://www.captechconsulting.com/blogs/tools-for-the-ux-architect-card-sort)
* Mental models [http://www.uxforthemasses.com/example-ux-docs/](http://www.uxforthemasses.com/example-ux-docs/)

* [UX design sprint from Mozilla](https://habber.makes.org/thimble/LTEyNTgyMjU0MDg=/user-centered-design-sprint)


[Online stickies](http://note.ly/)

##### 2. Sketch first thought
<!--* Issue Mapping-->
* Impact Mapping
<!--* Paper prototyping-->
* Wireframing
<!--* Experience map-->

##### 3. Collaborate

Other team, specialist, users



##### 4. Prototype & test
Process of understanding the product by trial and error 


##### 5. Launch & learn more
It's not end of the process. 
Users have wide audience in age group and disability
User doesn't come to the site to see your pretty design 

 

