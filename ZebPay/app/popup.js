// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.zebapi.com/api/v1/market/ticker/btc/inr", true);
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4) {
//     myFunction(xhr.responseText);
//   }
// }
// xhr.send();

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://live.zebapi.com/api/v1/ticker?currencyCode=inr", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    myFunction(xhr.responseText);
  }
}
xhr.send();

function myFunction(response) {
    var arr = JSON.parse(response);
    var i;
    var out = "<table  class=\"table table-dark\">";

    out += "<tr><td>Buy:</td><td>" + arr.buy +"</td></tr>" +
            "<tr><td>Sell:</td><td>" + arr.sell +"</td></tr>" +
            "<tr><td>Volume:</td><td>" + arr.volume +"</td></tr>";
    out += "</table>";
    document.getElementById("id01").innerHTML = out;
}


