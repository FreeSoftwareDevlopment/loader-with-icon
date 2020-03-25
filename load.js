var loader=(function(){
			var imageurl="mosacycle.png";
			var idd=0;
			var ends=false;
			var imagess = document.createElement("img");
			var imagessab = document.createElement("img");
			document.getElementById('load').appendChild(imagess);
			document.getElementById('load').appendChild(imagessab);
			imagess.src=imageurl;
			imagessab.src=imageurl;
			var intarvals=setInterval(function(){
				idd-=0.5;
				imagess.style='-webkit-transform:rotate('+idd+'deg);  -moz-transform: rotate('+idd+'deg);  -ms-transform: rotate('+idd+'deg);  -o-transform: rotate('+idd+'deg);  transform: rotate('+idd+'deg);height:90px;top:calc(50% - (90px / 2));position:fixed;left:50%;';
				imagessab.style='-webkit-transform:rotate('+(idd*2)+'deg);  -moz-transform: rotate('+(idd*2)+'deg);  -ms-transform: rotate('+(idd*2)+'deg);  -o-transform: rotate('+(idd*2)+'deg);  transform: rotate('+(idd*2)+'deg);height:90px;top:calc(50% - (90px / 2));position:fixed;left:50%;';
				if(ends){
					clearInterval(intarvals);
					document.getElementById("load").style="display:none";
				}
			}, 3);
			function enabless(){document.getElementById("load").style="display:block";var intarvals=setInterval(function(){
				idd-=0.5;
				imagess.style='-webkit-transform:rotate('+idd+'deg);  -moz-transform: rotate('+idd+'deg);  -ms-transform: rotate('+idd+'deg);  -o-transform: rotate('+idd+'deg);  transform: rotate('+idd+'deg);height:90px;top:calc(50% - (90px / 2));position:fixed;left:50%;';
				imagessab.style='-webkit-transform:rotate('+(idd*2)+'deg);  -moz-transform: rotate('+(idd*2)+'deg);  -ms-transform: rotate('+(idd*2)+'deg);  -o-transform: rotate('+(idd*2)+'deg);  transform: rotate('+(idd*2)+'deg);height:90px;top:calc(50% - (90px / 2));position:fixed;left:50%;';
				if(ends){
					clearInterval(intarvals);
					document.getElementById("load").style="display:none";
				}
			}, 3);}
			return function(){if(!ends){ends=true;console.info("Loader Disabled");}else{console.info("Start Loader");ends=false;enabless();}}
		})();
