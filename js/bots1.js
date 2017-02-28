$(document).ready(function() {

  var hodors = ["แกก็สวยนะเหวย..", "ฮิ้วววว", "อะจริงดิ", "เป๊ะอ่ะ", "สวัสดีค่ะ","อุต๊ะ !!!","Sorryว่ะแกรรร","เหย...คือแบบ","จะดีหรอ","หราาาา","น่ารักอ่ะ"];

function addReply(input) {
  var hodorIndex = Math.floor((Math.random() * hodors.length));
  
  if( input.toLowerCase() == "honey boo boo") {
  $(".chatbox1").append(
  	$("<div class='chat-msg-container-hodor1'><div class='chat-msg-circle1'><div class='setmsg'></div></div><div class='chat-msg-right1'><div class='honey-boo-boo1'></div>" + hodors[hodorIndex] + "</div></div>")
  );  
    
  } else {
  $(".chatbox1").append(
  	$("<div class='chat-msg-container-hodor1'><div class='chat-msg-circle1'><div class='setmsg'></div></div><div class='chat-msg-right1'><div class='hodor1'></div>" + hodors[hodorIndex] + "</div></div>")
  );  
    
  }
  
  var myPanel = $(".chatbox1");
  myPanel.scrollTop(myPanel[0].scrollHeight - myPanel.height());    
}

function addMessage(msg) {
  $(".chatbox1").append(
  	$("<div class='chat-msg-container1'><div class='chat-msg-circle-sign1'><div class='setmsgsig'></div></div><div class='chat-msg-left1'>" + msg + "</div></div>")
  );
  setTimeout(addReply(msg),150);
  
}
  
  $(".chat-input1").keydown(function( event ) {
    if ( event.which == 13 ) {
      event.preventDefault();
      
      var message = $(".chat-input1").val();    
      if( message.length > 0 ) {
				addMessage(message);
        $(".chat-input1").val('');
      }
    }
  });
  $(".send1").click(function() {
  		var message = $(".chat-input1").val();    
      if( message.length > 0 ) {
				addMessage(message);
        $(".chat-input1").val('');
      }
  });
});