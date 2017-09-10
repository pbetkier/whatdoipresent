// execute this in dev tools console on a devoxx schedule page

var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

jQuery.noConflict();

var s = "";
jQuery('.title a').each(function(){s = s + this.text + "\n"});
s;
