// 1. grab the input value

var x = document.querySelector(".js-go");
x.addEventListener('click', function() {

		var input = document.querySelector("input").value;
		getInput(input);
		pushToDOM(input);

	});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

		var input = document.querySelector("input").value;

		// keycode enter (13) is pressed then execute
		if (e.which === 13) {
		getInput(input);
		pushToDOM(input);
	}
});

// 2. data stuff with api

function getInput(input){

	var url = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=jwbVi4KC3GPaJcx7mKQKdDnj2VXKu9Xl";
	console.log(url);

	// AJAX Request
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load', function(e){

		var data = e.target.response;
		pushToDOM(data);

});

}

// 3. show me the gifs

function pushToDOM(input) {

	var response = JSON.parse(input);
	var imageUrls = response.data;
	var container = document.querySelector(".js-container");
	container.innerHTML = "";

	imageUrls.forEach(function(image){

		var src = (image.images.fixed_height.url);


		container.innerHTML += '<img src="' + src + '" class="container-image">';

	});

}