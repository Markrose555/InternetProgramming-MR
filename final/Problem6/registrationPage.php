<?php
//Mark Ruzinov, ID 4187
global $error;
if($_SERVER["REQUEST_METHOD"] == "POST") {
  if (isset($_POST['agreed'])){
    define('DB_SERVER', 'localhost:3306');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    define('DB_DATABASE', 'finalExam4187');
    $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);

  	if (isset($_POST['name'])){
  		$name = $_POST['name'];
  	}
  	if (isset($_POST['username'])){
  		$username = $_POST['username'];
  	}
  	if (isset($_POST['password'])){
  		$password = $_POST['password'];
  	}
  	if (isset($_POST['city'])){
  		$city = $_POST['city'];
  	}
  	$type = $_POST['type'];
    $sql = "INSERT INTO registrations (Name, Username, Password, City, UserType) VALUES('{$name}', '{$username}', '{$password}', '{$city}', '{$type}');";
  	if(mysqli_query($db,$sql)){
          $error = "New record created successfully";
      }else{
          $error = "Error: " . $sql . "<br>" . $db->error;
      }
  	mysqli_close($db);
  }
  else{
    $error = "You did not agree to the user license agreement.";
  }
}
?>
<html>
<head>
	<title>User Registration</title>
</head>
<body>
	<form action="" method="post" >
    <label>Name:</label>
    <input type="text" name="name"><br /><br />
    <label>Username:</label>
    <input type="text" name="username"><br /><br />
    <label>Password:</label>
    <input type="password" name="password"><br /><br />
    <label>City:</label>
    <select name="city">
      <option value="Skopje">Skopje</option>
      <option value="Veles">Veles</option>
      <option value="Kumanovo">Kumanovo</option>
      <option value="Prilep">Prilep</option>
      <option value="Stip">Stip</option>
    </select><br /><br />
    <label>Type of User:</label>
    <input type="radio" name="type" value="free" required>Free</input>
    <input type="radio" name="type" value="basic">Basic</input>
    <input type="radio" name="type" value="premium">Premium</input><br /><br />
    <label>Do you agree to the End User License Agreement?:</label>
    <input type="checkbox" name="agreed"><br /><br />
    <input type="submit" value="Submit">
</form>
<p><?php echo $error; ?></p>
</body>
</html>
