# V4

## Day 2

### What went well

* Quiz is always a winner. Not as much team work and competition as in previous courses, but people still found it valuable.

### Areas for improvement

* CSS: group shared rules

	```css
	button, select {
	  font-family: "Lekton", sans-serif;
	  font-size: 200%;
	  display: block;
	  margin: 0 auto;
	  cursor: pointer;
	}
	```

* Comma ≠ dot (eg: `rgba(0,0,0,0,2);` ≠  `rgba(0, 0, 0, 0.2);`

	Could be a quiz question in a future quiz

### Action points

* On day 3, recap with nice graphs from day 1


## General

* Functions like `makeListItemHTML` etc. could be made more generic, which means not using `person` but `dataObject` or so.

* Move the functions that we want people to edit at the top of the `show.js`

* Extend `filterAndSortList` so that it loops through every property in the database objects and looks for matches (`selectedOption == value`)


# V3

## Day 1

### What went well

* Introduction was super. The way we modelled our introductions (presenting each other through a personal story) made students more open to share their own personal stories.

* Splitting tables to 4 sections helped people get taking.   

* Printing the session notes helped. People were taking notes on them.

### Areas for improvement

* The room needs to be cleaned.  

* *What is an app* discussion had too many questions and we dragged in on for too long.

* *How long does it take to make an app* not so relevant for this crowd, who are more interested in coding than app-making.

* No to whiteboard, you can't move things around.

### Action points

* Add more image-based practice in CSS to get people more  engaged. We encourage them by adding more media elements to the course.
 
* *What is an app?* can be a whole-class quick q&a (max 10 minutes), maybe cut down the questions and change them so that they lead into the 3 **key concepts**.

* Add HTML and CSS **comments** to the notes.


Idea for next session 1 presentation:

1. Welcome, introductions and plan, then:
* **What is code?** Get people to shout out some ideas and keywords, like *instructions*, *rules*, *data* etc. See [this for inspirations](https://github.com/RavensbourneWebMedia/Web-Design-principles/tree/2015/sessions/08#what-is-code).
* How do you **learn to code**? Introduce the `mantras`:

	* How did you learn your first natural language? By **copying** people around you, trying out things and see what reactions you get
	* Learning to code is a **trial&error** process. We're not at school, so making mistakes is good! Mistakes are opportunities to learn.
	* Good coders don't type. They **copy-paste**.
	* Good coders don't try to remember everything. They know how to **search** for solutions online and integrate ready-made code in their projects.
	* Spot the difference (**patterns**) with a few HTML and CSS examples?
	
		```html
		✅ <p>Read me</p>
		✅ <a>Click me</a>
		❌ <a>Click me<a/>
		✅ <a href="http://copy.it">Click me</a>
		❌ <a> href="http://copy.it"Click me</a>
		```
		
	* Learn by **making**
* Your **brief**: make an app that...
* **What is an app?**

	* small digital tool connected to the Web
	* swiss-army knife
	* 3 key concepts: 	**interface**, **data** and **logic**
* If there's time, **analyse** an app in small groups.
* Zunch!	
		

## Day 2

### What went well

* Room was really lovely and clean which left us some much needed preparation time beforehand
* Clickable mice really helped, at least 4 people
* Good for people to bring their own laptops - more comfortable
* Slow pace CSS recap
* Good to have two separate print outs for morning and afternoon - people navigated information easily
* People used the print-outs to get ahead while waiting for others to catch up
* People understood variables and objects through testing in the console
* Better balance between the three of us speaking, added variety

### Areas for improvement

#### HTML & CSS

* HTML & CSS recap took 1.5 hours, and left no time for UX research
* Before coding demonstrations, disclaimer: *if you're stuck at all then raise your hand and we'll come round to help out, we don't always spot you otherwise!*
* CSS specific - use `border: solid 2px red;` instead of `border-width: 2px; border-color: green;` etc.
* Harpinder suggested a **CSS cheatsheet** with common properties (there are many online we could point them to)

#### Light activities for the start of the day

* We can start with a group activity to wake people up and get them talking (also while late-comers are trickling in, and we can't start coding without them really)
* From 11:00 - 11:30 we should start discussions and slightly less important stuff so that we can get started immediately - more time for critical demonstrations once the late-comers arrive
* It's ok to have an **early lunch**!

#### Facilitator tips

* **Smile** more :simple_smile: 
* **Stand up** when doing coding demonstrations and walk around a bit - send your voice across the whole room, moving from table to table, quizzing them a bit.
* Remember to talk UPWARDS, rather then down towards your screen 
* It may be helpful for the non-leading facilitators to chip in as well and give an overview of what we're doing, telling funny anecdote or just remind people of why we're doing this.

#### The dreaded Console

* When we use the **Console** we must clarify that we aren't working directly on their apps but rather doing an exercise to become familiar with JS.
* Console demo: people didn't get the Terminal reference,  objects and functions could have been explained a bit more (demo a couple of times, then ask students to **repeat on their own** and solidify their learning)
* [aimee.js](https://github.com/CodeAndCake/AppsFromScratch/tree/v3/sessions/02#lets-interact-with-aimee) was confusing, lost some people coming away from the Console to github. We could turn it into a Thimble project, with `aimee.js` preloaded

* Note, our displays look a bit different on PC (?)

### Action points	

* Mozilla Thimble emails not sent! What to do in this scenario? 	- get students to export and email their projects to themselves JUST IN CASE (this is sorted now, see https://github.com/mozilla/login.webmaker.org/issues/374) Have a **collective account**.
* Swap UX research and HTML+CSS recap. 
* Laptop trolley always **electrocutes** me when I bring it in and out of the lift.
* Create a **shared document for sharing links**, a sort of copy-paste bin for coding demos (because you can't expect people to type in long URL like `github.com/CodeAndCake/AppsFromScratch/blob/v3/sessions/02/aimee.js`).
* Make sure we add `script` tags at the end of the `body`
		

## Day 3

### What went well

* Recap was really useful

### Areas for improvement

* Wireframing in the morning? Doesn't necessarily have to come after the database and functions - ideas can come first 
* Discussion around app ideas - not clear what the purpose was and was too long which then lead into them working on their apps 
* Clear distinctions between group discussion generating ideas and the brief - group discussion is for motivation and brainstorming
* Working individually on the brief - make it clear

### Action points	

* Need to plan more in advance so that we are all in agreement about the day's plan - agree between us on day's plan before jumping into the detail of specific
* Prepare faster
		

## Day 4

### What went well

* Recap in general is working well.

* Commenting code as a recap exercise was useful to spot areas / concepts to clarify. They were also more open about what they didn't understand.

* Firebase challenge was useful, even though it took much longer than expected (1 hour instead of 0.5). Could be fleshed out a bit more, step-by-step. Maybe we shouldn't show them the whole API functions list, but encourage them to use the *guide* 

### Areas for improvement

* No need to waste 0.5 hours setting people up on Firebase

* Creating an object with the syntax `var o = { a: 1, b: "c" }` was confusing, better to use `var o = {}; o.a = 1; o.b = "c";` even though it's longer to type out. The second method uses a familiar syntax and reinforces the *dot notation*

* Many people wrote their `database.push( stuff )` in Thimble, which meant pushing data every time the page got refreshed. How can we prevent this? Maybe instead of using Thimble we can paste the `person` object in the copy-paste document for them to use.

* Reinforce that the Console is `your JS playground`. You're not going to break anything.

* Maybe the morning challenge could be a pre-built form with a bit of jQuery that builds the `person` object, eg: `person.name = $('input#name').val()`, and the only bit missing is `database.somethingSomething( person )` and your task is working out which Firebase function to use.

* Didn't have time do to `id`, `class` and indentation in the morning. CSS seems to always take longer than planned because people like to tinker with styling. Maybe we should do all the HTML and CSS in day 1 and 2 (possibly 3), including the search results, and then do solid JS for a couple of sessions. Avoid mixings.

* camelCase for `class` and `id`

* *Don't reinvent the wheel* example had too much complexity that got people distracted. `Why is it not pink?` `What is a div?` `Where do you load that?` Maybe we could drive the point of libraries home by showing something like the [date picker](https://jqueryui.com/datepicker/)

### Action points	

* 	[Quiz time](https://github.com/RavensbourneWebMedia/Web-development-workshop/tree/2016/sessions/04#quiz-time) with Team A and Team 1
		

## Day 5

### What went well

* Quiz went well, people had fun! Should have more of those (maybe shorter, max 30 minutes) to wake people up in the mornings. Possibly not the first day, when people don't know each other... but any other day should be good.

### Areas for improvement

* `ul` with pre-populated `li` was confusing (they didn't remember)

### Action points	

* Engineer a **bug** so that they need to use the Console

* `#` is <kbd>alt</kbd> + <kbd>3</kbd>	
* Remind people that file names are **case sensitive**, e.g. `<script src="App.js"></script>`

* > Work at your own pace, not behind nor ahead 		

## Day 6

### What went well

* People liked the idea of creating their own database.
* Resources (coding tools, courses, design inspirations) were well received. Many intrigues by [Codewars](https://codewars.com)

### Areas for improvement

* People were a bit confused by the [Firebase Pusher](http://bit.ly/firebasePusher):

	* No visual feedback when data got pushed
	* > Is this part of my app now? 

### Action points	

* Format print-outs with AM + PM
* Write `Copy the code below` instead of `copy this code` (some people may copy bits from previous exercises otherwise)
   
   
# General

Next time, let's aim to finish the demo-app in 4 days and have 2 days to build their own app (and database). We can achieve that by cutting some *chit-chat* on day 1 (start coding in the morning) and wireframing and ideation on day 3. 

We could also do all the HTML and CSS first, and then introduce JS. Mixing them up seems a bit confusing.

Maybe check out how to [structure data on Firebase](https://www.firebase.com/docs/web/guide/structuring-data.html) to make querying it easier?

- [ ] Create collective accounts for Thimble and Firebase, to avoid lost password disasters