# General

Stress the importance of **copy-paste**, maybe have a slide for that (*Good programmers copy* or so)

Stress the importance of **searching** for solutions online (*Google is your friend*, StackOverflow) and being able to **scan** results

Stress the importance of ***seeing behind the scenes***, having a way to understand what's going on so that we can hack/fix it.

# Session 1

Starting with a show of hands was good.

Important to show comments in code.

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

- [ ] Yuki to dump console log here

### Idea

Give people some code to fix, which they can use as example for their own app.

Useful to get familiar with the Console and learn the practice of **debugging**

* mismatching names between function definition and call
* jQuery library not linked?
* repetition that can be improved with a function


