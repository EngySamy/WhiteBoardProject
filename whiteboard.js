
	var color='#000000';
	var boardColor='#fffff9';
	var width=5;
	var style=1;
	var clearCanvas = false;
	var text="";

	//for the text in the drop down (text)
	$('.dropdown-menu').find('form').click(function (e) {
		e.stopPropagation();
	});
	
	

/////////////////

	function green() {
		color = '#1cbf79';
		pencilCursor();
		if(style==0 || style==-1) // to transform from eraser and cut  to the default
		{
			style=1; 
			width=5;
		}		
	}
	
	function blue() {
		color = '#2323B2';
		pencilCursor();
		if(style==0 || style==-1) // to transform from eraser and cut  to the default
		{
			style=1; 
			width=5;
		}
	}
	
	function red() {
		color = '#DF0010';
		pencilCursor();
		if(style==0 || style==-1) // to transform from eraser and cut  to the default
		{
			style=1; 
			width=5;
		}
	}
	
	function black() {
		color = '#000000';
		pencilCursor();
		if(style==0 || style==-1) // to transform from eraser and cut  to the default
		{
			style=1; 
			width=5;
		}
	}
	
	function customColor() {
		var x = document.getElementById("myColor");
		color = x.value;
		pencilCursor();
		if(style==0 || style==-1) // to transform from eraser and cut  to the default
		{
			style=1; 
			width=5;
		}
	}
	
	function size1() {
		width = 5;
		pencilCursor();
		if(style==0 || style==-1 || style==6) // to transform from eraser and cut and text to the default
		{
			style=1; 
			color = '#000000';
		}
	}
	
	function size2() {
		width = 10;
		pencilCursor();
		if(style==0 || style==-1 || style==6) // to transform from eraser and cut and text to the default
		{
			style=1; 
			color = '#000000';
		}
	}
	
	function size3() {
		width = 15;
		pencilCursor();
		if(style==0 || style==-1 || style==6) // to transform from eraser and cut and text to the default
		{
			style=1; 
			color = '#000000';
		}
	}
	
	function size1_eraser() {
		color=boardColor;
		width = 5;
		style = -1;
		eraserCursor();
	}
	
	function size2_eraser() {
		color=boardColor;
		width = 15;
		style = -1;
		eraserCursor();
	}
	
	function size3_eraser() {
		color=boardColor;
		width = 20;
		style = -1;
		eraserCursor();		
	}
	
	function cut_eraser() {
		//cut=true;
		style=0;
		color=boardColor;
		width = 5;
		eraserCursor();		
	}
	
	
	function clearAll() {
		var canvas=document.getElementById("canvas");
		var context = canvas.getContext('2d');
		
		var w=canvas.width;
		var h=canvas.height;
		
		context.beginPath();
		context.lineWidth = "4";
		context.fillStyle = boardColor;
		context.rect(0, 0, w, h);
		context.fill();
		clearCanvas=true;
	}
	
	
	
	function eraserCursor() {
		document.getElementById("canvas").style.cursor="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABUklEQVRIS83UvyuFYRjG8c8pWWRRYjPKZrMxWGxmg2SQX6PCf0CKRfm1SAYZbZLFaLOZbSwGJ+mUouf0Pjr0vuf9Uac84/vez/W97/u6emo6fGod1vcvAd3oLTh5o+wE4zjBcEFAvQxgBKcYKyjeLCsKGMAxpsuIFwX0YRsLZcVxnjdBD3awUkH8CovtAF1YS7ovq3+PeTxmAcL3GRyViGRs4glzuMvyIIhP4RBDJVsP4su4xlcWYAJnFcTrWMJFFE8DVMp6MuUmdvHZOnWrBzHrg0lqwrh5J/i0jwOs4/3vhQjoT+jhKfgxKEc9rvIGofvXtPoAiFmfTdthBiSu8jlkHS9ZzQTARpL11B2mXIzi4Vcz6+0mDYA3bGEPjZy1RJ9Gi64yAh7wkecoglfhbfqV9bwJbjFZQDyUBCNXcdma9TxAQe1qZXmvaTXVllsdB3wDNws8zoZiriwAAAAASUVORK5CYII=), auto";
	}
	
	function pencilCursor() {
		document.getElementById("canvas").style.cursor="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABd0lEQVRIS7XVv0ofQRSG4UdbDXgHgo1gkxsIggS8BhFsbFJYpAhItBJEUliIImJlIVhIQLAQSZEUFilSBBsvwEIsBC0slRBGZsJm3F13furANsvu957znT/T55VP3yvrey4g/P8OYzjAVR7wcwD9mMYW3uAQc7ioQnoF5OJJ8yhCztOLXgEDWMHHmhr+BykFhMincI9jLDdAvuIDbkoAVVvuohUh2jrIz1if866AqvgJvmGpAXKLRWyHTLsAcvENfMIkrjPIbMxoLdr45BxUxX9gHZ+jeKpvFTIesws1ejhtGXQRTzqXmMH3roNWIh48D4X+Z8tTg/Zi4nUWvah4Dsi7JaQ8nxU0Zd9qS51FVfEzhFUQnpGaVdBZvJrBKPbxCwt4ix0MZ4Ai8TrAKvZi+05kkGLxOsCfeGmEUf+N99jFYFsrtt2KadCSRcGacMItdRpX8qPxL7lmmwDF3dIETYDQLV8wlH0Ydv5mWlwlkXfZRb3oPfrnL782bhnrilZkAAAAAElFTkSuQmCC), auto";
	}
	
	function textCursor() {
		document.getElementById("canvas").style.cursor="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABNklEQVRIS+3WvyuFURgH8M8tRWFgMhtIkVHJaBOTUkwyKCUpDEpi8heQUiwGC7NZRoP8KD//AUqRlIhOvVev2329760rhnvG85zz/Z7v8/Sc75NTfPWhHfc4wjleY0cbongH6rGLq2JQuQSCBSzHYieYxQGmMIPGWLwHh6UQ1KEaVejCBLpxh2asYQs3EehTgcIvriQFhY9pwgZC6oK6FbwlqP+2nZUgXBrHIvqjumTBVwrBSFSHIVxkQqdCkJ6of1GD0AuhWwcxiTFc4hEfaRqyKGjFDjpjYOuYxks5CMLrA3gvhrGEM4Tv470cBHmMSh+kZVMlRX+fotBYwTZ/xQ/asBnZ5yrm8Jyq+Qc/CJ5ci5bIi0dRg2MMYB/buMU1Hkr15MKpYi+aMk6jT28eYWTJr8Sp4hMbwUoZqYV4swAAAABJRU5ErkJggg==), auto";
	}
	
	function autoCursor() {
		document.getElementById("canvas").style.cursor="auto";
	}
	
	function pencilLine() {
		style=1;
	}
	
	function straightLine() {
		style=2;
	}
	
	function brushLine() {
		style=3;
	}
	
	function dashLine() {
		style=4;
	}
	
	function dashStraightLine() {
		style=5;
	}	
	
	function addText() {
		text =document.getElementById("Txt1").value;
		style=6;
		textCursor();
		//document.getElementById("txtdropdown").style.visibility = "visible";
	}
	
	
	function convertCanvasToImage() {
		var canvas=document.getElementById("canvas");
		var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
		//window.location.href=image; // it will save locally
		
		var anchor = document.createElement('a');
		anchor.setAttribute('download', 'whiteboard.png');
		anchor.setAttribute('href', image);
		anchor.click();
		autoCursor();
	}