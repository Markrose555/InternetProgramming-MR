//Mark Ruzinov ID 4187
var startTime = Math.floor(Date.now() / 1000); //starts counting as soon as page is loaded

function quiz(){
  var q1Result;
  var q2Result;
  var q3Result;
  var numCorrect = 0;
  var now = Math.floor(Date.now() / 1000);
  var timeElapsed = now - startTime;

  if(document.getElementById("fname").value.length == 0){
    console.log("empty");
    document.getElementById("result").innerHTML = "Please enter your Name.";
    return;
  }

  if(document.getElementById("id").value.length == 0){
    document.getElementById("result").innerHTML = "Please enter your ID.";
    return;
  }

  if (document.getElementById("script").checked){
    console.log("Correct Q1");
    numCorrect++;
    q1Result = true;
  }

  if ((document.getElementById("f").checked && document.getElementById("none").checked) && (document.getElementById("t").checked == false && document.getElementById("both").checked == false)){
    console.log("Correct Q2");
    numCorrect++;
    q2Result = true;
  }

  if (document.getElementById("alert").checked){
    console.log("Correct Q3");
    numCorrect++;
    q3Result = true;
  }

  if(q1Result && q2Result && q3Result){
    document.getElementById("result").innerHTML = "All questions are correct!";
    document.getElementById("timetaken").innerHTML = "It took you " + timeElapsed + " seconds to complete the quiz.";
  }
  else{
    if(numCorrect == 1){
      //different wording for only 1 question right
      document.getElementById("result").innerHTML = "One or more questions are incorrect.<br>You got " + numCorrect + " question right.";
      document.getElementById("timetaken").innerHTML = "It took you " + timeElapsed + " seconds to complete the attempt.";
    }
    else{
      document.getElementById("result").innerHTML = "One or more questions are incorrect.<br>You got " + numCorrect + " questions right.";
      document.getElementById("timetaken").innerHTML = "It took you " + timeElapsed + " seconds to complete the attempt.";
    }
  }
  numCorrect = 0;
}

function reserve(){
  if(document.getElementById("sname").value.length < 10){
    document.getElementById("status").innerHTML = "Please enter your last name. (Minimum 10 characters)";
    return;
  }
  if(document.getElementById("fname").value.length == 0){
    document.getElementById("status").innerHTML = "Please enter your first name.";
    return;
  }
  if(document.getElementById("studentid").value.length == 0){
    document.getElementById("status").innerHTML = "Please enter a Student ID.";
    return;
  }
  if(document.getElementById("email").value.length == 0){
    document.getElementById("status").innerHTML = "Please enter an email address.";
    return;
  }
  if(!document.getElementById("email").checkValidity()){
    document.getElementById("status").innerHTML = "Please enter a valid email address.";
    return;
  }

  var jsonData = {};
  jsonData["surname"] = document.getElementById("sname").value;
  jsonData["name"] = document.getElementById("fname").value;
  jsonData["studentid"] = document.getElementById("studentid").value;
  jsonData["email"] = document.getElementById("email").value;
  jsonData["notes"] = document.getElementById("notes").value;

  var formData = JSON.stringify(jsonData);
  console.log(formData);

  localStorage.setItem("contact", JSON.stringify(jsonData));

  document.getElementById("status").innerHTML = "Successfully Saved! Thank you.";
  document.getElementById("save").disabled = true;
}
