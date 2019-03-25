var firstLast = function(sentence) {
  var first = sentence.charAt(0).toUpperCase();
  var length = sentence.length;
  var last = sentence.charAt(length - 1).toUpperCase();
  return (first + last);
}




var sentence = prompt("Enter a sentence: ");

sentence = (firstLast(sentence));
