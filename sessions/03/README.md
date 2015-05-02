# Apps from scratch, day 3

### AM

1. [Debugging](#debugging)
* [Challenge](#debugging-challenge)!
* [Recipes app](#recipes-app)

### [PM](#afternoon)

1. [What is design?](#what-is-design)
* [Brainstorming](#choose-a-theme)
* [Who are your users](#who-are-your-users) (speed interviews)
* Impact maps
* [Wireframing](#speed-sketch-your-ideas)





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

1. (15m) [Presentation ](#presentation)
2. (5m) Form groups of 2 people
3. (20m) [Choose a theme, Choose a goal](#choose-a-theme) and brainstorm ideas around it
4. (30m) [Who are your users](#who-are-your-users): interview other groups about your goal
5. (20m) ![Impact maps](http://www.boost.co.nz/blog/wp-content/uploads/2014/09/2014-09-17-15.02.35.jpg)
6. (30m) [Wireframes](#speed-sketch-your-ideas)




## Presentation


### 1. What is design?

**Design** is a response to an inquiry or a problem

People don't come to your site/app to see your pretty "design" 

### 2. UX/UI design, the same thing?

UI is like the seat of your car.
UX is the experience you get from that seat.


UX design is about effectively addressing the needs and circumstances of your users, to produce interfaces that are comfortable and even joyful to use.


![](assets/cooker ui.jpg)
![](assets/washing machine ui.jpg) 


### 3. What is good design?

Even though it looks gorgeous, it's not doing well what is made for. 
Hot Bertaa good example of bad user experience design.

![](assets/Hot-Bertaa.png)

### 4. How to make good design?

	

### 5. Process break down


#### Research
Mapping out and breaking down whats really needed. Know about different users.


#### Sketch
Sketch using pen and paper, write down the senarios and the journey.


#### Collaborate 

Ask other team, specialist, users, your idea. More brain is better than one.


#### Prototype & test
Process of understanding the product by trial and error.


#### Iterate
Do more prototyping & testing 


#### Launch & learn more
It's not end of the process.
Users have wide audience in age group and disability



* Have a clear, **step-by-step process** to help you through the creation of your app

* **Thinking through** your ideas in detail helps identify potential problems, gaps in your knowledge, and assumptions before you dive into code.

	Taking the time to step back and think about **audience** and explore **multiple ideas** will lead to a more successful solution
	
	* What is your goal?
	* Who is your audience? 
	* What is the key issue you are addressing? 
	
* **Brainstorming** helps you to work with peers to kickstart an idea or concept for a design.


* **Impact mapping** helps you to focus on the goal you are trying archive by mapping out the cause and effect.


* **Wireframing** act as blueprints for app implementation, the skeleton of end product


* **User testing** allows you to explore your assumptions and see what improvements need to be made to your design.





## Choose a theme

A theme is something that you are passionate about, an issue that needs your help, or a problem that you notice in your community that resonates with you.

Example: *Create an app that helps your community learn about or contribute to {your project}.*

Start **brainstorming** some project ideas with your partner.
 
* Keep it simple and focus on solving a **single need**.
* **Don't spend too long** on any one idea because you will have time to further discuss your ideas later.
* Stay with the theme you choose.
* Share a few ideas with each other now and take note of them for later.




## Who are your users?

### Good practices for interviewing

1. **Plan**: prepare a script, know what to ask, and who to ask.
2. Recruit **strangers**. Because [homophily](http://en.wikipedia.org/wiki/Homophily)
3. [IF POSSIBLE] Go to **their place**, in a space where they're comfortable, best if the space where they use the product(s) you want to test / talk about. Let them show you around.
4. Easier if you interview **pairs** of users: they'll be less anxious.
5. **Listen**. Don't talk about yourself.
6. Be comfortable with **silence**: give people time and space to answer your question.
7. Be ready to **be challenged** and improvise.
8. Avoid **leading questions**. Try not to bias your interviewees.

	bad > `How much do you love using FB?`
	
	good > `Tell me about your most recent FB experience` (more concrete & memorable)
	
9. Avoid **closed questions**.

	bad > `Do you order A, B or C?`
	
	good > `How do you choose food when going out?`
	
10. Try **casual requests** instead of questions. For instance, instead of asking `How do you store your photos?` consider asking them to show you how they store photos.
    
   
   
<!--Question examples:

* How did you first learn about `insert your topic`?
* How were you motivated to become involved in `insert your topic`?
* Tell me more about that experience. What do you remember most about it?
* (if the user has started telling you about a relevant experience) What did you enjoy most? What didn't you enjoy about it?
* What kinds of problems do you or your community commonly see in your experience? Have you thought about how you would solve it?   --> 
    
### Interview analysis

* Take 5 minute to write 4-5 important observations on post-its notes about what people said and place them on the wall.
* What are the common themes you see emerge?
* What are the common problems you heard/observed?
* Did any of the findings make you start to think differently about your community and the problems you may have already been designing for?

You should now understand a little more about how interviewing your potential app users can be helpful and have some tools to help you go out interview your community. 

It takes some practice, but don't let that slow you down! 

**Repeat this activity with new potential users.** 

The more you know about your community and potential audience, the more you can respond by creating something valuable for them.



## Speed-sketch your ideas

<!--Is *this* a wireframe?

![](https://raw.githubusercontent.com/RavensbourneWebMedia/WEB14204/master/sessions/assets/wireframe-example.png)

Is *this* a wireframe?

![](https://raw.githubusercontent.com/RavensbourneWebMedia/WEB14204/master/sessions/assets/not-a-wireframe-example.jpg)

Just like a map is an abstraction of a place that helps us describe its location and geography, **wireframes are abstractions** of the **structure** of an interactive system and the **relationships** between its components.

* Wireframes are about **communicating your ideas**.

* They are about **content**, **context** and **interaction**. 

	Use real content, not *lorem ipsum*. 

* They're NOT about style. 

	When wireframing, don't worry about colours, graphics and typography. -->


* The goal is to get something down on paper, but not get too caught up in the details. 

* This is to help visualise some of your ideas. 

* Don't overthink the ideas or censor your thoughts. 

* The quality of your drawings and handwriting doesn't matter either.

![](http://www.interfacesketch.com/previews/web-browser-template.png)

![](http://www.interfacesketch.com/previews/iphone6.png)

Printable wireframing templates from [InterfaceSketch](http://www.interfacesketch.com) 















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



## Teamwork Process
Idea is just idea without communication. 

##### 1. Research
* Card sorting [https://www.captechconsulting.com/blogs/tools-for-the-ux-architect-card-sort](https://www.captechconsulting.com/blogs/tools-for-the-ux-architect-card-sort)
* Mental models [http://www.uxforthemasses.com/example-ux-docs/](http://www.uxforthemasses.com/example-ux-docs/)

* [UX design sprint from Mozilla](https://habber.makes.org/thimble/LTEyNTgyMjU0MDg=/user-centred-design-sprint)


[Online stickies](http://note.ly/)

##### 2. Sketch first thought

* Impact Mapping
* Wireframing

##### 3. Collaborate

Other team, specialist, users



##### 4. Prototype & test
Process of understanding the product by trial and error 


##### 5. Launch & learn more
It's not end of the process. 
Users have wide audience in age group and disability
User doesn't come to the site to see your pretty design 

 
 
-->

