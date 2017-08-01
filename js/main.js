// var myPets = [
//   {
//     "name": "Meowsy",
//     "species" : "cat",
//     "foods": {
//       "likes": ["tuna", "catnip"],
//       "dislikes": ["ham", "zucchini"]
//     }
//   },
//   {
//     "name": "Barky",
//     "species" : "dog",
//     "foods": {
//       "likes": ["bones", "carrots"],
//       "dislikes": ["tuna"]
//     }
//   },
//   {
//     "name": "Purrpaws",
//     "species" : "cat",
//     "foods": {
//       "likes": ["mice"],
//       "dislikes": ["cookies"]
//     }
//   }
// ]

var pageCounter = 1;
var infoContainer = document.getElementById("ajax-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
	var myRequest = new XMLHttpRequest();
	myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
	myRequest.onload = function() {
		if (myRequest.status >= 200 && myRequest.status <= 400) {
			var myData = JSON.parse(myRequest.responseText);
			renderHTML(myData);
		} else {

			// For error handling
			console.log("Connection Error");
		}
		
	};
	// For Error Handling
	myRequest.onerror = function() {
		console.log("Connection Error");
	}
	

	myRequest.send();
	pageCounter++;
	if (pageCounter > 3) {
		btn.classList.add('hide-me');
	}
});

function renderHTML(data) {
	// body...
	var htmlString = "";
	for (i = 0; i < data.length; i++) {
		htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

		for (var ii = 0; ii < data[i].foods.likes.length; ii++) {
			if (ii == 0 ) {
				htmlString += data[i].foods.likes[ii];
			} else {
				htmlString += " and " + data[i].foods.likes[ii];
			}
		}

		htmlString += "and dislikes ";

		for (var iii = 0; iii < data[i].foods.dislikes.length; iii++) {
			if (iii == 0 ) {
				htmlString += data[i].foods.dislikes[iii];
			} else {
				htmlString += " and " + data[i].foods.dislikes[iii];
			}
		}

		htmlString += ".</p>";
	}

	data = infoContainer.insertAdjacentHTML('beforeend', htmlString);
}

