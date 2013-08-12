<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" import="java.util.*"%>
<%@ taglib uri="http://displaytag.sf.net/el" prefix="display" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<style type="text/css" media="all">
      @import url("css/maven-base.css"); @import url("css/maven-theme.css"); @import url("css/site.css"); @import
      url("css/screen.css");
    </style>
    <link rel="stylesheet" href="css/print.css" type="text/css" media="print" />
	
	<link name="EasyGrid" rev="stylesheet" rel="stylesheet" type="text/css" href="EasyGrid.css">
	<script src="EasyGrid.js"></script>
	<script src="jquery-1.2.6.min.js"></script>
	<script type="text/javascript" src="TableAutoYdcun.js"></script>
	<link rel="stylesheet" type="text/css" href="TableAutoYdcun.css">
  </head>
  <%
  		List<List<String>> list = new ArrayList<List<String>>();
  	for(int i=0;i<100;i++){
  		List<String> list1 = new ArrayList<String>();
  		list1.add("11");
  		list1.add("12");
  		list1.add("13");
  		list1.add("14");
  		list.add(list1);
  	}
  		
  		request.setAttribute("test",list);
  %>
  <body>
	<div id="scrollDiv" class="scrollDiv" > 
    <display:table class=" scrollTable" cellpadding="3" cellspacing="0" style="width:2000"  name="test" id="mytab">
	    <display:column title="账号" style="width:120">${mytab[3] }</display:column>
	    <display:column title="账号" style="width:120">${mytab[0] }</display:column>
	    <display:column title="账号" style="width:120">${mytab[1] }</display:column>
	    <display:column title="账号" style="width:120">${mytab[2] }</display:column>
	</display:table>
	</div>
  </body>
  <table  id="mytab1" border="1" style="width:500">
  	<tr ><th>df</th><th >dsa</th><th >fds</th><th >fds</th><th >fds</th></tr>
  	<tr><td>df</td><td>dsa</td><td>fds</td><td>fds</td><td>fds</td></tr>
  	<tr><td>df</td><td>dsa</td><td>fds</td><td>fds</td><td>fds</td></tr>
  </table>

<script type="text/javascript">
	var table = document.getElementById("mytab");//获取表格		
		var titleCells = table.getElementsByTagName("tr")[0].cells;
    	//给每个标题行单元格设置宽度
		for(var i=0;i<titleCells.length;i++){
			if(i==0){
				titleCells[i].style.width='40';
			}
		}
    	//这个必须放到display后面
		window.onload=function(){
					new TableAuto("mytab");
		};
</script>

</html>
