
chrome.storage.local.get(['show'], function(result) {
	showVal = (result.show===undefined) ? 2 : result.show;
	
	if (showVal===1) {
		var elementList = document.querySelectorAll("div.messageActions > div.reaction.btn-group.ml-2");
		elementList.forEach (function(element) {
			element.style.display = "none";
		});
	}
	if (showVal===2) {
		var elementList = document.querySelectorAll("div.messageActions > div.reaction.btn-group");
		elementList.forEach (function(element) {
			element.style.display = "none";
		});
	}
});





/* var postList = document.querySelectorAll("div#threadText > div.author > a[href*='profile.php?id=31504']");
postList.forEach (function(post) {
	post.parentNode.nextSibling.style.display = "none";
}); */