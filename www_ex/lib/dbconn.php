<?
    $connect=mysql_connect( "localhost", "st7174", "1234") or  
        die( "SQL server에 연결할 수 없습니다."); 

    mysql_select_db("st7174_db",$connect);
?>
