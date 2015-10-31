# Apps from scratch, day 6

1. [Code](#challenge) the `details` screen
* [Pitch](#presentations) your ideas and prototypes
* Resources to continue your app-making journey
* [Celebrate](#celebrations)! :cake:


# Challenge!

**GOAL** Code the `details` screen

1. [Fork this pen](http://codepen.io/baddeo/full/JYpgwL)!
* Take a look at the **HTML** and notice the new structure:
	```html
	<div id="page_slider">
  		<div id="page1">
  			...
  		</div>
  		<div id="page2">
  			...
  		</div>
	</div> 
	```
	
	`#page1` is the initial screen users will interact with
	
	`#page2` is where you are going to display details about a person / mentor / tool etc.
	
	`#page_slider` **wraps** `#page1` and `#page2`
* The *sliding* effect is a **CSS** trick:

	```css
	#page_slider {
  		width: 200%;
  		transition: margin-left .2s ease-out;
	}
	
	#page_slider.details_view {
  		margin-left: -100%;
	}
	```
	
	`#page_slider` (aka the *wrapper*) is set to be 200% wide, so that it can accommodate 2 "pages". 
	
	When we want to display the details page `#page2`, we can use **JavaScript** to add the class `details_view`, which sets the `margin-left` to -100%, effectively sliding the wrapper half-way to the left.
* Add new data to the **spreadsheet** (aka the *database*) so that each row has a `picture` URL, and some `description`.

	For example:
	
	* `name` > `Yuki`
	* `picture` > `http://cdn.themill.com/media/00000010245.jpg`
	* `description` > `Expert baker and food writer` 
* In **JavaScript**, there are some functions you will need to hack:
	
	* `displayList`
	
		```js
		var listItem = $(getListItem(person))

      // when someone clicks on the list item..
      // execute the function onListItemClick
      // and "bind" it to the current person
      // otherwise it would display the wrong person's data
      listItem.on('click', onListItemClick.bind(this, person))

      // append = add at the end..
      listContainer.append(listItem)
     ```   
	* `getListItem`
	* `onListItemClick`
	* `getDetails`
	* `displayDetails`
	

# Presentations

* Mention *competitors*
* Mention *market* and *business opportunities*
* Talk about *customer research* (remember [interviews](../03/README.md#who-are-your-users)?)
* Tell us the story of your user

# Resources

* [Codecademy](https://www.codecademy.com/)
	
	> Free online courses to learn just about any web language you like!
* [CSS-Tricks](https://css-tricks.com/)

	> Fantastic resource for CSS, invaluable for beginners and experienced front-end designers alike!
* [Smashing Magazine](http://www.smashingmagazine.com/)

	> Online magazine focused on coding and web development, covering techniques, coding languages, mobile, design, graphics and WordPress
* [Niice](https://niice.co/)

	> A design search engine, drawing results from [Behance](https://www.behance.net/), [Dribble](https://dribbble.com/) and [Designspiration](http://designspiration.net/). Great if you're in need of some design inspiration!
* [Panda App](https://usepanda.com/app/#/)

	> Another great source of inspiration pulling results from various sources like [Designernews](https://www.designernews.co/), [Dribble](https://dribbble.com/), [Behance](https://www.behance.net/) and [siteInspire](http://www.siteinspire.com/)

* [ ] [GoodUI]
* [ ] [UserOnboard]
* [ ] [CodeWars]
* [ ] [Dash]
* [ ] [HackDesign](https://hackdesign.org)
* [ ] [Noun Project](https://thenounproject.com)
* [ ] [Colour Contrast check](http://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=333333)
* [ ] [JS for cats](http://jsforcats.com/)

# Achievements!

Over the course of 24 hours you have...


1. Unpacked the **design process**: iterative, collaborative

2. Discussed examples of **good design patterns** applicaple to user interfaces within apps and many other digital content

3. Analysed the **mechanics** of a Web application, breaking down its behaviour into *data*, *functions* and *logic*.

4. Applied this knowledge to your own ideas, learning how to **develop and structure your designs** 

5. Identified your **user**

6. Identified a **problem** for your user

7. Researched **existing products** to better inform your ideas

8. Produced initial **wireframes** by sketching

9. Produced more in depth, detailed wireframes using **digital mock-up tools**

10. Familiarised yourself with and understood the role of the **three key technologies** of the web:
	- Learned the basics of **HTML** and created your first interactive page
	- Learned the basics of **CSS** and styled your first page
	- Survived an introduction to **Javascript and JQuery!**, experiencing the core components of Javascript and understanding *most* of it!

11. Linked **spreadsheet data** to your code to produce the beginnings of a usable prototype

12. Familiarised yourselves with **APIs**, understanding their role in app design and function

13. **Presented your ideas** to the team and integrated their constructive feedback into your work

14. Assessed other team members ideas and **provided constructive feedback**
	- Able to analyse ideas and identify gaps in the user experience

15. Overseen the whole process of app prototyping whilst creating **proof-of-concept prototypes** for Web applications


...Job well done!


# Let's celebrate!

And remember...


1. Googling problems is not *cheating*
	
	> Google is your friend
2. Copy-pasting code is not *cheating*

	> Good coders type, great coders copy-paste
4. Iterate and collaborate
   
   > Try again (and again) until it works and ask for feedback
5. **It's OK**. You're not going to break anything


# Keep moving forward in your learning journey!


We need your **feedback**, it will hugely help us improve this course!

### [tinyurl.com/o8qknkg](http://tinyurl.com/o8qknkg)
