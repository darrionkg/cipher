var firstLast = function(sentence) {
  var first = sentence.charAt(0).toUpperCase();
  var length = sentence.length;
  var last = sentence.charAt(length - 1).toUpperCase();
  return (first + last);
};

var reverseOrder = function(sentence) {
  var first = sentence.charAt(0).toUpperCase();
  var length = sentence.length;
  var last = sentence.charAt(length - 1).toUpperCase();
  return (last + first);
};

var printResult = function(sentence) {
  var reverse = reverseOrder(sentence);
  var forward = firstLast(sentence);
  return(sentence + reverse);
};

var getLength = function(sentence, sentence2) {
  var length = sentence.length;
  var half = parseFloat((length / 2) - .5);
  var halfLetter = sentence.charAt(half);
  alert(halfLetter + sentence2);
};

var sentence = prompt("Enter a sentence: ");

var sentence2 = printResult(sentence);

getLength(sentence, sentence2);
