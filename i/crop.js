!function($,W,D){
if(window.XMLHttpRequest&&window.FileReader){
	var _html=$('html');

	_html.ondragover=function(e){e.preventDefault();};
	_html.ondrop=function(e){
		e.preventDefault();
		//console.log(e);
		handleFile(e.dataTransfer.files);
	}; 
	handleFile=function(files){
		if(files.length==0){
			//$alert('如果拖图像进来我会很高兴哟~');
			return;
		}else if(files.length>1){
			alert('请不要贪心哟，一次只能识别单个文件QAQ');
		}
		var file=files[0];
		if(file.type.indexOf('audio')==0){
			var fname=file.name.replace(/^[ 0-9.-]{0,6}(.*)\.[a-zA-Z0-9]{2,4}$/,"$1");

			$('input[name="k"]').value=fname;
			$('#showS').click();
			// x('/x/?a=search&k='+encodeURIComponent(fname)+'&start=0',function(d){
			// 	id(!d.length)return alert('没有任何内容');
			// })
			return;
		}
	}
};

}(iTorr,window,document);