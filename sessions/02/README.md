# Presentation

- [ ] in the last episode.. HTML + CSS recap (with *spot the difference*?)
- [ ] what's JS again? Powerful, a bit harder

## Robot time!

Let's pretend I'm a **robot** and you have to **code me**.

* **Mission**: find an object in the room, pick it up.
* I only understand these **commands**: `walk(steps)`, `turn(degrees)` and `grab(thing)`
* I can hear, but can only say `yes` or `no`

People usually start by giving you very *specific instructions* (eg: walk 3 steps, turn 45 degrees, walk 2 steps..): **remote-controlling**

We can then make them their code more *abstract* and *flexible* with **logic** and **functions**.
	
(The idea is to engage people with an [easy task](http://pss.sagepub.com/content/early/2012/08/31/0956797612446024.abstract) before we challenge them with a demanding one)
	

## Let's talk about POP

Principles of Programming

Before we start coding the **behaviour** of our app, let's pretend that I'm a **robot** and you need to code me.

**Building blocks**

* Data → Variables **nouns**
* Actions → Functions **verbs**
* Decisions → Logic **conjunctions**

Explain functions with `makeTea( howMuchSugar, withMilk )`


## Let's code

* Go online
* Find [CodePen](http://codepen.io/)
* Sign up 





# Session 2

1. What is programming? 
* Where is data?

## Principles of programming

* Program the teachers (robot game)
* Breaking down the brief: what can the app do for us? (computational thinking)
* Variables
* Functions
* Logic

### Natural vs Programming languages 

* `the cat drinks milk` English 
* `de kat drinkt melk` Dutch
* `die Katze trinkt Milch` German 
* `il gatto beve latte` Italian 

Can you see a pattern here?

How about this?

* `cat.drink(milk)` JavaScript (written by an English-speaking human)

* Meet the `console`


    var cat = { ... }
    cat.drink = function(beverage) { ... }
	...
	var milk = ...
	...
	cat.drink(milk)

## Let's code

* Meet jQuery
* quick win: make something appear and disappear from the page
* second quick win: add an event listener to a button, or to the form submit
* get input values


## APIs 

* Data from the Web
* Don't care what it looks like, just give me the data (see [The interface layer](https://medium.com/bridge-collection/the-interface-layer-when-design-commoditizes-tech-e7017872173a)) and I'll make it work and look proper
* URLs to get and send data, examples

	* Google
	* Facebook (www vs graph)
	* Gender-api
	* Edamam
	* Mashape?

## Let's code

* Integrate the Edamam API, or are we using Mashape?

* Meet github, copy-paste code

	getFoodFromAPI('apple', function(data){

		if () {} // defo

		// loop (bonus)	

	})


### Things to keep in mind

* `script` at the end of body
* don't use forms..
* `src` is not `scr`
* explain `forEach`
* ingredients is not ingrediAnt	


### Choc

https://github.com/matteomenapace/choc

```
var counter = 0
var people = ["Matteo","Yuki","Eb","Brian","Renata"]
var total = people.length
while (counter < total) {
  var person = people[counter]
  console.log(person)
  counter = counter + 1
}
```




