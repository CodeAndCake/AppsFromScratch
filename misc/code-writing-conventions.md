# Code-writing conventions

1. Let's use **camel case** for variable names, function names, class names, ids and files. 

	![](https://greengoblin.cs.hut.fi/o1_s2015/course/_images/camelCase.png)

	This way we promote a consistent way of calling things and avoid confusion.

	DO: 
	
	* `<section id="pageSearch">`
	* `pageSearch.css`
	* `function loadData`
	
	DON'T:
	
	* `<section id="page-search">`
	* `<section class="display_results">`
	* `load-data.js`
	
* Let's prefix all **interface elements** selected with jQuery with a `$`, so that we clearly separate them from **data** variables.
	
	DO: 
	
	* `var $searchButton = $('#searchPage button')`
	
	DON'T:
	
	* `var search = $('#searchPage button')`