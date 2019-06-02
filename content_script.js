
chrome.storage.local.get(['show'], function(result) {
	var showVal = (result.show===undefined) ? 2 : result.show;
	
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

chrome.storage.local.get(['userList'], function(result) {
	var blocked = (result.userList===undefined) ? "" : result.userList;
	var userRegex = /\d{3,7}(?!\w)/;
	
	blocked.split(/[, ]+/).forEach (function(user) {
		if (userRegex.test(user)) {
			var postList = document.querySelectorAll(`div#threadText > div.author > a[href*="profile.php?id=${user}"]`);
			postList.forEach (function(post) {
				post.parentNode.nextSibling.style.display = "none";
			});
		}
	});

});