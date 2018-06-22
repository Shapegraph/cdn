document.body.onload = (function() {

var m1 = document.createElement('meta');
m1.setAttribute('charset', 'utf-8');
var m2 = document.createElement('meta');
m2.setAttribute('http-equiv', 'content-type');
m2.setAttribute('content', 'text/html');
var m3 = document.createElement('meta');
m3.setAttribute('name', 'viewport');
m3.setAttribute('content', 'width=device-width,initial-scale=1,user-scalable=0');

var l = document.createElement('link');
l.setAttribute('rel', 'stylesheet');
l.setAttribute('href', 'https://www.shapegraph.com/cdn/css/sg.css');
l.setAttribute('type', 'text/css');

var s = document.createElement('script');
s.setAttribute('type', 'text/javascript');
s.setAttribute('src', 'https://code.jquery.com/jquery-3.3.1.min.js');

document.getElementsByTagName('head')[0].appendChild(m1);
document.getElementsByTagName('head')[0].appendChild(m2);
document.getElementsByTagName('head')[0].appendChild(m3);
document.getElementsByTagName('head')[0].appendChild(l);
document.getElementsByTagName('head')[0].appendChild(s);

}());
