// Saves options to chrome.storage
function save_options() {
  var showVal = document.getElementById('showChoice').selectedIndex;
  var blocked = document.getElementById('userIDs').value;
  chrome.storage.sync.set({
    show: showVal,
    userList: blocked,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    show: 2,
    userList: "",
  }, function(items) {
    document.getElementById('showChoice').selectedIndex = items.show;
    document.getElementById('userIDs').value = items.userList;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);