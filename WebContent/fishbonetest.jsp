<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Dashboard - Ace Admin</title>
        
<!--  导入css -->

        <link rel="stylesheet" href="assets/css/bootstrap.min.css" type="text/css"/>
        <link rel="stylesheet" href="assets/css/bootstrap-responsive.min.css" type="text/css"/>
        <link rel="stylesheet" href="assets/css/font-awesome.min.css" type="text/css"/>
        <link rel="stylesheet" href="css/uploadButton.css" type="text/css"/>
        <link rel="stylesheet" href="assets/css/font.css" type="text/css"/>
        <link rel="stylesheet" href="assets/css/ace.min.css" type="text/css"/>
        <link rel="stylesheet" href="assets/css/ace-responsive.min.css" type="text/css"/>
        <link rel="stylesheet" href="assets/css/ace-skins.min.css" type="text/css"/>
        <link rel="stylesheet" href="./css/canvasAdapt.css" type="text/css" >
        <link rel="stylesheet" href="./css/rightCSS.css" type="text/css"/>
        <link rel="stylesheet" href="./css/text.css" type="text/css"/>
        <link rel="stylesheet" href="./css/main.css" type="text/css"/>
        
<!-- 导入js -->
        
        <script type="text/javascript" src="js/featureButton.js"></script>
        <script type="text/javascript" src="js/cpexcel.js"></script>
        <script type="text/javascript" src="js/shim.js"></script>
        <script type="text/javascript" src="js/jszip.js"></script>
        <script type="text/javascript" src="js/xlsx.js"></script>
        <script type="text/javascript" src="./jtopo/jTopo.js"></script>
        <script type="text/javascript" src="./jtopo/jquery-min.js"></script>
        <script type="text/javascript" src="./jtopo/saveImages.js"></script>

    </head>
    <body>
        <div class="navbar">
            <div class="navbar-inner">
                <div class="container-fluid">
                    <a href="#" class="brand">
                        <small>
                            <i class="icon-leaf"></i>
                                                                     欢迎使用鱼骨图
						
                        </small>
                    </a>
                    <ul class="nav ace-nav pull-right">
                        <li class="light-blue">
                            <a data-toggle="dropdown" href="#" class="dropdown-toggle">
                                <img class="nav-user-photo" src="assets/avatars/user.jpg" alt="Jason's Photo"/>
                                <span class="user-info">
                                    <small>Welcome,</small>
                                    Jason
								
                                </span>
                                <i class="icon-caret-down"></i>
                            </a>
                            <ul class="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-closer">
                                <li>
                                    <a href="#">
                                        <i class="icon-cog"></i>
                                        Settings
									
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="icon-user"></i>
                                        Profile
                                    </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="#">
                                        <i class="icon-off"></i>
                                        Logout
									
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       
            <a class="menu-toggler" id="menu-toggler" href="#">
                <span class="menu-text"></span>
            </a>
            <div class="sidebar" id="sidebar">
                <div class="sidebar-shortcuts" id="sidebar-shortcuts">
                    <div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
                        <button class="btn btn-small btn-success">
                            <i class="icon-signal"></i>
                        </button>
                        <button class="btn btn-small btn-info">
                            <i class="icon-pencil"></i>
                        </button>
                        <button class="btn btn-small btn-warning">
                            <i class="icon-group"></i>
                        </button>
                        <button class="btn btn-small btn-danger">
                            <i class="icon-cogs"></i>
                        </button>
                    </div>
                    <div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
                        <span class="btn btn-success"></span>
                        <span class="btn btn-info"></span>
                        <span class="btn btn-warning"></span>
                        <span class="btn btn-danger"></span>
                    </div>
                </div>
                <!--#sidebar-shortcuts-->
                <ul class="nav nav-list">
                    <li class="active">
                        <a href="index.html">
                            <i class="icon-dashboard"></i>
                            <span class="menu-text">Dashboard </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="dropdown-toggle">
                            <i class="icon-desktop"></i>
                            <span class="menu-text">UI Elements </span>
                            <b class="arrow icon-angle-down"></b>
                        </a>
                        <ul class="submenu">
                            <li>
                                <a href="elements.html">
                                    <i class="icon-double-angle-right"></i>
                                    Elements
								
                                </a>
                            </li>
                            <li>
                                <a href="buttons.html">
                                    <i class="icon-double-angle-right"></i>
                                    Buttons &amp;Icons
								
                                </a>
                            </li>
                            <li>
                                <a href="treeview.html">
                                    <i class="icon-double-angle-right"></i>
                                    Treeview
								
                                </a>
                            </li>
                            <li>
                                <a href="#" class="dropdown-toggle">
                                    <i class="icon-double-angle-right"></i>
                                    Three Level Menu
									<b class="arrow icon-angle-down"></b>
                                </a>
                                <ul class="submenu">
                                    <li>
                                        <a href="#">
                                            <i class="icon-leaf"></i>
                                            Item #1
										
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="dropdown-toggle">
                                            <i class="icon-pencil"></i>
                                            4th level
											<b class="arrow icon-angle-down"></b>
                                        </a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="#">
                                                    <i class="icon-plus"></i>
                                                    Add Product
												
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="icon-eye-open"></i>
                                                    View Products
												
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                
                

            </div>
            <div class="main-content">
                <div class="breadcrumbs" id="breadcrumbs">
                        <div style="margin-left:10px;float:left; padding-top: 5px;">
                        
                            <div style="margin-left:10px; float:left; padding-top: 5px;">
                                <a href="template/template.xls" class="file">下载模板</a>
                            </div>
                        
                            <div style="margin-left:10px; float:left; padding-top: 5px;">
                                <a class="file">
                                                                                    选择文件
                                 <input type="file" name="xlfile" id="xlf" style="margin-left:10px;float:left"/>
                                </a>
                            </div>
                            
                            <div style="margin-left:10px;float:left; padding-top: 5px;">
                                <input type="submit" value="保存图片" onclick="convertCanvasToImage()" class="file"/>
                            </div>
                            
                            
                            <div style="margin-left:10px;float:left; padding-top: 5px;">
                                <input type="submit" value="缩小" onclick="zoomIn()" class="file"/>
                            </div>
                            
                            <div style="margin-left:10px;float:left; padding-top: 5px;">
                                <input type="submit" value="放大" onclick="zoomOut()" class="file"/>
                            </div>
                            
                            <div style="margin-left:10px;float:left; padding-top: 5px;">
                                <input type="submit" value="居中" onclick="setCenter()" class="file"/>
                            </div>
                       
                            <div class="nav-search" id="nav-search">
                                  <span class="input-icon">
                                      <input type="text" placeholder="Search ..." class="input-small nav-search-input" id="nav-search-input" autocomplete="off"/>
                                      <i class="icon-search nav-search-icon"></i>
                                  </span>
                            </div>
                      </div>
                        
                </div>
                                <div>
                <canvas id="canvas" width="1000" height="600"></canvas>
                </div>
                </div>

            <textarea id="jtopo_textfield" onkeydown="if(event.keyCode==13)this.blur();"></textarea>
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
    <script type="text/javascript" src="jtopo/drawing.js"></script>       
    <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery-ui-1.10.3.custom.min.js"></script>
    <script src="assets/js/jquery.ui.touch-punch.min.js"></script>
    <script src="assets/js/jquery.slimscroll.min.js"></script>
    <script src="assets/js/jquery.easy-pie-chart.min.js"></script>
    <script src="assets/js/jquery.sparkline.min.js"></script>
    <script src="assets/js/flot/jquery.flot.min.js"></script>
    <script src="assets/js/flot/jquery.flot.pie.min.js"></script>
    <script src="assets/js/flot/jquery.flot.resize.min.js"></script>
    <script src="assets/js/ace-elements.min.js"></script>
    <script src="assets/js/ace.min.js"></script>
    <script type="text/javascript" src="./jtopo/canvasAdapt.js"></script>
    </body>
</html>
