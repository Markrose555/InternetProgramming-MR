<?php
//Mark Ruzinov, ID 4187
  if (isset($_GET['w'])){
	   $w = $_GET['w'];
  }
  if (isset($_GET['h'])){
	   $h = $_GET['h'];
  }
  if (isset($_GET['l'])){
     $l = $_GET['l'];
  }
  if (isset($_GET['t'])){
     $t = $_GET['t'];
  }
  else{
    $w = $h = $l = $t = 0;
  }
?>
<html>
<head>
</head>
<body>
  <form action="divDimensions.php" method="GET">
		<label>Width:</label> <input type="range" min="0" max="500" name="w" id="w" value="<?php echo $w;?>" oninput="wOutput.value = w.value">
    <output name="wOutput"></output>px <br />
		<label>Height:</label> <input type="range" min="0" max="500" name="h" id="h" value="<?php echo $h;?>" oninput="hOutput.value = h.value" >
    <output name="hOutput"></output>px <br />
    <label>Left Offset:</label> <input type="range" min="0" max="500" name="l" id="l" value="<?php echo $l;?>" oninput="lOutput.value = l.value" >
    <output name="lOutput"></output>px <br />
    <label>Top Offset:</label> <input type="range" min="0" max="500" name="t" id="t" value="<?php echo $t;?>" oninput="tOutput.value = t.value" >
    <output name="tOutput"></output>px <br /><br />
		<input type="submit" value="Refresh Box Shape">
  </form>
  <div style="background-color:black; width:<?php echo $w; ?>px; height:<?php echo $h; ?>px; margin-left:<?php echo $l; ?>px; margin-top:<?php echo $t; ?>px;" />
</body>
</html>
