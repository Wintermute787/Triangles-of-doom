$(function() {
  $("form#triangle").submit(function(event) {
    var firstSide = parseInt($("input#first-side").val());
    var secondSide = parseInt($("input#second-side").val());
    var thirdSide = parseInt($("input#third-side").val());

    if (firstSide !== 0 && secondSide !== 0 && thirdSide !== 0) {
      if (firstSide === secondSide && firstSide === thirdSide) {
        $(".equilateral").show();
      } else if (firstSide !== secondSide && firstSide === thirdSide) {
        $(".isosceles").show();
      } else if (secondSide !== thirdSide && secondSide === firstSide) {
        $(".isosceles").show();
      } else if (firstSide !== thirdSide && secondSide === thirdSide) {
        $(".isosceles").show();
      } else if (firstSide !== secondSide && firstSide !== thirdSide) {
        $(".scalene").show();
      }
    } else {
      alert("This isn't a frackin triangle");
    }
    event.preventDefault();
  });
});
