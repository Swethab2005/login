<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $emailid = $_POST["emailid"];
    $password = $_POST["password"];

    // Add other form fields as needed

    // Perform server-side validation
    $error = false;
    $error_messages = [];
        
     if (!filter_var($emailid, FILTER_VALIDATE_EMAIL) || strlen($emailid) < 6) {
        $error = true;
        $error_messages[] = "Please enter a valid email address.";
    }

    // Validate password
    if (strlen($password) < 8) {
        $error = true;
        $error_messages[] = "Password must be at least 8 characters long.";
    }

    // If there are no errors, process the form
    if (!$error) {
        // Database connection parameters
        $servername = "localhost";
        $username = "root";
        $password_db = "";
        $database = "login";

        // Create connection
        $conn = new mysqli($servername, $username, $password_db, $database);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // SQL query to retrieve user information based on emailid
        $sql = "SELECT * FROM users WHERE emailid = '$emailid' AND password='$password'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // User found, check password
            $row = $result->fetch_assoc();

            // Use password_verify to check if entered password matches the hashed password from the database
           if ($row['emailid'] === $emailid && $row['password'] === $password) {
                echo "Login successful!";
                 header("Location: success_page.html");
                // Add further actions (e.g., redirect to a dashboard)
            } else {
                $error_messages[] = "Incorrect password. Please try again.";
            }
        } 
        else {
           $error_messages[] = "Incorrect username or password. Please try again.";
        }

        $conn->close();
    }

    // If there are errors, print them
    foreach ($error_messages as $message) {
        echo $message . "<br>";
    }
} else {
    // Redirect to the form page if accessed directly
    header("Location: success_page.html");
    exit();
}
?>
