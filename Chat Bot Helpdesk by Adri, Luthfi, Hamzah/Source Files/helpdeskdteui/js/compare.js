// When the user clicks the button, run the compare function
document.getElementById('submit').onclick = compare;

function compare() {
  
  // Get the value stored in #a

  var a = document.getElementById('a').value;
  a = parseFloat(a);
  
  // Get the value stored in #b
  var b = 90;
  /*var b = document.getElementById('b').value;
  b = parseFloat(b);*/
  
  // Set up a variable to store the comparison operator
  var comparison;
  
  // TODO: Set `comparison` string based on relationship between a and b
  if(a > b) {
    comparison = '>';
  } else if(a < b) {
    comparison = '<';
  } else {
    comparison = '=';
  }
  
  // Print `comparison` string on the page
  document.getElementById('comparison').innerHTML = comparison;
  
}