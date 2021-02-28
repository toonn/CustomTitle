getTag = browser.storage.local.get("ProfileTag");
getTag.then((res) => {
  var ProfileTag = res.ProfileTag || "";
  if (ProfileTag != "" && window.document.title.indexOf(ProfileTag) == -1) {
      window.document.title += " " + ProfileTag;
  }
});
