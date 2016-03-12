### Plan

AM:
 
- [ ] 0.5 hour

	[Quiz time](https://github.com/RavensbourneWebMedia/Web-development-workshop/tree/2016/sessions/04#quiz-time) with Team A and Team 1

- [ ] 1 hour
	
	Move `script` elements to the end of the `body`
	
	Breakpoint tool
	
	Displaying data (we started last week but it didn't work so let's do that again properly) how to create a string of HTML out of a data object and append it in your HTML

PM:

- [ ] 1 hour

	Filter data
	
	Integrate pre-written functions with an emphasis on what to customise

- [ ] 0.5 hour

	Fun, lightweight activity: CSS / start creating your own database





<!--
http://www.unheap.com

[jQuery challenge by Codecademy](https://www.codecademy.com/learn/jquery)

Yuki:

- [ ] take [sorting and filtering functions from demo-app](https://github.com/CodeAndCake/AppsFromScratch/blob/v3/demo-app) and create versions of those functions that work with [Firebase API queries](https://www.firebase.com/docs/web/api/query/)
-->





# Coding and app-making for beginners 

## Day 5

[Last week](../04) you tinkered with HTML & CSS and learned how to *upload* new data to Firebase via the JS Console.

Now that our database is ripe with data, we can **filter** that data in response to user **inputs** and display it in the app **interface**.

**Today** we're going to start with a [quiz](#quiz-time) to recap HTML, CSS and JS. 

Then you'll dive into JS, getting hands-on with **jQuery**. We will give you some pre-written code to copy-paste and integrate into your apps.

Today is about mastering **the art of copy-paste**. To become a good coder you don't need to "speak" JavaScript (or whatever other programming language). Instead, you should learn how to:

1. **Search** for solutions online 
* **Skim** through results
* **Copy-paste** relevant results into your code
* **Adapt** the pasted code to your app (changing *variable* names, tweaking *functions* etc).

When writing code, it's important to let go of any fear of making **mistakes**. Embrace mistakes, take them as an opportunity to learn. When something unexpected happens, try to avoid thinking `What have I done wrong?`. Instead ask yourself `Why did the computer not behave as I expected?`. Come up with a possible answer and then test it.

We will show you some tools and tricks to make the process of spotting mistakes and testing solutions (aka **debugging**) very efficient.


# Quiz time!

### HTML

1. The latest version of HTML is `HTML6` 

	- [ ] true 
	- [ ] false
	<!-- False. The current and last version of HTML is 5, and since then the numbering system has been dropped so there won't be any HTML6, just like there isn't an English4, English5 etc. HTML is a living, constantly evolving language-->
* EVERY HTML **element** has an opening **tag** (eg: `<a href="http://example.com">`) and a closing **tag** (eg: `</a>`)

	```html
	<a href="http://example.com"> Click me! </a>   
	```
	
	- [ ] true 
	- [ ] false
	<!-- Almost true. Some elements like <img> and <input> don't need a closing tag, because they can't have any other element nested in them-->
* All **attributes** for an HTML elements MUST go both in the opening and closing tags
	
	```html
	<a href="http://example.com"> Click me! </a id="no-spaces-in-between"> 
	```
	
	- [ ] true 
	- [ ] false
	<!-- False. Attributes go only in the opening tag-->
*  In an HTML document every `id` **attribute** MUST be unique
	
	```html
    <p id="main-content">...</p>
    <div id="main-content">...</div>
    ```
	
	- [ ] true 
	- [ ] false
	<!-- True. -->
* An HTML **element** can have more than one `class`
	
	```html
	<p class="highlight question">...</p>
	```
	
	- [ ] true 
	- [ ] false
	<!-- True. -->
* A valid HTML document MUST have a `head` and a `body` elements wrapped in a `html` element
	
	- [ ] true 
	- [ ] false
	<!-- True. -->
* What is wrong with this HTML code?
	
	```html
	<p> class="highlight question" ...</p>
	```
	<!-- Attributes, such as class="highlight question", must be inside the opening tag, so 
	
	<p class="highlight question"> 
	-->
* What is wrong with this HTML code?
	
	```html
	<script> src="app.js" </script>
	```
	<!-- Same as above. Attributes, such as src="app.js", must be inside the opening tag, so 
	
	<script src="app.js"> 
	-->

### CSS

1. Where is best to put styling instructions? 

	- [ ] `<link rel="stylesheet" href="path/to/your-style.css">`
	- [ ] `<p style="color:red;">This bloody text</p>`
	<!-- Better to link to a <link> to a separate CSS document, to keep things tidy. Separation of concerns. -->
* Every CSS file has to end in `.css`
	
	- [ ] true 
	- [ ] false
	<!-- True. -->
* What's wrong with this CSS code? 

	```css
   <p> { color: red; }
   ```     
   <!-- You don't use angle brackets < and > in CSS, so
   
   p { color: red; } 
   -->
* What's wrong with this CSS code? 

	```css
  	p { colour: red; }      
	```
	<!-- International English (American) spelling, so
   
   p { color: red; } -->
* What's wrong with this CSS code? 

	```css
    p { color red; }  
   ```
   <!-- Missing colon between color and red, so
   
   p { color: red; } -->     
* These two CSS declarations achieve the same effect       
  
  	```css             
	p { color: red; }  
	 
	p 
	{ 
	 	color: red; 
	}
	```	
   	
	- [ ] true 
	- [ ] false 
	<!-- True. However we find the second easier to read and recommend using this convention: every CSS rule on a separate line -->    
* The `#` symbol is a shortcut for

	- [ ] `class`
	- [ ] `element`
	- [ ] `id`
	<!-- id -->
* A CSS rule must be terminated by 

	- [ ]  `.` period
	- [ ]  `!` exclamation mark
	- [ ]  `;` semi-colon
	- [ ]  `:` colon	
	<!-- semi-colon -->
* `style1.css` is loaded and applied before `style2.css`	
	```html
	<head>
    	<link href="style1.css" rel="stylesheet">
    	<link href="style2.css" rel="stylesheet">
	</head> 
	```		
	 	
	- [ ] true 
	- [ ] false 
	<!-- True. The browser loads and applies CSS sequentially. So if you have CSS rules that apply to the same element, then the last one will take precedence. -->




<!--
1. [Inspirations](#inspirations): cool stuff built with JS
* [JS challenge](#challenge)
* [Prototype](#prototyping) one component of your app


# Inspirations

Some cool stuff built with JS (100% Web technologies)!

[Emotion detection  
	![](assets/sad-face.png)](http://auduno.github.io/clmtrackr/examples/clm_emotiondetection.html)

[Audio (from mic) visualiser
![](assets/noise-viz.png)](http://googlechrome.github.io/web-audio-samples/samples/audio/visualizer-live.html)

[3D London Tube map    
	![](assets/tube-map.png)](http://brunoimbrizi.com/experiments/#/07)

[Cyber-attacks map  
	![](assets/cyber-attacks.png)](http://map.norsecorp.com/)

[Social media activity map  
	![](assets/social-media.png)](http://wearedata.watchdogs.com/start.php?locale=en-EN&city=london)


# Challenge!

1. [Fork this pen](http://codepen.io/baddeo/full/JYpgwL)!
* Add an `option` to the dropdown. 
 
	You may have to add new data to the *spreadsheet* (aka the database).   
* Code the app's behaviour in response to the new option.

	There are 3 functions you will need to hack:
	
	* `getPeopleList`
	* `getFilteredList`
	* `getSortedList`



# Prototyping

-->


<!--- [ ] Aimee can help with HTML and CSS-->


<!--

1. [Questions](#questions) about computers, people and the **interfaces** in between
* [Wireframing](#wireframing) (*user* interfaces)
* [Prototyping with code](#prototyping-with-code) (*programming* interfaces)




# Session 5

Key questions: 

* What is your app *value*? 
* How do you *communicate* it?


### AM

* [Designing behaviours](#designing-behaviours)
* [Telling the user story](#telling-the-user-story)
* [Wireframing](#wireframing) and [prototyping](#prototyping)

### PM

* [Presentations](#presentations)



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



# Telling the user story

Don't present *features*. Tell a *story*.

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

# Wireframing

See last session's [notes on wireframing](../04/README.md#wireframes)

Think about the **3-4 key pages** that communicate what's unique about your app and how it benefits who uses it

Use [Moqups](https://moqups.com) or [Divshot](https://architect.divshot.com) to create your wireframes

# Prototyping

We'll show you hot to use [Invision](http://invisionapp.com), to link your wireframes and set them in motion.

Your prototypes will communicate how your app works, and offer a springboard for conversations with developers, designers, collaborators, investors...

-->


### License

[![](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ](http://creativecommons.org/licenses/by-nc-sa/4.0)

