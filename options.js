function loadOptions() {
    console.log("loading options");
	document.getElementById("showChoice").selectedIndex = chrome.storage.sync.get(['showVal'], function(result) {
        return result.showVal;
      });;
}

function saveOptions() {
    console.log("saving options");
    var value = document.getElementById("showChoice").selectedIndex;
    chrome.storage.sync.set({showVal: value}, function() {
        console.log('Value is set to ' + value);
    });
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save').addEventListener('click', saveOptions);