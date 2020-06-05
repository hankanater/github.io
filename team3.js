function calculate() {              // Hank - gets 2 numbers entered in from the webpage and adds them
    var field1=document.getElementById("num1").value;
    var field2=document.getElementById("num2").value;

    var result=parseFloat(field1) + parseFloat(field2);

    if(!isNaN(result)) {
      document.getElementById("answer").innerHTML="The Answer is " + result;
    }
  }

  

  function horror() {                       //Hank - creates an array of 5 movies and prints them out with suffixes

    var horrorMovies = ["Us", "Hereditary", "A Quiet Place", "IT", "Midsommar"];
  
    for (var i = 0; i < horrorMovies.length; i++) {
      var counter = i + 1;
      var suffix;
  
      if (i == 0) {
          suffix = "st";
      }
      else if (i == 1) {
          suffix = "nd";
      }
      else if (i == 2) {
          suffix = "rd";
      }
      else {
          suffix = "th";
      }
  
      console.log("My " + counter + suffix + " favorite recent horror movies is " + horrorMovies[i]);

      document.getElementById("showMore").innerHTML="My " + counter + suffix + " favorite recent horror movies is " + horrorMovies[i];

  }
}