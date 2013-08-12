function TableAuto(divId){
	var cellIndex=-1;	//记录所作用的列索引
	var preWidth=0;		//记录列的原宽
	var preX=0;			//记录鼠标的原屏幕x坐标
	var preLeft=0;		//记录辅助线的初始位置
  	var currentTitleCell=null; //当前改变列宽的列的标题单元格
	var doTitleCellClick=null; //用于暂存标题行click响应行数
	var table = null;//表格对象
	var titleCells = null;//获取标题行
	
	//辅助线对象
	var scale = document.createElement("div");
	scale.style.cssText="border-left:dotted 1px #000;z-index:101;position:absolute;left:-1;width:0;";
	document.body.appendChild(scale);
	
	
    //函数：计算元素的绝对位置
	function getAbsPos(e){
		var rect = e.getBoundingClientRect()
		var body = document.body;
		return { left:rect.left+body.scrollLeft,top:(rect.top+body.scrollTop) };
	}
    
	//函数：改变列宽 (响应辅助线的 onmousemove 事件)
	function changeColWidth(){
		var evt = arguments.length==0 ? event : arguments[0];
		var newX = evt.screenX;
		var newWidth = preWidth+newX-preX;
		if(newWidth<8) newWidth=8;
		else scale.style.left=preLeft+newX-preX;
	}
	//函数：改变列宽 (响应辅助线 onmouseup 事件)
	function changeColWidthStop(){		
		scale.releaseCapture();
		scale.onmousemove = null;
		scale.onmouseup = null;
		scale.style.left=-1;
		var evt = arguments.length==0 ? event : arguments[0];
		var newX = evt.screenX;//鼠标现在坐标
		var mLong = newX-preX;//鼠标移动距离
		var tdNewWidth = mLong+preWidth;//调整后单元格宽度
		if(tdNewWidth<8) tdNewWidth=8;
		var tableNewWidth=eval($('#'+divId).width()-preWidth+tdNewWidth);//表格宽度=原始宽度表格宽度-单元格原始宽度+单元格现在宽度
		var trs = table.getElementsByTagName("tr");
		$('#'+divId).width(tableNewWidth);//调整表格宽度
		//for ( var j = 0; j < trs.length; j++) {//调整列宽
               trs[0].cells[cellIndex].width =tdNewWidth;
        //}
		
		
		
	}
    //函数：改变列宽 (响应标题行单元格的 onmousedown 事件)
	function doMouseDown(){
		var evt = arguments.length==0 ? event : arguments[0];
		preX = evt.screenX;
		var pos = getAbsPos(this);
		preLeft = pos.left+this.offsetWidth;
		scale.style.left=preLeft-2;
		scale.style.top = pos.top-2;
		scale.style.height=table.offsetHeight-4;
		
		scale.setCapture();
		scale.onmousemove = changeColWidth;
		scale.onmouseup = changeColWidthStop;
		cellIndex = this.cellIndex;
		preWidth = this.offsetWidth;

	}
    //函数：响应标题单元格 mousemove 事件
	function doTitleCellMousemove(){
		var evt = arguments.length==0 ? event : arguments[0];
		if(this.offsetWidth-evt.offsetX<10){//单元格的宽-鼠标在单元格的水平坐标
			this.style.cursor="col-resize";
			this.onmousedown=doMouseDown;
		}else{
			this.style.cursor="";
			this.onmousedown=null;
		}
	}
    //添加控制元素的代码
    function applyCtrl(tableId){
    	table = document.getElementById(tableId);//获取表格
    	table.getElementsByTagName("tr")[0].className="scrollColThead";
    	//获取标题行
    	titleCells = table.getElementsByTagName("tr")[0].cells;
    	//给每个标题行单元格绑顶 onmousemoce 事件处理函数
		for(var i=1;i<titleCells.length;i++){
			titleCells[i].onmousemove=doTitleCellMousemove;
		}
    }
    //此处为表格添加控制元素。
    applyCtrl(divId);
    
    
	
}