<?php
//Mark Ruzinov, ID 4187
  session_start();
  if($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $_SESSION['sIndex'] = $id;
    //takes us to next page
    header("location: session-result.php");
  }
?>
<html>
<head>
</head>
<body>
  <form action="" method="post">
    <label>Your ID:</label>
    <input type="text" id="id" name="id"><br><br>
    <button type="submit">Submit</button>
  </form>
</body>
</html>
