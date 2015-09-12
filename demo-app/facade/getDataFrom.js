// Example
// getDataFrom(url).then(function(){});

var getData = function (url){

	$.getJSON(url, function(result){
		
 		this.callback.call(this, result);
 
	}.bind(this));

	return this;

}

getData.prototype.then = function (callback) {

	this.callback = callback;
	
}
