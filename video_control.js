$(function() {

    var previewVideo_element = $(".previewVideo")[0];
    var video_element = $("video")[0];
    
	$('video').bind('timeupdate',function(){
		var timeTemp = video_element.currentTime.toFixed(1);
		$('#currentTime').text(timeTemp);
	});
	
	//set the default start time of a clip; set the default end time in load event
    $(".previewVideo").bind("canplay", function() { 
        $("#end-time").text(previewVideo_element.duration.toFixed(1)); 
        $("#start-time").text(0.0);
    }, true);
	
	$("#loadButton").click(function(){
		previewVideo_element.src=$("#video-url").val();
	    previewVideo_element.load();	
	});

	$("#playButton").click(function(){
		video_element.play();			
	});
	
	$("#pauseButton").click(function(){	
		video_element.pause();
	});

	$("#muteButton").click(function(){			
		video_element.muted=true;
	});

	$("#unmuteButton").click(function(){			
		video_element.muted=false;	
	});

	$("#markStart").click(function(){
		var tempTime = $('#currentTime').text();			
		$("#start-time").text(tempTime);		
	});

	$("#markEnd").click(function(){			
		var tempTime = $('#currentTime').text();			
		$("#end-time").text(tempTime);	
	});

	$("#clear").click(function(){			
		$("#start-time").text("");			
		$("#end-time").text("");	
	});

	$("#seekButton").click(function(){		 	
		video_element.currentTime = $("#seekTo").val();	
	});
    
});
