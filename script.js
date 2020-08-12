window.addEventListener("load",function() {
  // intercepting submit to send text to Chat A textArea
  interceptAndSendData('sendTextToA', 'textToA', 'chatA');
  
  // intercepting submit to send text to Chat B textArea
  interceptAndSendData('sendTextToB', 'textToB', 'chatB');
});

// Intercepting form submit and sending text to the target textarea
function interceptAndSendData(formName, source, target){
	document.getElementById(formName).addEventListener('submit',function(e) {
      e.preventDefault(); 
      sendText(document.getElementById(source).value, document.getElementById(target));
  });
}

// append text to target value
function sendText (text, target){
	if (text != null && text != ''){
		target.value += text + '\r\n';
	}
}