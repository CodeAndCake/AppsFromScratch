
# Session 2

After the natural languages examples, would be good to have a summary slide: **abstraction** (trying to make sense)

We lost people between the console and jQuery.

> What are the things that we put in () when using a function?

New slides after PoP (for people to take notes):

* how to declare and  assign a `var`
* how to define and call a `function` 

	```js
	function makeSmoothie(ingredient1, ingredient2, ingredient3) {
		// some code here
		return smoothie;
	}
	makeSmoothie(banana, strawberries, avocado);
	makeSmoothie(apple, oranges, mint);
	```
* what are function `parameters`
* how to use `if` statements

### jQuery challenge 

Too many assumptions. 

We first need to get people to understand what jQuery selectors are `$("h3")`

Slide to explain that every jQuery line is made of two parts, separated by `.`: 

1. the selector `$("p")`
2. the function(s) to execute on the selection `html("Matteo was here")`


Using [this pen](http://codepen.io/baddeo/pen/jPEMrG) in conjunction with the Console worked better than using [jQuery Fundamentals](http://jqfundamentals.com/chapter/traversing-manipulating)


```js
jQuery
	jquery-c152c51c4dda93382a3ae51e8a5ea45d.js:14 function (e,t){return new it.fn.init(e,t)}
jQuery("h3")
	[]
jQuery("checkbox")
	[]
jQuery("button")
	[]
jQuery("select")
	[]
jQuery("input")
	[, ]
jQuery("checkbox")
	[]
jQuery("#my_checkbox")
	[]
jQuery("li")
	[, , ]
jQuery("li.special")
	[]
jQuery("input.mySecretPassword")
	[]
jQuery("input[type=text]")
	[]
jQuery("input[id=my_checkbox]")
	[]
$("h3")
	[]
$("h3").html("Matteo was here")
	[]
$("h3").css("color", "red")
	[]
$("h3").css("background", "salmon")
	[]
$("h3").css("background", "rgb(255,255,0)")
	[]
```



### IDEA

Give people some code to fix, which they can use as example for their own app.

Useful to get familiar with the Console and learn the practice of **debugging**

* mismatching names between function definition and call
* jQuery library not linked?
* repetition that can be improved with a function


# Session 3

### AM

1. Debugging
* Challenge
* Recipes app [DIDN'T DO]

### PM

1. What is design?
* Brainstorming 
* Who are your users
* Impact maps [DIDN'T DO]
* Wireframing [DIDN'T DO, assigned as homework]

### Programming skills

1. Don't type: copy-paste
2. Google is your friend
3. Try again (and again) until it works
4. It's OK: you're not going to break anything

### jQuery challenge

People found it challenging and it took the most part of 2 hours. We tried to not *spoonfeed* solutions but rather show how we would define the problem, inspect it, search for it and then try solutions out.

Alicia asked for another jQuery challenge to keep practicing during the week, so that she doesn't forget. She felt like she forgot many things from one week to the other, and that she had a vague idea of things we've done/shown before but wasn't comfortable using them. 

#### It's like being a **scientist** and making small experiments


Sometimes overcomplicating the solution. Perhaps we need to **stress that the solution is straightforward** most of the times. And that it's better to try and test every step: small change > test > observe > small change > test > observe...



# Session 4

> Making an app is not about throwing an idea at a bunch of developers, come back after two months and see what they came up with... **communication** throughout the process is key. How do we ensure that we are **on the same page**? Impact mapping, user stories..

### Impact mapping

Spent more than 2 hours on impact mapping and didn't get time to do user stories. Which is fine, impact maps seems more needed at this stage for people than user stories. It seems to be an easier and less formal method.

Need to have a **good example** of an impact map, to bridge theory (questions: why? who? how? what?) and practice.

Perhaps also a **bad example**?

Asking for an idea from the audience and live-mapping it is risky and it takes time, yet useful :)

### Wireframing

Good example should include actual content, including images

This image is misleading
![](../../sessions/04/assets/wireframe-example.png)
Need to add images and profile pictures, not boxes with crosses.


### What people want

Some people are just interested in *coding*, they are not here to learn design or business methods.

Others ask about the challenges of making an app, eg `what are the downsides?`

> Communication breakdown, scope creep..

`How many developers are involved in making an app?`.. having a personal story to tell is important.

`What languages are you coding in?`


