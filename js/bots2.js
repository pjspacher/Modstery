$(document).ready(function() {

  var hodors = ["แกก็สวยนะเหวย..", "ฮิ้วววว", "อะจริงดิ", "เป๊ะอ่ะ", "สวัสดีค่ะ","อุต๊ะ !!!","Sorryว่ะแกรรร","เหย...คือแบบ","จะดีหรอ","หราาาา","น่ารักอ่ะ"];

function addReply(input) {
  var hodorIndex = Math.floor((Math.random() * hodors.length));
  
  if( input.toLowerCase() == "honey boo boo") {
  $(".chatbox2").append(
  	$("<div class='chat-msg-container-hodor2'><div class='chat-msg-circle2'><div class='setmsg'></div></div><div class='chat-msg-right2'><div class='honey-boo-boo2'></div>" + hodors[hodorIndex] + "</div></div>")
  );  
    
  } else {
  $(".chatbox2").append(
  	$("<div class='chat-msg-container-hodor2'><div class='chat-msg-circle2'><div class='setmsg'></div></div><div class='chat-msg-right2'><div class='hodor2'></div>" + hodors[hodorIndex] + "</div></div>")
  );  
    
  }
  
  var myPanel = $(".chatbox2");
  myPanel.scrollTop(myPanel[0].scrollHeight - myPanel.height());    
}

function addMessage(msg) {
  $(".chatbox2").append(
  	$("<div class='chat-msg-container2'><div class='chat-msg-circle-sign2'><div class='setmsgsig'></div></div><div class='chat-msg-left2'>" + msg + "</div></div>")
  );
  setTimeout(addReply(msg),150);
  
}
  
  $(".chat-input2").keydown(function( event ) {
    if ( event.which == 13 ) {
      event.preventDefault();
      
      var message = $(".chat-input2").val();    
      if( message.length > 0 ) {
				addMessage(message);
        $(".chat-input2").val('');
      }
    }
  });
  $(".send2").click(function() {
  		var message = $(".chat-input2").val();    
      if( message.length > 0 ) {
				addMessage(message);
        $(".chat-input2").val('');
      }
  });
});