<?php
// Check if the form was submitted with a username and password
if (isset($_POST['username']) && isset($_POST['password'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Check if the username and password are correct
  if ($username === 'admin' && $password === 'password') {
    // Redirect the user to admin.html
    header('Location: admin.html');
    exit;
  } else {
    // If the username and password are incorrect, display an error message
    echo 'Invalid username or password';
  }
}
?>
