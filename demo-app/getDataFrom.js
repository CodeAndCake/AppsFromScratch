// Example
// getDataFrom(url).then(function(){});

var getDataFrom = function (url) {

	$.getJSON(url, function(result){
		
 		this.callback.call(this, result);
 
	}.bind(this));

	return this;

}

getDataFrom.prototype.then = function (callback) {

	this.callback = callback;
	
}
