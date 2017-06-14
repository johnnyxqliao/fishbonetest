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

<!--    http://www.jtopo.com/demo/img/bg.jpg -->
<script>
	 
	var canvas = document.getElementById('canvas');            
    var stage = new JTopo.Stage(canvas);
    //显示工具栏
    var scene = new JTopo.Scene(stage);
    scene.background = 'http://www.jtopo.com/demo/img/bg.jpg';
    
    var cloudNode = new JTopo.Node('root');
    cloudNode.setSize(30, 10);
    cloudNode.setLocation(100,100);            
    cloudNode.layout = {type: 'tree', width:180, height: 100}
    scene.add(cloudNode);
    
    var tree1 = new JTopo.Node("tree1");   
/*     tree1.rotate =Math.PI/3; */
    tree1.setSize(35, 20);
    tree1.setLocation(200, 380);
    scene.add(tree1);
    
    var tree2 = new JTopo.Node("tree2");
/*     tree2.rotate =1.2; */
    tree2.setSize(20, 20);
    tree2.setLocation(300, 460);
    scene.add(tree2);
    
     var linkSlash1 = new JTopo.Link(cloudNode, tree1);
    var linkSlash2 = new JTopo.Link(cloudNode, tree2); 
    
     var link = new JTopo.FlexionalLink(tree1, tree2, 50, 0, 1.2);
    link.direction = 'horizontal' || 'horizontal';
    
    scene.add(link); 
    scene.add(linkSlash1);
    scene.add(linkSlash2); 
/*      JTopo.layout.layoutNode(scene, cloudNode, true);  */
    
    
    
    var currentNode = null;


var nodearray = new Array();

cloudNode.addEventListener('mousedown', function(event){
    currentNode = this;
    nodearray.push({
    	x: currentNode.x,
        y: currentNode.y
    });
    console.log("当前节点是："+currentNode.x+","+currentNode.y);
/*     handler(event); */
});
tree2.addEventListener('mouseup', function(event){
    currentNode = this;
    handler(event);
});
tree1.addEventListener('mouseup', function(event){
    currentNode = this;
    handler(event);
});

scene.addEventListener('mouseup', function(e){
    if(e.target && e.target.layout){
    	
        JTopo.layout.layoutNode(scene, e.target, nodearray[nodearray.length-1]); 
        console.log("当前节点是："+nodearray[nodearray.length-1].x+","+nodearray[nodearray.length-1].y);
        console.log("移动之后的节点是："+e.target.x+","+e.target.y);
    }                
});



function addNode(){
	var left = currentNode.getBound().left;//获取当前节点的横纵坐标以及id信息
    var top = currentNode.getBound().top;
    alert("当前节点的横坐标是："+left+"\n"+"当前节点的纵坐标是："+top);
	console.log("当前节点的横坐标是："+left+"\n"+"当前节点的纵坐标是："+top);
}
stage.click(function(event){
    if(event.button == 0){
        $("#contextmenu").hide();
    }
});

function handler(event) {
    if (event.button == 2) {
        $("#contextmenu").css({
            top: event.pageY,
            left: event.pageX
        }).show();
    }
}
function deleteNode(){
	scene.remove(currentNode);
}






</script>
            <ul id="contextmenu" style="display:none;">
                <li>
                    <a  href="javascript:addNode()">添加子节点</a>
                </li>
                <li>
                    <a href="javascript:deleteNode()">删除节点</a>
                </li>
                <li>
                    <a>撤销</a>
                </li>
            </ul>
       <textarea id="jtopo_textfield" style="display:none;width: 60px;position: absolute;" onkeydown="if(event.keyCode==13)this.blur();"></textarea>
    </body>
</html>
