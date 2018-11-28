$("#profile-img").click(function() {
	$("#status-options").toggleClass("active");
});

$(".expand-button").click(function() {
  $("#profile").toggleClass("expanded");
	$("#contacts").toggleClass("expanded");
});

$("#status-options ul li").click(function() {
	$("#profile-img").removeClass();
	$("#status-online").removeClass("active");
	$("#status-away").removeClass("active");
	$("#status-busy").removeClass("active");
	$("#status-offline").removeClass("active");
	$(this).addClass("active");
	
	if($("#status-online").hasClass("active")) {
		$("#profile-img").addClass("online");
	} else if ($("#status-away").hasClass("active")) {
		$("#profile-img").addClass("away");
	} else if ($("#status-busy").hasClass("active")) {
		$("#profile-img").addClass("busy");
	} else if ($("#status-offline").hasClass("active")) {
		$("#profile-img").addClass("offline");
	} else {
		$("#profile-img").removeClass();
	};
	
	$("#status-options").removeClass("active");
});

$('.submit').click(function() {
	  	newMessage();
	});

$(window).on('keydown', function(e) {
	  if (e.which == 13) {
		  newMessage();
		  return false;
	  }
	});

function newMessage() {
	message = $(".message-input input").val();
	if($.trim(message) == '') {
		return false;
	}
	$('<li class="sent"><img src="./image/'+$("#username-id").val()+'.png" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
	$('.message-input input').val(null);
	$('.contact.active .preview').html('<span>You: </span>' + message);
	$(".messages").animate({ scrollTop: $(document).height() }, "fast");
	sendMessage(message);
};

var webSocket;
$(document).ready(function() {
	
	webSocket = new WebSocket('ws://localhost:8888/WebSocketTest3/websocket');
	
	webSocket.onerror = function(event) {
		onError(event)
	};

	webSocket.onopen = function(event) {
		onOpen(event)
	};

	webSocket.onmessage = function(event) {
		receivedMessage(event);
	};
});

function onOpen(event) {
	//alert("Connection established");
}

function onError(event) {
	//alert(event.data);
}

function sendMessage(message) {
	webSocket.send(message);
	return false;
}

function receivedMessage(event) {
	$(".messages ul").append('<li class="replies"><img src="./image/'+$("#freind-id").val()+'.png" alt="" /><p>'+event.data+'</p></li>');
	
	//To display in Userlist
	$('.contact.active .preview').html('<span>User: </span>' + event.data);
}