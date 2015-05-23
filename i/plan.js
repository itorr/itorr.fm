!function(fm,A){
	var 
	mouse_down=0,
	planB=document.getElementsByClassName('plan')[0],
	planPlay=document.getElementById('planPlay'),
	planLoad=document.getElementById('planLoad'),
	planTime=planPlay.getElementsByTagName('span')[0],
	planBox=planPlay.getElementsByTagName('b')[0];
	A.addEventListener('timeupdate',function(i){
		//console.log(i);
		//console.log(A.buffered);
		//$('#play2').className='h';
		//console.log(fm.A.buffered.length);
		if(A.buffered.length>0)
			planLoad.style.cssText+='width:'+A.buffered.end(A.buffered.length-1)/A.duration*100+'%';

		if(mouse_down){

			return;
		}
		planPlay.style.cssText+='width:'+A.currentTime/A.duration*100+'%';
		
		
		planTime.innerHTML=function(){
			if(!A.currentTime)
				return '00:00';

			var 
			t=A.duration-A.currentTime,
			m=Math.floor(t/60),
			s=Math.floor(t%60);
			s=s>9?s:('0'+s);

			return '-'+m+':'+s;
		}();



		lrc.step();
		
	},true);
	planB.onmousedown=planB.ontouchstart=function(e){
		e.stopPropagation();
		e.preventDefault();

		mouse_down=1;
		planPlay.className='onmouse';

		e=window.event||e;

		//console.log(e.x,planBox.offsetWidth,e.x-planBox.offsetWidth);

		window.onmousemove=window.ontouchmove=function(e){
			e.stopPropagation();
			e.preventDefault();

			var x=e.x||e.pageX;
			planPlay.style.cssText+='width:'+(x-4)+'px';

			planTime.innerHTML=function(){
				var 
				t=A.duration*(planPlay.offsetWidth/planB.offsetWidth),
				m=Math.floor(t/60),
				s=Math.floor(t%60);
				m=m>9?m:('0'+m);
				s=s>9?s:('0'+s);

				return m+':'+s;
			}();
		
		};
		window.onmousemove(e);
		window.onmouseup=window.ontouchend=function(){
			A.currentTime=A.duration*(planPlay.offsetWidth/planB.offsetWidth);
			mouse_down=0;
			planPlay.className='nomouse';
			window.onmousemove=
			window.ontouchmove=
			window.onmouseup=
			window.ontouchend=null;
		}
	};

	document.body.ontouchmove=function(e){
		//e.stopPropagation();
		//console.log(e)
		//if()
		//console.log('body');
		e.preventDefault();
	}

	A.addEventListener('ended',fm.next,false);
}(fm,fm.A);