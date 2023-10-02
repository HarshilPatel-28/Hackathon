<?php
 header('Access-Control-Allow-Origin: *');
 $server = "localhost";
 $username = "root";
 $password = "";
 
 $conn = mysqli_connect($server,$username,$password);

 if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
 }
 else{
    $F_name = $_POST['F_name'];
    $M_name = $_POST['M_name'];
    $L_name = $_POST['L_name'];
    $Gender = $_POST['Gender'];
    $Email = $_POST['Email'];
    $Mobile = $_POST['Mobile'];
    $Address = $_POST['Address'];
    $State = $_POST['State'];
    $City = $_POST['City'];
    $Adv_name = $_POST['Adv_name'];
    $Adv_id = $_POST['Adv_id'];
    $Adv_Mob = $_POST['Adv_Mob'];

$sql = "INSERT INTO `pre_trial`.`client_details` (`F_name` , `M_name` ,`L_name`, `Gender`,`Email`,`Mobile`,`Address`,`State`,`City`,`Adv_name`,`Adv_id`,`Adv_Mob` ) VALUES ('$F_name', '$M_name' ,'$L_name','$Gender','$Email','$Mobile','$Address','$State','$City','$Adv_name','$Adv_id','$Adv_Mob'); ";
$res = mysqli_query($conn, $sql);

if($res){
    echo "success!";
}
else{
    echo "Error!";

}
$conn->close();

 }

?>