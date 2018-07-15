$(document).ready(function(){
  function felicia () {
    var quotes = ["The unexamined life is not worth living", "The life of man is solitary, poor, nasty, brutish, and short","I think therefore I am", "One cannot step twice in the same river", "No man's knowledge here can go beyond his experience", "Philosophy is at once the most sublime and the most trivial of human pursuits", "If God did not exist, it would be necessary to invent Him"];
    var authors = ["Socrates", "Thomas Hobbes", "Rene Descartes", "Heraclitus", "John Locke", "William James", "Voltaire"];
    var randNum = Math.floor(Math.random() * (quotes.length));
    var randQuote = quotes[randNum];
    var randAuthor = authors[randNum];
    $(".quote").text(randQuote);
    $(".author").text(randAuthor);
  }
  $(".btn").on("click", function(){
    felicia();
  });
});