/*
 * html5 video player
 * Author: Zheng Jia
 * http://github.com/zhengjia/html5-player
 * Licensed under the MIT license.
 */
 
$(function() {

    
    var video_element = $("video")[0];
    
	$(video_element).bind('timeupdate',function(){
		var timeTemp = video_element.currentTime.toFixed(1);
		$('#currentTime').text(timeTemp);
	});
	
	//set the default start time of a clip; set the default end time in load event
    $(video_element).bind("canplay", function() { 
        $("#end-time").text(video_element.duration.toFixed(1)); 
        $("#start-time").text(0.0);
    }, true);
	
	$("#loadButton").click(function(){
		video_element.src=$("#video-url").val();
	    video_element.load();	
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
