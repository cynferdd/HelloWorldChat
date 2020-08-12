window.addEventListener("load",function() {
  // intercepting submit to send text to Chat A textArea
  document.getElementById('sendTextToA').addEventListener("submit",function(e) {
    e.preventDefault(); 
    sendText(document.getElementById("textToA").value, document.getElementById("chatA"));
  });
  
  // intercepting submit to send text to Chat B textArea
  document.getElementById('sendTextToB').addEventListener("submit",function(e) {
    e.preventDefault(); 
	sendText(document.getElementById("textToB").value, document.getElementById("chatB"));
  });
});

function sendText (text, target){
	if (text != null && text != ''){
		target.value += text + '\r\n';
	}
}