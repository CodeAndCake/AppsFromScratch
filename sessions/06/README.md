<!--### Plan

- [ ] **Build your own database**

	10-15 minutes A few pointers on how to do it. How do you want to filter that data? What is the UX? 
	
	Talk about ranking and "data design" (see https://github.com/RavensbourneWebMedia/Web-development-workshop/blob/2015/sessions/week-15.md#data-design-principles)

- [ ] Matteo to build a Thimble hackable Firebase form, based on this https://github.com/macek/jquery-serialize-object and http://jsfiddle.net/sxGtM/3/

	So students can customise it to their own data, change the Firebase URL and then start submitting objects

- [ ] **Remix** the demo-app & code your own app

	Add this code to make it look like a proper app on your phone
	
	`viewport` and icons

	Add it to your home screen!
	
- [ ] Evaluation form (15 minutes)

- [ ] Possibly volunteering people for focus group 	
- [ ] [Resources](#resources) to continue your app-making journey

- [ ] [Celebrate](#celebrations)! :cake:

- [ ] What else have they achieved? Go through the 5 days again	 -->


# Coding and app-making for beginners

## Day 6

This is the last day of the course! You've made it, great job!
 

[Last week](../05) you... 

* Created a new database and connected it to your app
* Used the Firebase Pusher to send data to your new database
* Some of you also started to tweak the functions in `show.js` to change the results display 
* And many of you used the JS Console to spot mistakes and test solutions (aka **debugging**)

**Today** we're going to pull everything we've learned together:

1. Recap how to **design your database**, depending on how you want users to interact with your data
* Recap how to populate **your own Firebase database** with test-data using the Firebase Pusher
* What do your functions do?
* How can you tweak them to display the results exactly as you like?
* Make it look like a proper app on your phone and add it to your home screen. Then go and brag about it with your family and friends :)

To continue your learning journey, we'll share with you some hand-picked **resources and links** to cool stuff on the Web.

You have done so well! Let's celebrate your achievements :tada:



# Recap

## Key database design principles

### 1. Break down your data into **logical pieces**

<!--Also known as [1NF](http://en.wikipedia.org/wiki/First_normal_form) (first normal form).--> 
    
#### Bad example
     
| Person | 
| ------ |
| Danny Base 21 |

#### Better example

| Name | Surname | Age | 
| ---- | ------- | --- |
| Danny | Base | 21 |

This way you can take specific bits of data and spit them out wherever and however you want in your app.

Also, you could do things like `calculate the average age of our people`.

### 2. **Rank** with numbers

Computers are extremely good at maths. For a computer, computing numbers is a piece of :cake: Yet computing natural languages (such as English) is something that even the most sophisticated machines still struggle with (think of Siri, for example).

What's the trick then, if you want your app to be able to tell you `who are the best bakers in my area`? You **rank** people according to their baking skills.

#### Bad example
     
| Name | Surname | Baking skills | 
| ---- | ------- | ------------- |
| Danny | Base | Excellent |
| Jordan | Scripts | Amazing |

#### Better example

| Name | Surname | Baking skills (0-5) | 
| ---- | ------- | ------------- |
| Danny | Base | 4 |
| Jordan | Scripts | 2 |

If you want to rank data objects by **relevance** to a certain concept / keyword, also use numbers.

| Name | Surname | Comedy | Sci-fi | Western
| ---- | ------- | ------ | ------ | -------
| Quentin | Tarantino | 2 | 0 | 3
| Martin | Scorsese | 3 | 0 | 1
| Stanley | Kubrick | 1 | 3 | 0
| Sofia | Coppola | 3 | 0 | 0

### 3. **Filter** with true or false

For **yes or no** answers.

| Name | Surname | filmMaker| likesPets | likesEurope
| ---- | ------- | -------- | --------- | -----------
| Quentin | Tarantino | true | false | true
| Martin | Scorsese | true | true | true
| Boris | Johnson | false | false | false

For instance, it would be easy to filter only the film-makers using this data structure.


## Hacking the Firebase Pusher

[Firebase Pusher](https://thimbleprojects.org/codeyourapp/67950) is a tool which you can use to **push single data entries to your database**.

You can find the original pusher `Firebase pusher ORIGINAL` under `Your projects` in Thimble. Make sure to `Remix` the project before making any changes. 

### What is your *data unit*?

For our demo app, which helps users find *people* to swap skills, the data unit is `person`. 

If your app helps users find *courses*, then your data unit is a `course`. If your app helps users look up *events*, then your data unit is an `event`. 

The Firebase Pusher can be used to send one new data entry to the database at a time. You fill out the form with all the data unit details and press the `Push it!` button! You should see the new entry appear on your Firebase each time you do this.

Your data unit will be quite different from the ones we've created for our demo app. So, you'll need to adapt this form to fit your data.

### Each data entry needs...

Think about what information your users will want to get from your app. Put yourself in their :shoe: :high_heel: :mans_shoe: and use this to work out the information you'll need to store. 

For example, if you were looking for a *course*, you'd probably want to know the `name`, `subjectArea`, `startDate`, `endDate`, `startTime`, `endTime`, `price`, `place`, some `description` of what will be studied, maybe who the `teachers` are... and so on.

You'd need to customise the Firebase Pusher form so that you have a **field** for each piece of information you want to store inside that entry.

> 1. In `app.js` change `databaseURL` so that it points to your own Firebase.
> * In `index.html` edit the `form` by changing all the `name` attributes for your fields to reflect the data you want to store in Firebase. For instance, change 
> ```html
<input name="codingSkills" ...
``` 
> to 
> ```html
<input name="YOUR_VARIABLE_NAME" ...
```
> Then once you've adapted the form, you can use it to push the details about one course at a time to the database. You fill out the form and press the `Push it!` button!

> **INSIDER TIP** Don't push hundreds of data objects. Just push two or three to start with, then *test* your app and see if you need to re-structure your data, or add anything that you may have missed.


# Displaying data

Once you've created your own database and *pushed* data to it, you'll need to customise the code you already have to display your new data.

### Change the display

> Go to the function `show.js`.

> Find the function `makeListItemHTML`, which populates the results list:

> ```js
function makeListItemHTML (person, index) 
{
	...
	// li = List Item
	var li  = '<li id="' + index + '">' 
	+ '<h2>' + person.name + '</h2>' 
	+ '</li>'        
	return li        
}
```

This function takes in the JavaScript object `person` and spits out an HTML list item `<li>...</li>`

As you can see, in `li` there are some **invariable bits** like `<li id="`, and some **variable bits** like `person.name` 

> If you want to add an `img` for instance, then you can tweak the lines where `li` is stringed together: 

> ```js
var li  = '<li id="' + index + '">' 
+ '<img src="' + person.image + '">' 
+ '<h2>' + person.name + '</h2>' 
+ '</li>'    
```  		

How	would you change the function that determines how `#details` is displayed? It's in the function `makePersonHTML`. 

### Finishing touches

<!--Hiding the remix button?-->

Copy and paste this code into the `head` of your HTML document under the `title` element. You can find it in the copy-paste document:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<!-- Enable fullscreen Mode -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<!-- Icon for home screen -->
<link rel="apple-touch-icon" href="CHANGE THIS SO THAT IT POINTS TO AN IMAGE URL">
<link rel="icon" sizes="296x296" href="CHANGE THIS SO THAT IT POINTS TO AN IMAGE URL">
``` 

This code ensures your app will display well on mobile. Be sure to change the `link` `href="  "` to the url of whatever image you'd like to use for your app icon. The image should be square shaped for the best display.


# Resources

### Code

* [Codecademy](https://www.codecademy.com/) `codecademy.com`
	
	Free online courses to learn just about any coding language you like!

* [Dash](https://dash.generalassemb.ly/) `dash.generalassemb.ly`

	Free online courses to get you going in HTML, CSS and a little JavaScript

* [CodeWars](http://www.codewars.com/about) `codewars.com`

	Complete challenges in Javascript and improve your ranking! A fun resource for learning new tricks and comparing the many different ways to complete a task
	
* [CSS-Tricks](https://css-tricks.com/) `css-tricks.com`

	Fantastic resource for CSS, invaluable for beginners and experienced front-end designers alike!
	
* [JS for cats](http://jsforcats.com/) `jsforcats.com`

	Introduction to JavaScript..."So easy your human companion could do it too!" :scream_cat:
	
* [CSS Diner](http://flukeout.github.io) `flukeout.github.io`

	A little game to help you learn CSS selectors. Type in the correct selector to complete each level. 
	
* [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools)

	A set of web authoring and debugging tools built into Google Chrome. Use the DevTools to iterate, debug and profile your Web projects!
	
### Inspiration
	
* [Smashing Magazine](http://www.smashingmagazine.com/) `smashingmagazine.com`

	Online magazine focused on coding and web development, covering techniques, languages, mobile, design, graphics and more
	
* [Creative Bloq](http://www.creativebloq.com/) `creativebloq.com`
	
	Online magazine providing inspiration for graphic design, web design, 3D art and more

* [Niice](https://niice.co/) `niice.co`

	A design search engine, drawing results from [Behance behance.net](https://www.behance.net/), [Dribble dribbble.com](https://dribbble.com/) and [Designspiration designspiration.net](http://designspiration.net/). Great if you're in need of some design inspiration!
	
* [Panda App](https://usepanda.com/app/#/) `usepanda.com`

	Another great source of inspiration pulling results from various sources like [DesignerNews](https://www.designernews.co/) `designernews.co`, [Dribble](https://dribbble.com/) `dribbble.com`, [Behance](https://www.behance.net/) `behance.net` and [SiteInspire](http://www.siteinspire.com/) `siteinspire.com`

### Design

* [GoodUI](http://goodui.org/) `goodui.org`

	Extensive list of good design patterns for user interfaces
	
* [UserOnboard](https://www.useronboard.com/) `useronboard.com`

	Teardowns of major apps - a great reference for designing your interfaces	
* [HackDesign](https://hackdesign.org/lessons) `hackdesign.org`

	Learn how to design digital products, with lessons spanning from typography to UX (user experience).
	
* [Noun Project](https://thenounproject.com) `thenounproject.com`

	Huge database of beautiful icons to use in your app
	
* [Colour Contrast check](http://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=333333)

	Tool to check the readability of your colours, ensuring they're easy on the eyes
	
* [Abobe Color CC](https://color.adobe.com/create/color-wheel/)

	Great tool to design your colour palettes
	
* [Random User Generator](https://randomuser.me/) `randomuser.me`

	Random users for you to populate your app prototypes
	
* [Pttrns](http://pttrns.com/) `pttrns.com`

	See how other mobile designers solve UX problems for things like calculators, calendars, search and more
	
* [WTF Mobile Web](http://wtfmobileweb.com/) `wtfmobileweb.com`

	What not to do!


# Things you achieved in 24 hours!

1. Analysed the **mechanics** of a Web application, breaking down its behaviour into *data*, *functions* and *logic*
* Learned how to read and write **HTML** from scratch then created your interface
* Learned how to use **CSS** to style your own page and made your interface beautiful!
* Grasped the principles of **JavaScript and jQuery**
* Used the Firebase **API**, understanding database design and creating your own database
* Hacked a tool (Firebase Pusher) to send your own data to your database 
* Linked **database data** to your own app
* **Debugged** your code
* Applied good practices for effective coding: *copy-paste*, comments, searching for solutions online  

### Well done!

And remember...

1. **Searching** for problems online is not *cheating*
* Copy-pasting code is not *cheating*. 

	Great coders **copy-paste**.
* **It's OK**. You're not going to break anything.

	Embrace your mistakes. **Debug** them :)
	

### Keep moving forward in your learning journey!


## One last thing

We need your **feedback**. It will hugely help us improve this course!

[goo.gl/6rTAq0](https://goo.gl/6rTAq0)


### License

[![](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ](http://creativecommons.org/licenses/by-nc-sa/4.0)
