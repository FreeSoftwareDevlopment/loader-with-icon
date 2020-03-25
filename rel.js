//RELOAD ON CHANGE
		(function(){
			console.info("USING GITHUB VERSION RELOADER");
			var version;
			$.get( "version.json",{ "_": $.now() },function( data ) {
				version=data.version;
				console.info("INFORMATION RELOADER\nVERSION: "+version+"\nREPOS: "+data.repos);
			}, "json" );
			setInterval(function(){
				$.get( "version.json",{ "_": $.now() }, function( data ) {
					if(version < data.version){
						loader();
						setTimeout(function(){document.location.reload();}, 3000);
					}
				}, "json" );
			},3000);
		})();
