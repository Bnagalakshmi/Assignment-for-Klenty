let message;
let receiver;
let color;

let types;
let type_value;

function getDetails() {
	types = document.getElementsByName("cardType");
	receiver = document.getElementById("receiverTxt").value;
	color = document.getElementById("color").value;
	
	for (let i = 0; i < types.length; i++) {
		if (types[i].checked) {
			type_value = types[i].value;
		}
	}

	switch (type_value) {
		case "wish":
			message = "FUTURE";
			break;
		case "PAST":
			message = "PAST";
			break;
		case "DATE":
			message = "DATE";
			break;
		case "ANOTHER WORLD":
			message = "ANOTHER WORLD";
			break;
	}
}

function makeCard() {
	getDetails();
	document.getElementById("message").innerHTML = message + "!";
	document.getElementById("receiver").innerHTML = receiver;
	document.getElementById("card").style.backgroundColor = color;
}
