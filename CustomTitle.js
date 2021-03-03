const appendTag = function() {
  getTag = browser.storage.local.get("ProfileTag");
  getTag.then((res) => {
    var ProfileTag = res.ProfileTag || "";
    if (ProfileTag != "" && document.title.indexOf(ProfileTag) == -1) {
        document.title += " " + ProfileTag;
    }
  });
};

appendTag();

const appendTagOnChange = function(mutationsList, observer) {
  for(const mutation of mutationsList) {
    appendTag();
  };
};

const observer = new MutationObserver(appendTagOnChange);
observer.observe(document.querySelector("title"), { childList: true });
