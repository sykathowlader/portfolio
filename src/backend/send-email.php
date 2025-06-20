<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

// CORS headers
$allowed_origins = ['http://localhost:3000', 'https://sykat.com'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Read JSON input
    $input = json_decode(file_get_contents('php://input'), true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['success' => false, 'message' => 'Invalid JSON input']);
        exit;
    }

    // Validate and sanitize input
    $name = htmlspecialchars($input['name'] ?? '');
    $email = filter_var($input['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($input['message'] ?? '');

    if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Please fill in all fields correctly']);
        exit;
    }

    // Additional validation for input length
    if (strlen($name) > 100 || strlen($email) > 100 || strlen($message) > 1000) {
        echo json_encode(['success' => false, 'message' => 'Input too long']);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Gmail SMTP settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = '77scema77@gmail.com';
        $mail->Password = 'ipmy cdeg kfhm qsoc';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email settings
        $mail->setFrom($email, $name);
        $mail->addAddress('77scema77@gmail.com');
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "<h3>New Message from Contact Form</h3>
                       <p><strong>Name:</strong> $name</p>
                       <p><strong>Email:</strong> $email</p>
                       <p><strong>Message:</strong><br>$message</p>";
        $mail->AltBody = "Name: $name\nEmail: $email\nMessage: $message";

        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
    } catch (Exception $e) {
        $error_message = 'Failed to send message: ' . $mail->ErrorInfo;
        echo json_encode(['success' => false, 'message' => $error_message]);
        file_put_contents('error.log', date('Y-m-d H:i:s') . ' - ' . $error_message . PHP_EOL, FILE_APPEND);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>