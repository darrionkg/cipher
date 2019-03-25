var firstLast = function(sentence) {
  var first = sentence.charAt(0).toUpperCase();
  var length = sentence.length;
  var last = sentence.charAt(length - 1).toUpperCase();
  return (first + last);
}

var reverseOrder = function(sentence) {
  var first = sentence.charAt(0).toUpperCase();
  var length = sentence.length;
  var last = sentence.charAt(length - 1).toUpperCase();
  alert(length);
  return (last + first);

}

var printResult = function(sentence) {
  var reverse = reverseOrder(sentence)
  var forward = firstLast(sentence)
  alert(reverse);
  alert(forward);
}

var sentence = prompt("Enter a sentence: ");

printResult(sentence)
