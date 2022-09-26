<?php

if($_SERVER['REQUEST_METHOD'] == "GET"){
    die('GETメソッドでアクセスされました');
}

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$gender = htmlspecialchars($_POST['gender']);
$grade = htmlspecialchars($_POST['grade']);
$studies = "";
if(isset($_POST['study']) && is_array($_POST['study'])){
    foreach($_POST['study'] as $study){
        $studies .= htmlspecialchars($study)." ";
    } 
}
$body = htmlspecialchars($_POST['body']);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>送信結果</title>
    <style>
        div.main{
            width: 60%;
            margin: 0 auto;
        }
        th,td {
            border: solid 1px gray;
            padding: 1em;
        }
        
        table {
            border-collapse:collapse;
        }
    </style>
</head>
<body>
    <div class="main">
        <table>
            <tr>
                <th>名前</th>
                <td><?=$name?></td>
            </tr>
            <tr>
                <th>Mail</th>
                <td><?=$email?></td>
            </tr>
            <tr>
                <th>学年</th>
                <td><?=$grade?></td>
            </tr>
            <tr>
                <th>性別</th>
                <td><?=$gender?></td>
            </tr>
            <tr>
                <th>学んでいる科目</th>
                <td><?=$studies?></td>
            </tr>
            <tr>
                <th>内容</th>
                <td><?=$body?></td>
            </tr>
        </table>
    </div>
    
</body>
</html>