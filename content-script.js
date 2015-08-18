var current_url = window.location.href
update_status(current_url)
setInterval(function(){
  if(current_url != window.location.href){
    current_url = window.location.href
    update_status(current_url)
  }
},1000)

function get_thumnail(url){
  if(url.indexOf('youtube') > -1){
    var video_id = window.location.search.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if(ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }
    return 'http://i.ytimg.com/vi/' + video_id + '/mqdefault.jpg'
  }else{
    return $('img').sort(function(a, b){return b.width * b.height - a.width * a.height})[0].src
  }
}

function update_status(url){
  var thum_url = get_thumnail(url)
  var title = window.document.title
  chrome.runtime.sendMessage({url:url,image:thum_url,title:title});
}
