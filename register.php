<?php
// Replace these values with your actual database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST["name"];
$lname = $_POST["lname"];
$emailid = $_POST["emailid"];
$password = $_POST["password"];
$password1=$_POST["password1"];
$phno = $_POST["phno"];
$date= $_POST["date"];
$gender = $_POST["gender"];
$s_add1= $_POST["s_add1"];
$s_add2 = $_POST["s_add2"];
$country = $_POST["country"];
$city = $_POST["city"];
$district = $_POST["district"];
$number=$_POST["number"];
$abtu = $_POST["abtu"];
$image=$_FILES['pic']['name'];
$tmp_name=$_FILES['pic']['tmp_name'];

// Validate and sanitize form data (you may need to improve this based on your requirements)
move_uploaded_file($tmp_name,"uploads/$image");
// Insert data into the database
$sql = "INSERT INTO users (name, lname,emailid,password,password1,phno,date,gender,s_add1,s_add2,country,city,district,number,abtu,pic) VALUES ('$name', '$lname','$emailid','$password','$password1','$phno','$date','$gender','$s_add1','$s_add2','$country','$city','$district','$number','$abtu','$image')";

if ($conn->query($sql) === TRUE) {
    header("Location:index.html");
} else {
    echo "Try Again";
}

$conn->close();

?>