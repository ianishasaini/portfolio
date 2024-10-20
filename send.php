<?php
if(isset($_POST['sub'])){
$name = $_POST['name'];
$email = $_POST['email'];
$num = $_POST['number'];
$comment = $_POST['comments'];
         $to = "mukulsaini015@gmail.com";
         $subject = "Test";
         
         $message = "<table border='1' cellpadding='10'><tr><td>Name</td><td>$name</td></tr>
         <tr><td>Contact Number</td><td>$num</td></tr><tr><td>Email</td><td>$email</td></tr><tr><td>Comments</td><td>$comment</td></tr></table>";
         
         $header = "From:mukulsaini015@gmail.com\r\n";
         $header .= "bcc: mukulsaini015@gmail.com\r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            echo "<script>window.location.href='thankyou.html'</script>";
         }else {
            echo "<script>alert('Message could not be sent...')</script>";
            echo "<script>window.location.href='index.html'</script>";
         }
}
?>