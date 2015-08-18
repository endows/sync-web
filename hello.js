chrome.runtime.onMessage.addListener(function (obj) {
  $.post('http://na-u.meteor.com/api/status',obj)
});
