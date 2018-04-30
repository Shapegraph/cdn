document.body.onload = (function() {

var m = document.createElement('meta');
m.setAttribute('charset', 'utf-8');
m.setAttribute('name', 'viewport');
m.setAttribute('content', 'width=device-width,initial-scale=1,user-scalable=0');

var l = document.createElement('link');
l.setAttribute('rel', 'stylesheet');
l.setAttribute('href', 'https://www.shapegraph.com/cdn/css/sg.css');
l.setAttribute('type', 'text/css');

var s = document.createElement('script');
s.setAttribute('type', 'text/javascript');
s.setAttribute('src', 'https://code.jquery.com/jquery-3.3.1.min.js');

document.getElementsByTagName('head')[0].appendChild(m);
document.getElementsByTagName('head')[0].appendChild(l);
document.getElementsByTagName('head')[0].appendChild(s);

}());
