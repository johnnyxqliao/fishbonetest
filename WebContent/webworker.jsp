<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Worker</title>  
    <script src="jtopo/jquery-min.js" type="text/javascript"></script>
<script>  
        $(function () {  
var worker1 = new Worker('testjs/webworker1.js');  
            worker1.onmessage = function (event) {  
                $('#result').html("Wow, the data is" + event.data);  
            };  
  
new Worker('testjs/webworker2.js').onmessage = function () {  
                $('#Div1').html("Wow, the 2nd worker data is" + event.data);  
            }  
        });  
</script>  
</head>  
<body>  
    <div>  
        <div id="result">  
        </div>  
        <div id="Div1">  
        </div>  
    </div>  
</body>  

</body>
</html>