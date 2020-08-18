window.addEventListener("load",function() {
  // intercepting submit to send text to Chat A textArea
  interceptAndSendData('sendTextToA', 'textToA', 'chatA');
  
  // intercepting submit to send text to Chat B textArea
  interceptAndSendData('sendTextToB', 'textToB', 'chatB');
});

// Intercepting form submit and sending text to the target textarea
function interceptAndSendData(formName, source, target){
	var formElem = document.getElementById(formName);
	
	if(formElem != null){
		document.getElementById(formName).addEventListener('submit',function(e) {
			
		  e.preventDefault(); 
		  var sourceElem = document.getElementById(source);
		  var targetElem = document.getElementById(target);
		  
		  if(sourceElem != null && targetElem){
			sendText(sourceElem.value, targetElem);
		  }
		  
	  });
	}
}

// append text to target value
function sendText (text, target){
	if (target != null && text != null && text != ''){
		target.value += text + '\r\n';
	}
}