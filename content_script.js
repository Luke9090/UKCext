var elementList = document.querySelectorAll("div.reaction.btn-group");
elementList.forEach (function(element) {
	element.parentElement.removeChild(element);
});
