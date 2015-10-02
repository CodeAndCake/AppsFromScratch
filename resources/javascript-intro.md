# JavaScript intro

Go to [this pen on CodePen](http://codepen.io/baddeo/pen/jPEMrG?editors=100) and *fork it* (a fork is like a photocopy, for code).

We learned how to use the browser **Inspector** to see what's going on behind the scenes of any Web page, and study its HTML and CSS.

We can do the same with JavaScript:

1. Open the [debug version of this pen](http://s.codepen.io/baddeo/debug/jPEMrG)
2. Right-click anywhere on that page, choose *Inspect Element*
3. Click [**Console**](http://webmasters.stackexchange.com/a/77337) from the panel that will pop up

![](assets/console.png)

> It's like having a chat with your browser. Instead of English you'll write in JavaScript, the *native language* of your browser.

It's important to stress that the Console is a **testing tool**, not a development tool. It's very useful to have an immediate response from the browser, to quickly test code (as well as testing our assumptions). But we write our actual programs in a code editor like CodePen (or [Sublime](http://www.sublimetext.com), [Brackets](http://brackets.io) etc).

Before we write our app's JS code, let's get familiar with some of the [programming building blocks](#programming-building-blocks) by playing around with them for a bit in the Console. 


### Manipulating HTML with JS

A common scenario: we want to change the appearance of one or  more elements in our page *after* the user has clicked on another element (eg: turn an input box red if they made a mistake, or show a "success" message if everything went well). 

CSS won't cut it, because CSS rules are applied when the page loads, and they can't change **dynamically** (when something happens *after* the page has loaded).

We need JavaScript for this job.

To *manipulate* HTML elements:

1. We need to tell JS **what** to manipulate, ie we need to  *select* some element(s)
2. Then we can tell JS **how** we want to manipulate the selected element(s), ie what *function* we want JS to apply to them


#### 1. Selecting HTML elements

We can use *native* JavaScript ways to select HTML elements, such as `document.getElementById('mystery-checkbox')`, or `document.getElementByTagName('button')` 

A bit of a mouthful.

We can use a tool called [jQuery](https://jquery.com) to write less code, more efficiently.

##### Meet jQuery

> [jQuery](https://jquery.com) is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.

You may have heard of jQuery because of its *plugins* (image sliders, date pickers, colour pickers, form validators, image uploaders..) and maybe you've tried to mess around with those a bit.

jQuery is open-source, **free** to download and use! [More than 60% of the top 10k websites globally use jQuery](http://trends.builtwith.com/javascript/jQuery).  

jQuery uses **CSS-like selectors**, so for example if you want to manipulate a `button` element in your page, you can do it like this

```js
jQuery("button")
// notice the capital Q
// or..
$("button")
// $ is a shortcut for jQuery
``` 
... which is the equivalent of telling the browser to `select all h3 elements in the page` (similar to CSS)

Let's type the following in the Console

`$("h3")`

..and then learn how to select other elements.


#### 2. Applying functions to selected HTML elements

Once we know how to instruct jQuery to get hold of elements in our HTML, we can tell jQuery to do something with them.

```js
$("button").hide();
$("button").show();
```

[jQuery manual](http://api.jquery.com) (aka *API documentation*)


### Making stuff happen on demand

This is what makes *programming* languages so much more powerful than coding languages like HTML and CSS. 

Programming has something to do with the *future*: you define instructions and *behaviour* that will happen in the future, *if* and *when* something specific happens.

For example, we want an element in the page to hide only *when* we click on a button. Using jQuery, we can do it like this

```js
// $ is a shortcut for jQuery
// jQuery("button") is the same as $("button")
// select the button, and make it run the function doSomething when a "click" happens
$("button").on("click", doSomething);

// define the doSomething function
function doSomething() {
	$("h3").hide();
}
```


<!--

```javascript
hello
	Uncaught ReferenceError: hello is not defined
"hello"
	"hello"
```

Difference between words with **speech marks** (the browser simply parrots them) and words without speech marks 

```javascript	
var salutation = "hello"
	undefined
salutation
	"hello"
salutation = "hej"
	"hej"
salutation
	"hej"
```

Using **variables** to get the browser to remember things.

```javascript	
alert("ciao")
	undefined
alert(salutation)
	undefined
prompt("How do you say hello in your language?")
	"ciao"
var userSalutation = prompt("How do you say hello?")
	undefined
userSalutation
	"hola"
```

The browser can perform certain actions (aka **functions**) natively, like humans can natively breath, eg: `alert` and `prompt` 

We can also teach the browser how to do stuff, by **defining our own functions**
	
```javascript	
cat
	Uncaught ReferenceError: cat is not defined
var cat = {}
	undefined
cat.name = "Bill"
	"Bill"
cat
	Object {name: "Bill"}
```

**Objects** are useful to keep things organised.

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
```

We can add pretty much anything to objects, including functions.

Functions are useful to **make code reusable**. For instance, the action of *drinking* remains the same, no matter what you are drinking.-->


# Challenge

If you haven't done so already, go to [codepen.io/baddeo/pen/jPEMrG](http://codepen.io/baddeo/pen/jPEMrG?editors=100) and *fork it*.

Make the following happen:

1. Make the `h3` disappear (aka `hide`...)
* Make the `h3` appear (aka...)
* Make the dropdown menu (aka `select`) disappear 
* Change the content of `h3` to whatever you like
* Change the content of the `li` currently saying `CSS` to whatever you like (hint: what's `special` about that `li`?)
* Untick the `checkbox`
* Capture the `value` of the password input field and `alert` it
* Change the content of `h3` to be the `value` of the password input field

Remember: first you need to get jQuery to **select** the element(s) you are after (`$("what you want to select")`), then you **apply** some function to your selection (`.someFunctionName(parameter1, parameter2 etc)`)

Also: Google is your friend :)