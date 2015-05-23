!function(){
var hotkey=function(e){
	e=e||window.evant;


	//console.log(e.keyCode);
	if(!e.ctrlKey)
	switch(e.keyCode){

		case 32://空格
		case 80://P
			$('#play').click();
			break;
		case 27://ESC
			var o=$.S('.close');
			for(var i=0;i<o.length;i++){
				o[i].click();
			}
			break;
		case 81://Q
			if($('#showS'))
				$('#showS').click();

			$('#s').k.focus();
			return false;
			break;
		case 68://D
			if($('#fo-btn-down'))
				$('#fo-btn-down').click();

			break;
		case 83://S
			if($('#fo-btn-weibo'))
				$('#fo-btn-weibo').click();

			break;
		case 88://X
			if($('#fo-btn-xiami'))
				$('#fo-btn-xiami').click();

			break;
		case 77://M
			if($('#fo-btn')){
				if($('#fo-box').className=='h')
					$('#fo-btn').click();
				else
					$('#fo-box .close').click();
			}
		
			break;
		case 76://L
			$('#like').click();
			
			break;
		case 66://b
			history.back();
			break;
		case 78://N
			//history.forward() 
			$('#next').click();
			
			break;
		case 82://R
			
			if(setRid)
				setRid.cut();
			break;


			
		case 84://T
			if($('input[name=msg]'))
				$('input[name=msg]').focus();
			return false;
			break;
		case 73:// i
		case 191:// /?
			if($('#key-box')){
				if($('#key-box').className=='h')
					$('#key-btn').click();
				else
					$('#key-box').click();
			}
			break;
		case 72://H
		
			break;
		case 37://左
			if(VO)
				fm.adjust(-1);
			break;
		case 39://右
			if(VO)
				fm.adjust(1);
			break;
		case 38://上
			if(VO)
				VO.adjust(1);
			break;
		case 40://下
			if(VO)
				VO.adjust(-1);
		
			break;

		default:
			return;
	}
};
document.onkeydown=hotkey


$('input[name="msg"]').onkeydown=function(e){
	if(e&&e.stopPropagation) 
		e.stopPropagation();
    else
		window.event.cancelBubble=true;
};
}()