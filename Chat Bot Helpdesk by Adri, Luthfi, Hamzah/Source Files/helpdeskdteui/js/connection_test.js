/*
This is the Javascript to make sure
you are connected to the internet
when you open the page
Author: Muhammad Hamzah
*/

/*
the var "conntest" is the variable which decide if
there is a connection to the internet. It fetched
the div id "conntest" fro the main page "index.html".

"navigator.onLine" is to fetch the connectivity status.
If the connection exists, it becomes true and shows
green text. Otherwise, it become false and shows
red text.
*/
var conntest = document.getElementById("conntest");
	if (navigator.onLine==true) {
		conntest.textContent = "Connected to ChatBot";
		conntest.style.color = "green";
	}
	else {
		conntest.textContent = "No Connection to ChatBot";
		conntest.style.color = "red";
	}

/*
The "winow.addEventListener is to sync the condition of
"conntest" in the main webpage "index.html". It will handle
the event about connection status depending the div id "conntest"
*/
window.addEventListener("online", function() {
	conntest.textContent = "Connected to ChatBot";
	conntest.style.color = "green";	
});

window.addEventListener("offline", function() {
	conntest.textContent = "No Connection to ChatBot";
	conntest.style.color = "red";	
});