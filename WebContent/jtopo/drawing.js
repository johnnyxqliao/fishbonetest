               //文本可编辑函数
                CanvasRenderingContext2D.prototype.wrapText = function(str,x,y){
				var textArray = str.split('\n');
				console.log(textArray)
				
				if(textArray==undefined||textArray==null)return false;
				var rowCnt = textArray.length;
				var i = 0,imax  = rowCnt,maxLength = 0;maxText = textArray[0];
				for(;i<imax;i++){
					var nowText = textArray[i],textLength = nowText.length;
					if(textLength >=maxLength){
						maxLength = textLength;
						maxText = nowText;
					}
				}
				var maxWidth = this.measureText(maxText).width;
				var lineHeight = this.measureText("元").width;
				for(var j= 0;j<textArray.length;j++){
					var words = textArray[j];
					this.fillText(words,-(maxWidth/2),y-textArray.length*lineHeight/2);
					y+= lineHeight;
				}
			  };    
					JTopo.Node.prototype.paintText = function(a){
						var b = this.text;
						if (null != b && "" != b) {
							a.beginPath(),
									a.font = this.font;
							var c = a.measureText(b).width,
									d = a.measureText("田").width;
							a.fillStyle = "rgba(" + this.fontColor + ", " + this.alpha + ")";
							var e = this.getTextPostion(this.textPosition, c, d);
							a.wrapText(b, e.x, e.y),
									a.closePath()
						}
                  }	 
					

					
					
                     //定义一个画布
                     var canvas = document.getElementById('canvas');//获取画布id
                     
                     CanvasRenderingContext2D.prototype.wrapText = function(str,x,y){
         				var textArray = str.split('\n');
         				if(textArray==undefined||textArray==null)return false;
          
         				var rowCnt = textArray.length;
         				var i = 0,imax  = rowCnt,maxLength = 0;maxText = textArray[0];
         				for(;i<imax;i++){
         					var nowText = textArray[i],textLength = nowText.length;
         					if(textLength >=maxLength){
         						maxLength = textLength;
         						maxText = nowText;
         					}
         				}
         				var maxWidth = this.measureText(maxText).width;
         				var lineHeight = this.measureText("元").width;
         				x-= lineHeight*2;
         				for(var j= 0;j<textArray.length;j++){
         					var words = textArray[j];
         					this.fillText(words,-(maxWidth/2),y-textArray.length*lineHeight/2);
         					y+= lineHeight;
         				}
         			  };
                     
                     var stage = new JTopo.Stage(canvas);//在画布上新建舞台
                     var scene = new JTopo.Scene(stage);//将舞台添加到场景中
                     scene.background = './images/background.jpg';//设置背景图片
                        
                     //绘制鱼头 
                     var fishBrain = new JTopo.Node();
                     fishBrain.text = '待解决问题';// 文字
                     fishBrain.textPosition = 'Middle_Center';// 文字居中
                     fishBrain.textOffsetY =8;
                     fishBrain.font = '18px 微软雅黑';// 字体
                     fishBrain.fontColor = "0,0,0";
                     fishBrain.setLocation(800, 220);// 位置
                     fishBrain.setSize(180, 60);// 尺寸
                     fishBrain.borderRadius = 10;// 圆角
                     fishBrain.borderWidth = 2;// 边框的宽度
                     fishBrain.fillColor = '255,222,173';//边框颜色 
                     fishBrain.dragable = false;
                     scene.add(fishBrain);

                     //绘制鱼身
                     var fishstart = new JTopo.Node();
                     fishstart.setLocation(10, 235);
                     var link = new JTopo.Link(fishstart,fishBrain);
                     link.lineWidth = 3;
                     link.strokeColor = '0,0,0';
                     scene.add(link);
/* 
 *文本节点连线函数
 */                
                function linkNode(nodeA, nodeB) {

                    nodeA.textPosition = 'Middle_Center';
                    nodeA.font = 'bold 16px 微软雅黑';
                    nodeA.setSize(10, 10);
                    nodeA.dragable = false;

                    nodeB.dragable = false;
                    var link = new JTopo.Link(nodeA,nodeB);
                    link.lineWidth = 1;
                    link.arrowsRadius = 15;
                    link.strokeColor = '0,0,0';
                    scene.add(link);
                    return link;
                }
/* 
 *定义六个文字节点函数 
 */
                function nodetext(x, y, text) {
                    var nodetext = new JTopo.Node();
                    
                    if (y>220){
                    	nodetext.setLocation(x+52, y-100);
                    	nodetext.rotate = -1.15;
                    	console.log("asdfa");
                    }else{
                    	nodetext.setLocation(x+70, y+130);
                    	nodetext.rotate = 1.135;
                    }
                    nodetext.text = text;// 文字
                    nodetext.textPosition = 'Middle_Center';// 文字居中
                    nodetext.textOffsetY =8;
                    nodetext.font = '16px 微软雅黑';// 字体
                    nodetext.fontColor = "0,0,0";
                    nodetext.setSize(120, 50);// 尺寸
//                    nodetext.borderRadius = 20;// 圆角
                    nodetext.borderWidth = 2;// 边框的宽度
                    nodetext.fillColor = '0,191,255';//填充颜色 
                    nodetext.dragable = false;
                    scene.add(nodetext);
                }
/* 
 *定义鱼骨节点函数（用于与文本节点连线） 
 */
                function node(x, y) {
                    var node = new JTopo.Node();
                    node.setLocation(x, y);
                    return node;
                    scene.add(node);
                }


                //添加节点
                var n1 = node(75, 350);
                var n2 = node(120, 220);//y=-2.5*x+520，人员

                var n3 = node(191, 120);
                var n4 = node(245, 245);//y=2.35*x-330.75，机器

                var n5 = node(325, 350);
                var n6 = node(370, 220);//y=-2.5*x+1145，物料

                var n7 = node(441, 120);
                var n8 = node(495, 245);//y=2.35*x-918.25，方法

                var n9 = node(575, 350);
                var n10 = node(620, 220);//y=-2.5*x+1770，环境

                var n11 = node(692, 120);
                var n12 = node(745, 245);//y=2.35*x-1508.1，测量

                //连线
                linkNode(n1, n2);
                linkNode(n3, n4);
                linkNode(n5, n6);
                linkNode(n7, n8);
                linkNode(n9, n10);
                linkNode(n11, n12);

                //添加文字
                nodetext(-20, 470, "人 员");
                nodetext(110, -10, "机 器");
                nodetext(230, 470, "物 料");
                nodetext(360, -10, "方 法");
                nodetext(480, 470, "环 境");
                nodetext(610, -10, "测 量");                
                

/* 
 *读取excel部分 
 */
                var X = XLSX;
                var XW = {
                    /* worker message */
                    msg: 'xlsx',
                    /* worker scripts */
                    rABS: 'js/xlsxworker2.js',

                };

                var rABS = typeof FileReader !== "undefined" && typeof FileReader.prototype !== "undefined" && typeof FileReader.prototype.readAsBinaryString !== "undefined";
                //用来把文件读入内存，并且读取文件中的数据。readAsBinaryString/readAsText/readAsDataURL,typeof判断对象类型是否为未定义

                var use_worker = typeof Worker !== 'undefined';
                if (!use_worker) {
                    document.getElementsByName("useworker")[0].disabled = true;
                    document.getElementsByName("useworker")[0].checked = false;
                }

                var wtf_mode = false;

                function fixdata(data) {
                    var o = ""
                      , l = 0
                      , w = 10240;
                    for (; l < data.byteLength / w; ++l)
                        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
                    o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
                    return o;
                }

                function ab2str(data) {
                    var o = ""
                      , l = 0
                      , w = 10240;
                    for (; l < data.byteLength / w; ++l)
                        o += String.fromCharCode.apply(null, new Uint16Array(data.slice(l * w, l * w + w)));
                    o += String.fromCharCode.apply(null, new Uint16Array(data.slice(l * w)));
                    return o;
                }

                function s2ab(s) {
                    var b = new ArrayBuffer(s.length * 2)
                      , v = new Uint16Array(b);
                    for (var i = 0; i != s.length; ++i)
                        v[i] = s.charCodeAt(i);
                    return [v, b];
                }

                function xw_noxfer(data, cb) {
                    var worker = new Worker(XW.noxfer);
                    worker.onmessage = function(e) {
                        switch (e.data.t) {
                        case 'ready':
                            break;
                        case 'e':
                            console.error(e.data.d);
                            break;
                        case XW.msg:
                            cb(JSON.parse(e.data.d));
                            break;
                        }
                    }
                    ;
                    var arr = rABS ? data : btoa(fixdata(data));
                    worker.postMessage({
                        d: arr,
                        b: rABS
                    });
                }

                function xw_xfer(data, cb) {
                    var worker = new Worker(rABS ? XW.rABS : XW.norABS);
                    worker.onmessage = function(e) {
                        switch (e.data.t) {
                        case 'ready':
                            break;
                        case 'e':
                            console.error(e.data.d);
                            break;
                        default:
                            xx = ab2str(e.data).replace(/\n/g, "\\n").replace(/\r/g, "\\r");
                            cb(JSON.parse(xx));
                            break;
                        }
                    }
                    ;
                    if (rABS) {
                        var val = s2ab(data);
                        worker.postMessage(val[1], [val[1]]);
                    } else {
                        worker.postMessage(data, [data]);
                    }
                }

                function xw(data, cb) {
                    transferable = true;
                    if (transferable)
                        xw_xfer(data, cb);
                    else
                        xw_noxfer(data, cb);
                }

                function to_json(workbook) {
                    var result = {};
                    workbook.SheetNames.forEach(function(sheetName) {
                        var roa = X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                        if (roa.length > 0) {
                            result[sheetName] = roa;
                        }
                    });
                    return result;
                }

/* 
 *获取表格数据并将其转化为json数据 
 */
                var excelData = null;
                var global_wb;
                function process_wb(wb) {
                    global_wb = wb;
                    var output = JSON.stringify(to_json(wb), 3, 3);

                    //将表格中获取的数据发送到前台界面
                    excelData = JSON.parse(output);

                    //获取表1的数据
                    var SheetNum1 = excelData.Sheet1.length;
                    var Coordinate = new Array();
                    Coordinate[0] =0;
                    for (var i = 0; i < SheetNum1; i++) {
                    	var x = 120-(i+1)*30;
                        var y = -2.5*x + 520;

                        //定义第一级文本节点
                        var textnode = excelData.Sheet1[i].Man;
                        var excelnode = excelNode(x-50, y, textnode);
                        
                        var nullnode = new JTopo.Node();
                        if(y>220){
                        	nullnode.setLocation(x-65, y+15);
                        }else{
                        	nullnode.setLocation(x+65, y-15);
                        }
                        nullnode.setSize(1, 1);
                         scene.add(nullnode);
                        
                        var nullNode = new JTopo.Node();
                        nullNode.setLocation(x-5, y);
                        
                        var link = new JTopo.Link(nullnode, nullNode);
                        link.strokeColor = '0,0,0';
                        link.lineWidth = 1;
                        
                        Coordinate.push(x+11);
                        Coordinate.push(y+15);
                        if (Coordinate[2*i]!==0){
                        	var nullSlashNode = new JTopo.Node();
                        	var xSlashNode = Coordinate[2*i-1];
                        	var ySlashNode = Coordinate[2*i];
                        	console.log(ySlashNode);
                        	nullSlashNode.setLocation(xSlashNode, ySlashNode);
                        	nullSlashNode.setSize(1, 1);
                            scene.add(nullSlashNode);
                        	var linkSlash = new JTopo.Link(nullSlashNode, nullNode);
                        	linkSlash.strokeColor = '0,0,0';
                        	linkSlash.lineWidth = 1;
                        	scene.add(linkSlash);
                        }
                        scene.add(link);
                    }
                }
                
/* 
 * 定义从excel中读取数据，并向画布中添加节点函数
 */
                var currentNode = null;
                function excelNode(x, y, text){
                	//定义导入节点的基本属性
                	var excelNode = new JTopo.Node(text);
                	excelNode.setLocation(x, y);
                	excelNode.textPosition = 'Middle_Center';
                	excelNode.textOffsetY =5;
                	excelNode.fontColor = "0,0,0";
                	excelNode.fillColor = "255,255,255";
                	excelNode.font = '14px 微软雅黑';
                	excelNode.setSize(50, 15);
                	excelNode.dragable = false;
//                  	excelNode.borderRadius = 10;
                  	excelNode.borderWidth = 0.1;
                	scene.add(excelNode);
                    //定义从excel中导入节点的右键函数
                    excelNode.addEventListener('mouseup', function(event){
                        currentNode = this;
                        handler(event);
                    });
                    stage.click(function(event){
                        if(event.button == 0){
                            $("#contextmenu").hide();
                        }
                    });
                    return excelNode;
                }
                
/* 
 *右键添加子节点方法
 */
                
                function addExcelNode(x, y, num) {
	                var str = prompt("请添加原因", "");
	                var str = lineFeed(str);
	                console.log(str);
	                var childNode = new JTopo.Node(str);
	                var xChild = (520-y)/2.5-50*num;
	                var yChild = y+35;
	                childNode.setLocation(xChild, yChild);
	                childNode.fontColor = "0,0,0";
	                childNode.textPosition = 'Bottom_Center';
	                childNode.fillColor = "255,255,255";
                	childNode.font = 'blod 13px 微软雅黑';
                	childNode.dragable = false;
                	childNode.rotate = -1.2;
                	childNode.setSize(40, 10);
	                scene.add(childNode);
	                
	                var slashLineNode1 = new JTopo.Node();
	                var x1 = xChild+4;
	                var y1 = yChild+20;
	                slashLineNode1.setLocation(x1, y1);
	                slashLineNode1.setSize(1, 1);
	                scene.add(slashLineNode1);
	                var slashLineNode2 = new JTopo.Node();
	                if(y>220){
	                	var y2 = y1-55;
	                	var x2 = x1+0;
	                	slashLineNode2.setLocation(x2, y2);
	                }else{
	                	slashLineNode2.setLocation(x2, y2);
	                }
	                var slashLine = new JTopo.Link(slashLineNode1, slashLineNode2);
	                slashLine.strokeColor = '0,0,0';
	                slashLine.lineWidth = 1;
	                scene.add(slashLine);
	                num += 1;
	                
                    //定义从excel中导入节点的右键函数
                    childNode.addEventListener('mouseup', function(event){
                        currentNode = this;
                        handler(event);
                    });
                    stage.click(function(event){
                        if(event.button == 0){
                            $("#contextmenu").hide();
                        }
                    });
                    return [x2, y2, num];
	             }
                
/*
 * 超过四个节点换行函数
 */                
                function lineFeed(string){
                	var lineFeed = string.split("");
                	var length = lineFeed.length;
                	var String = '';
                	var count = 0;
                	for (var i=0; i<length; i++){
                		count +=1;
                		String +=lineFeed[i];
                		if(count%5==0){
                			String +='\n';
                		}
                	}
                	console.log(String);
                	return String;
                }
                
                
/* 
 *定义从excel中导出数据的连线函数
 */
 
                function excelLinkNode(excelNodeA, excelNodeB){
                	var textLink = new JTopo.Link(excelNodeA,excelNodeB);
                	textLink.arrowsRadius = 4;
                    textLink.lineWidth = 1;
                    textLink.strokeColor = '0,0,0';
                    scene.add(textLink);
                    return textLink;
                }
                function handler(event) {
                    if (event.button == 2) {
                        $("#contextmenu").css({
                            top: event.pageY,
                            left: event.pageX
                        }).show();
                    }
                }
/* 
 *右键删除节点函数 
 */             
                function deleteNode(){
                	scene.remove(currentNode);
                    currentNode = null;
                    $("#contextmenu").hide(); 
              	console.log("删除节点");
                }
                
/* 
 *右键添加子节点函数
 */               

                var Node = new Array();
                Node[0] = 0;
                Node[1] = 0;
                Node[2] = 0;
                Node[3] = 0;
                function addNode() {
                	var num = 1;//初始化节点右键次数
                	var countNode = 0;
                    var len = Node.length;
                	var left = currentNode.getBound().left;//获取当前节点的横纵坐标
                    var top = currentNode.getBound().top;
                    
                    //输出与该节点对应的num,即该记录该节点右键次数
                    var array1 = new Array();
                    for (var i=0; i<len; i+=4){
                    	console.log(i);
                    array1[i/4] = Node[i];
                    }
                    var numnode = array1.indexOf(left);
                    console.log(numnode);
                    if(numnode==-1){
                    	num = 1;
                    	Node.push(left);
                    	Node.push(num);
                    	Node.push((520-top)/2.5-50+4);
                    	Node.push(top);
                    	numnode = len/4;
                    }else{
                    	num = Node[numnode*4+1];
                    }
                    console.log("这是更新前的数组："+Node);
                    var addNode = addExcelNode(left, top, num);
                    
                    
                    //将每次选择的节点存放在一个数组中，用于判断当前一共添加了几个节点
	                Node[numnode*4+1] = addNode[2];//更新num数值
	                if(addNode[2]>2){
	                	var nullSlashNode = new JTopo.Node();//创建两个节点，并连线
                		nullSlashNode.setLocation(Node[numnode*4+2]+15, Node[numnode*4+3]+15);
                		console.log("上一个点的横纵坐标分别是"+Node[numnode*4+2]+Node[numnode*4+3]);
                		nullSlashNode.setSize(1, 1);
	                    scene.add(nullSlashNode);
	                    
	                    var nullSlashNode1 = new JTopo.Node();
                		nullSlashNode1.setLocation(addNode[0]+15, addNode[1]+15);
                		console.log("当前点的横纵坐标分别是"+addNode[0]+addNode[1]);
                		nullSlashNode1.setSize(1, 1);
                		
                		var linkSlash = new JTopo.Link(nullSlashNode, nullSlashNode1);
	                	linkSlash.strokeColor = '0,0,0';
	                	linkSlash.lineWidth = 1;
	                	scene.add(linkSlash);
	                	//更新数组中的x2，y2
	                	Node[numnode*4+2] = addNode[0];
	                	Node[numnode*4+3] = addNode[1];
	                	
	                }
                    num = 1;
                    console.log("这是更新后的数组："+Node);
                    
                    currentNode = null;
                    $("#contextmenu").hide();
                }
                
/* 
 *读取excel内容函数 的主函数入口
 */                
                
                var xlf = document.getElementById('xlf');
                function handleFile(e) {
                    rABS = true;
                    use_worker = true;
                    var files = e.target.files;
                    var f = files[0];
                    {
                        var reader = new FileReader();
                        var name = f.name;
                        reader.onload = function(e) {
                            var data = e.target.result;
                            if (use_worker) {
                                xw(data, process_wb);
                            } else {
                                var wb;
                                if (rABS) {
                                    wb = X.read(data, {
                                        type: 'binary'
                                    });
                                } else {
                                    var arr = fixdata(data);
                                    wb = X.read(btoa(arr), {
                                        type: 'base64'
                                    });
                                }
                                process_wb(wb);
                            }
                        }
                        ;
                        if (rABS)
                            reader.readAsBinaryString(f);
                        else
                            reader.readAsArrayBuffer(f);
                    }
                }

                if (xlf.addEventListener)
                    xlf.addEventListener('change', handleFile, false);