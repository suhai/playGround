
function changeClass(item, del, add) {
	if (typeof del == "string") {
		item.className = item.className.replace(del, "");

	} else if (typeof del == "array") {
		for (var i = 0; i <= del.length; i++) {
			item.className = item.className.replace(del[i], "");
		}
	}

	if (typeof add == "string") {
		item.classList.add(add);
	} else if (typeof add == "array") {
		for (var i = 0; i <= add.length; i++) {
			item.classList.add(add[i]);
		}
	}

}

function checkWorking() {
	alert("Working");
}

function checkShow(id, dropdown) {
	var fields = document.getElementById(id);
	if (dropdown.value == "val") {
		changeClass(fields, "shown", "hidden");
	} else {
		changeClass(fields, "hidden", "shown");
	}
}
