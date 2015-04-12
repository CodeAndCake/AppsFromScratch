/* 	Usage
	getFootApi('banana', function(_result){
		
	});
*/
var getFootApi = function(_query, _callback){

	var url = 'https://api.edamam.com/search';

	var data = {
		_app_id: '602e4c99',
		_app_key: 'badc73a4282fd038b7547e9c5854a2d6',
		q: _query
	}

	$.ajax({

		url: url,
		dataType: 'jsonp',
		data: data,

		success: function(_res){

			_callback.call(this, _res);               
		}
	})

}