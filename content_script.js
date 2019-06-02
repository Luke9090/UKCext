var elementList = document.querySelectorAll("div.messageActions > div.reaction.btn-group");
elementList.forEach (function(element) {
	element.style.display = "none";
});

var postList = document.querySelectorAll("div#threadText > div.author > a[href*='profile.php?id=31504']");
postList.forEach (function(post) {
	post.parentNode.nextSibling.style.display = "none";
});