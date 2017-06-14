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

//定义画布、舞台以及场景
                     var canvas = document.getElementById('canvas');//获取画布id

                     var stage = new JTopo.Stage(canvas);//在画布上新建舞台
                     var scene = new JTopo.Scene(stage);//将舞台添加到场景中
                     scene.background = './images/background.jpg';//设置背景图片
                        
                     //绘制鱼头 
                     var fishBrain = new JTopo.Node();
                     fishBrain.text = '待解决问题';// 文字
                     fishBrain.id = "10";
                     fishBrain.textPosition = 'Middle_Center';// 文字居中
                     fishBrain.textOffsetY =-8;
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
 * 定义六个主骨的位置
 */                     
                     function IniLine(x1, y1, x2, y2, text){
                    	 //定义主骨上的节点
                    	 var boneNode = new JTopo.Node();
                    	 boneNode.setLocation(x1, y1);
                    	 boneNode.layout = {type: 'tree'}
                    	 scene.add(boneNode);
                    	 //定义六个相关节点的信息
                    	 var subNode = new JTopo.Node();
                    	 if (y2>220){
                    		 subNode.setLocation(x2+52, y2-100);
                    		 subNode.rotate = -1.2;
                         }else{
                        	 subNode.setLocation(x2+47, y2+90);
                        	 subNode.rotate = 1.15;
                         }
                    	 subNode.text = text;// 文字
                         subNode.textPosition = 'Middle_Center';// 文字居中
                         subNode.textOffsetY =-8;
                         subNode.font = '16px 微软雅黑';// 字体
                         subNode.fontColor = "0,0,0";
                         subNode.setSize(120, 50);// 尺寸
                         subNode.borderWidth = 2;// 边框的宽度
                         subNode.fillColor = '0,191,255';//填充颜色 
                         subNode.dragable = false;
                         scene.add(subNode);
                         //连线
                         var link = new JTopo.FlexionalLink(boneNode, subNode, 0, 0, 1.2);
                         link.lineWidth = 1;
                         link.strokeColor = '0,0,0';
                         scene.add(link);
                         return link;
                     }
                     
                     
                     var iniLineMan = IniLine(117, 220, -20, 470, "人 员");
                     var iniLineMachine = IniLine(241, 245, 110, -10, "机 器");
                     var iniLineMaterial = IniLine(367, 220, 230, 470, "物 料");
                     var iniLineMethod = IniLine(491, 245, 360, -10, "方 法");
                     var iniLineEnvironment = IniLine(617, 220, 480, 470, "环 境");
                     var iniLineMeasure = IniLine(741, 245, 610, -10, "测 量");
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
                    var Coordinate1 = new Array();
                    Coordinate1[0] =0;
                    for (var i = 0; i < SheetNum1; i++) {
                    	var x = 120-(i+1)*30;
                        var y = -2.5*x + 520;

                        //定义第一级文本节点
                        var textnode = excelData.Sheet1[i].Man;
                        var id = textnode+i;
                        var excelnode = excelNode(x-50, y, textnode, id);
                        
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
                        
                        Coordinate1.push(x+11);
                        Coordinate1.push(y+15);
                        if (Coordinate1[2*i]!==0){
                        	var nullSlashNode = new JTopo.Node();
                        	var xSlashNode = Coordinate1[2*i-1];
                        	var ySlashNode = Coordinate1[2*i];
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
                    
                    
//获取表2的数据
                    var SheetNum2 = excelData.Sheet2.length;
                    var Coordinate2 = new Array();
                    Coordinate2[0] =0;
                    for (var i = 0; i < SheetNum2; i++) {
                    	var x = 245-(i+1)*30;
                        var y = 2.35*x - 330.75;
                  //定义第二级文本节点
                    var textnode = excelData.Sheet2[i].Machine;//提取表格中的数据
                    var id = textnode+i;
                    var excelnode = excelNode(x-50, y, textnode, id);//画节点
                    
                    var nullnode = new JTopo.Node();//定义空节点，将表格中的数据节点连起来，形成下划线
                    nullnode.setLocation(x-65, y+15);
                    nullnode.setSize(1, 1);
                     scene.add(nullnode);
                    
                    var nullNode = new JTopo.Node();//下划线的第二个空节点
                    nullNode.setLocation(x-5, y);
                    
                    var link = new JTopo.Link(nullnode, nullNode);
                    link.strokeColor = '0,0,0';
                    link.lineWidth = 1;
                    
                    Coordinate2.push(x+10);
                    Coordinate2.push(y+15);
                    if (Coordinate2[2*i]!==0){
                    	var nullSlashNode = new JTopo.Node();
                    	var xSlashNode = Coordinate2[2*i-1];
                    	var ySlashNode = Coordinate2[2*i];
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
                    
                    
//获取表3的数据
                    var SheetNum3 = excelData.Sheet3.length;
                    var Coordinate3 = new Array();
                    Coordinate3[0] =0;
                    for (var i = 0; i < SheetNum3; i++) {
                    	var x = 370-(i+1)*30;
                        var y = -2.5*x + 1145;
                  //定义第二级文本节点
                    var textnode = excelData.Sheet3[i].Material;//提取表格中的数据
                    var id = textnode+i;
                    var excelnode = excelNode(x-50, y, textnode, id);//画节点
                    
                    var nullnode = new JTopo.Node();//定义空节点，将表格中的数据节点连起来，形成下划线
                    if(y>220){
                    	nullnode.setLocation(x-65, y+15);
                    }else{
                    	nullnode.setLocation(x+65, y-15);
                    }
                    nullnode.setSize(1, 1);
                     scene.add(nullnode);
                    
                    var nullNode = new JTopo.Node();//下划线的第二个空节点
                    nullNode.setLocation(x-5, y);
                    
                    var link = new JTopo.Link(nullnode, nullNode);
                    link.strokeColor = '0,0,0';
                    link.lineWidth = 1;
                    
                    Coordinate3.push(x+11);
                    Coordinate3.push(y+15);
                    if (Coordinate3[2*i]!==0){
                    	var nullSlashNode = new JTopo.Node();
                    	var xSlashNode = Coordinate3[2*i-1];
                    	var ySlashNode = Coordinate3[2*i];
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
                function excelNode(x, y, text, id){
                	//定义导入节点的基本属性
                	var excelNode = new JTopo.Node(text);
                	excelNode.id = id;
                	excelNode.setLocation(x, y);
                	excelNode.textPosition = 'Middle_Center';
                	excelNode.textOffsetY =-5;
                	excelNode.fontColor = "0,0,0";
                	excelNode.fillColor = "255,255,255";
                	excelNode.font = '14px 微软雅黑';
                	excelNode.setSize(50, 15);
                	excelNode.dragable = false;
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
	                if(y>220){//当前节点在鱼骨下方
                        	if(x<120){//判断当前节点在下方的那个位置
                        		var xChild = (520-y)/2.5-50*num;
                        	}else if(120<x && x<370){
                        		var xChild = (1145-y)/2.5-50*num;
                        	}else{
                        		var xChild = (1770-y)/2.5-50*num;
                        	}
                        }else{
                        	if(x<245){//判断当前节点在下方的那个位置
                        		var xChild = (-330.75-y)/(-2.35)-50*num;
                        	}else if(245<x && x<495){
                        		var xChild = (-918.25-y)/(-2.35)-50*num;
                        	}else{
                        		var xChild = (-1508.1-y)/(-2.35)-50*num;
                        	}
                        }
	                
	                
	                var yChild = y+35;
	                childNode.setLocation(xChild, yChild);
	                childNode.fontColor = "0,0,0";
	                childNode.textPosition = 'Bottom_Center';
	                childNode.fillColor = "255,255,255";
                	childNode.font = 'blod 14px 微软雅黑';
                	childNode.dragable = false;
                	if(y>220){
                		childNode.rotate = -1.2;
                	}else{
                		childNode.rotate = 1.2;
                	}
                	
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
	                	var y2 = y1-55;
	                	var x2 = x1-30;
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
                	var left = currentNode.getBound().left;//获取当前节点的横纵坐标以及id信息
                    var top = currentNode.getBound().top;
                    var id = currentNode.getBound().id;
                     
                    
                    //输出与该节点对应的num,即该记录该节点右键次数
                    var idArray = new Array();
                    for (var i=0; i<len; i+=4){
                    	console.log(i);
                    idArray[i/4] = Node[i];
                    }
                    var numnode = idArray.indexOf(id);
                    console.log(numnode);
                    if(top>220){//当前节点在鱼骨下方
                    	if(numnode==-1){
                        	num = 1;
                        	Node.push(id);
                        	Node.push(num);
                        	if(left<120){//判断当前节点在下方的那个位置
                        		Node.push((520-top)/2.5-50+4);
                        	}else if(120<left && left<370){
                        		Node.push((1145-top)/2.5-50+4);
                        	}else{
                        		Node.push((1770-top)/2.5-50+4);
                        	}
                        	Node.push(top);
                        	numnode = len/4;
                        }else{
                        	num = Node[numnode*4+1];
                        }
                    }else{//当前节点在鱼骨的上方
                    	if(numnode==-1){
                        	num = 1;
                        	Node.push(id);
                        	Node.push(num);
                        	if(left<245){//判断当前节点在上方的那个位置
                        		Node.push((-330.75-top)/(-2.35)-50+4);
                        	}else if(245<left && left<495){
                        		Node.push((-918.25-top)/(-2.35)-50+4);
                        	}else{
                        		Node.push((-1508.1-top)/(-2.35)-50+4);
                        	}
                        	Node.push(top);
                        	numnode = len/4;
                        }else{
                        	num = Node[numnode*4+1];
                    }
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