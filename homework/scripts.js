var isClicked = false;
function calcArea() {
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var sideC = parseFloat(document.getElementById("sideC").value);
    var perimeter = (sideA + sideB + sideC) / 2;
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)){
      document.getElementById("area").innerHTML = 'Please enter values in all three fields!';
      return;
    }
    else{
      var area = Math.sqrt(perimeter * ((perimeter - sideA) * (perimeter - sideB) * (perimeter - sideC)));
      document.getElementById("area").innerHTML = area + ' cm';
    }
}

function startLoop(id){
  var oldId;

  //var textNode = document.getElementById("animateArea");
  //console.log(oldId);
  if (typeof id !== 'undefined'){
  /*if (typeof id === 'undefined'){
    console.log("test");
    document.getElementById("animateArea").innerHTML = 'Please enter a value first';
    return;
  }*/

  //cannot check for type because getelement will always be a type object
  //therefore it is (to my knowledge) impossible or not easy to check whether the box was left empty.
  //that is why there is no check for this one, sorry about that.

  if(isClicked && oldId != id){
    //prevents re-adding previous string when button is clicked again
    return;
  }
  else{
    //logic to prevent re-clicking button
    isClicked = true;
    oldId = id;
    //calls animate if everything is okay
    animate_string(id);
  }
}
}

function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = document.getElementById("animateArea");
    textNode.innerHTML = element.value;
    var text = textNode.innerHTML;

    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        document.getElementById("animateArea").innerHTML = text;
    }, 440); //time in ms
}

function guessNumberVisibility() {
  var query = document.getElementById("query");
  var guess = document.getElementById("guess");
  var buton = document.getElementById("guessBut");
  var result = document.getElementById("result");
  //toggle visibility when button is clicked again
  if (query.style.display === "none"){
    query.style.display = "block";
    guess.style.display = "block";
    buton.style.display = "block";
    result.style.display = "block";
  }
  else {
    query.style.display = "none";
    guess.style.display = "none";
    buton.style.display = "none";
    result.style.display = "none";
  }
}

function check(){
    var guess = parseInt(document.getElementById("guess").value);
    var num = Math.ceil(Math.random() * 10);
    //check whether box was left blank
    if (document.getElementById("guess").value == '')
        document.getElementById('result').innerHTML = 'Please enter a number!';
    else if (guess == num)
        document.getElementById('result').innerHTML = 'Matched';
    else
        document.getElementById('result').innerHTML = 'Not matched, the number was ' + num;
}

function dateCalc() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    //add leading 0 to numbers before 10
    if (dd < 10){
        dd = '0' + dd;
    }
    if (mm < 10){
        mm = '0' + mm;
    }
    //set p elements to final values
    document.getElementById('date1').innerHTML = ("Month - Day - Year\n" + mm + "-" + dd + "-" + yyyy);
    document.getElementById('date2').innerHTML = ("Month / Day / Year\n" + mm + "/" + dd + "/" + yyyy);
    document.getElementById('date3').innerHTML = ("Day - Month - Year\n" + dd + "-" + mm + "-" + yyyy);
    document.getElementById('date4').innerHTML = ("Day / Month / Year\n" + dd + "/" + mm + "/" + yyyy);
}
