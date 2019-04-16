    <?php
    $errorMSG = "";
    // FirstNAME
    if (empty($_POST["firstname"])) {
        $errorMSG = "Name is required ";
    } else {
        $name = $_POST["firstname"];
    }
    // LastNAME
    if (empty($_POST["lastname"])) {
        $errorMSG = "Surname is required ";
    } else {
        $name = $_POST["lastname"];
    }
    // EMAIL
    if (empty($_POST["email"])) {
        $errorMSG .= "Email is required ";
    } else {
        $email = $_POST["email"];
    }
    // Gender
    if (empty($_POST["gender"])) {
        $errorMSG = "Gender is required ";
    } else {
        $name = $_POST["gender"];
    }
    // Payment
    if (empty($_POST["payment1"])) {
        $errorMSG = "Payment is required ";
    } else {
        $name = $_POST["payment1"];
    }
    
    // send info to MySQL
    $result = mysql_query("INSERT INTO table (firstname, lastname, email, gender, payment1) VALUES ('$firstname', '$lastname', '$email','$gender','$payment1')");
    // redirect to success page
    if ($result && $errorMSG == "true"){
       echo "success";
    }else{
        if($errorMSG == ""){
            echo "Something went wrong :(";
        } else {
            echo $errorMSG;
        }
    }
    ?>