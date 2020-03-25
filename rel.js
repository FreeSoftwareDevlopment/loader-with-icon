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
						document.location.reload();
					}
				}, "json" );
			},3000);
		})();
