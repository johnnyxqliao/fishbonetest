<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
    <head>
       <script type="text/javascript" src="./jtopo/jTopo.js"></script>
       <script type="text/javascript" src="./jtopo/jquery-min.js"></script>
    </head>
    <body>
   <canvas id="canvas" width="1000" height="600" ></canvas>
<script>
$(document).ready(function(){
	 
	var canvas = document.getElementById('canvas');            
    var stage = new JTopo.Stage(canvas);
    //显示工具栏
    var scene = new JTopo.Scene(stage);
    scene.background = 'http://www.jtopo.com/demo/img/bg.jpg';
    
    var node = new JTopo.Node("Hello");                            
    node.setLocation(50, 270);
    
    var node1 = new JTopo.Node("Hello");
    node1.setLocation(200, 270);
    
    var linkSlash = new JTopo.Link(node, node1);
    scene.add(linkSlash);
   	scene.add(node);
    scene.add(node1);
	
});
</script>

       <textarea id="jtopo_textfield" style="display:none;width: 60px;position: absolute;" onkeydown="if(event.keyCode==13)this.blur();"></textarea>
    </body>
</html>
