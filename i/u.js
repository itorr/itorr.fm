var U=function($){

	var 
	apiUrl='http://api.mouto.org/',
	M,
	U={
		init:function(o){
			M=$(o);

			if($.cookie('sss')){
				U.sss($.cookie('sss'));
			}else{
				U.getsss();
			};
		},getsss:function(){
			$.j(apiUrl+'x/?a=sss&cb={cb}',function(u){
				if(!u.sss){
					M.innerHTML='<a id="loginBtn">登录</a>';

					$('#loginBtn').onclick=function(){
						U.login();
						return false
					}
					return //alert('未登录');
				}
				$.cookie('sss',u.sss);
				U.sss(u.sss);
			});
		},sss:function(sss){
			if(sss)
			x('x/u.php','sss='+sss,function(u){
				//console.log(u);
				if(u.error){
					return U.getsss();
				};
				U.me=u;
				M.innerHTML=u.name;
				U.allike();
				//alert('登陆成功');
				//$('#m').innerHTML='<a href="x/?a=logout">退出</a>';
			});
		},login:function(){
			
			var uriData={
				'redirect':location.href
			};
			var get=[];
			for(var name in uriData)
				get.push(name+'='+encodeURIComponent(uriData[name]));

			get=get.join('&');
			
			location.href=apiUrl+'login.html#!'+get;
		},allike:function(){
			x('x/?a=allike',function(r){
				var likes={};
				if(!r)
					return U.likes=likes;

				for(var i=0,l=r.length;i<l;i++){
					likes[r[i]]=true;
				}


				U.likes=likes;

				U.iflike(location.hash.match(/\d+/)+'',function(r){
					$('#like').className=r?'a':'';
				});

			});
		},iflike:function(i,f){
			if(!U.likes)
				return f(false);
			f(U.likes[i]);
		}
	};

	return U
}(iTorr);

U.init('#u');