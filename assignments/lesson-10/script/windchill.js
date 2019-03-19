// Input - get input and convert that string to an integer
function windChill() {
var t = parseInt(document.getElementById('temp').innerHTML);
var s = parseInt(document.getElementById('wind').innerHTML);

var f = 35.74 + (0.6215*t) - (35.75 * Math.pow(s, 0.16)) + 0.4275 * t * (Math.pow(s, 0.16));


document.getElementById('output').innerHTML = f;
}