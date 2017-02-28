$(document).ready(function() {

  var hodors = ["แกก็สวยนะเหวย..", "ฮิ้วววว", "อะจริงดิ", "เป๊ะอ่ะ", "สวัสดีค่ะ","อุต๊ะ !!!","Sorryว่ะแกรรร","เหย...คือแบบ","จะดีหรอ","หราาาา","น่ารักอ่ะ"];

function addReply(input) {
  var hodorIndex = Math.floor((Math.random() * hodors.length));
  
  if( input.toLowerCase() == "honey boo boo") {
  $(".chatboxcon").append(
  	$("<div class='chat-msg-container-hodorcon'><div class='chat-msg-circlecon'><div class='setmsg'></div></div><div class='chat-msg-rightcon'><div class='honey-boo-boocon'></div>" + hodors[hodorIndex] + "</div></div>")
  );  
    
  } else {
  $(".chatboxcon").append(
  	$("<div class='chat-msg-container-hodorcon'><div class='chat-msg-circlecon'><div class='setmsg'></div></div><div class='chat-msg-rightcon'><div class='hodorcon'></div>" + hodors[hodorIndex] + "</div></div>")
  );  
    
  }
  
  var myPanel = $(".chatboxcon");
  myPanel.scrollTop(myPanel[0].scrollHeight - myPanel.height());    
}

function addMessage(msg) {
  $(".chatboxcon").append(
  	$("<div class='chat-msg-containercon'><div class='chat-msg-circle-signcon'><div class='setmsgsig'></div></div><div class='chat-msg-leftcon'>" + msg + "</div></div>")
  );
  setTimeout(addReply(msg),150);
  
}
  
  $(".chat-inputcon").keydown(function( event ) {
    if ( event.which == 13 ) {
      event.preventDefault();
      
      var message = $(".chat-inputcon").val();    
      if( message.length > 0 ) {
				addMessage(message);
        $(".chat-inputcon").val('');
      }
    }
  });
  $(".sendcon").click(function() {
  		var message = $(".chat-inputcon").val();    
      if( message.length > 0 ) {
				addMessage(message);
        $(".chat-inputcon").val('');
      }
  });
});