// this function is like an HTML sausage machine
// pass in some recipe data
// and it will return an HTML list item wrapped around that data
function getRecipeListItem(recipe)
{
	// create a variable to store the HTML code
	// we put the static (non variable) bits in speech marks
	// and the variable bits outside of speech marks
    var li = "<li>"
        + "<img src=" + recipe.image + ">"
        + "<h3>" + recipe.label + "</h3>"
        + "<p>This recipe is <b>" + recipe.level + "</b> and will take you " + recipe.totalTime + " minutes to prepare.</p>"
        + "<a href=" + recipe.url + " target=_blank>Let's make this recipe</a>"
        + "</li>"

    return li    
}