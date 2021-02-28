function saveOptions(e) {
  browser.storage.local.set({
    ProfileTag: document.getElementById("ProfileTag").value,
  });
  e.preventDefault();
  restoreOptions();
}

function restoreOptions() {
  var storageItem = browser.storage.local.get("ProfileTag");
  storageItem.then((res) => {
    document.getElementById("ProfileTag").value = res.ProfileTag || '';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
