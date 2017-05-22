function hide(id) {
	document.getElementById(id).style.display = 'none';
}

function show(id) {
	document.getElementById("black-box").style.display = 'block';
	hideAll(id);
	document.getElementById(id).style.display = 'block';
}

function hideAll(visibleId) {
	var ids = ["wedding-details", "photos", "relationship-timeline", "contact-information"];
	for (var i = 0; i < ids.length; i++) {
		if (ids[i] !== visibleId) {
			document.getElementById(ids[i]).style.display = 'none';
		}
	}
}

function homeOnclick() {
	hide("black-box");
	hideAll();
}
