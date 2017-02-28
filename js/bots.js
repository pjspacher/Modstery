$(document).ready(function() {

  var hodors = ["แกก็สวยนะเหวย..", "ฮิ้วววว", "อะจริงดิ", "เป๊ะอ่ะ", "สวัสดีค่ะ","อุต๊ะ !!!","Sorryว่ะแกรรร","เหย...คือแบบ","จะดีหรอ","หราาาา","น่ารักอ่ะ"];

function addReply(input) {
  var hodorIndex = Math.floor((Math.random() * hodors.length));
  
  if( input.toLowerCase() == "honey boo boo") {
  $(".chatbox").append(
  	$("<div class='chat-msg-container-hodor'><div class='chat-msg-circle'><div class='setmsg'></div></div><div class='chat-msg-right'><div class='honey-boo-boo'></div>" + hodors[hodorIndex] + "</div></div>")
  );  
    
  } else {
  $(".chatbox").append(
  	$("<div class='chat-msg-container-hodor'><div class='chat-msg-circle'><div class='setmsg'></div></div><div class='chat-msg-right'><div class='hodor'></div>" + hodors[hodorIndex] + "</div></div>")
  );  
    
  }
  
  var myPanel = $(".chatbox");
  myPanel.scrollTop(myPanel[0].scrollHeight - myPanel.height());    
}

function addMessage(msg) {
  $(".chatbox").append(
  	$("<div class='chat-msg-container'><div class='chat-msg-circle-sign'><div class='setmsgsig'></div></div><div class='chat-msg-left'>" + msg + "</div></div>")
  );
  setTimeout(addReply(msg),150);
  
}
  
  $(".chat-input").keydown(function( event ) {
    if ( event.which == 13 ) {
      event.preventDefault();
      
      var message = $(".chat-input").val();    
      if( message.length > 0 ) {
				addMessage(message);
        $(".chat-input").val('');
      }
    }
  });
  $(".send").click(function() {
  		var message = $(".chat-input").val();    
      if( message.length > 0 ) {
				addMessage(message);
        $(".chat-input").val('');
      }
  });
});