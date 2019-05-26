(function () {
	const chatbtnArray = document.querySelectorAll('#chatbot-js');
	const windowChatBot = document.querySelector('.chat-field');
	const closebtn = document.querySelector('#btnclose-js');
	
	chatbtnArray.forEach(element => {
		element.addEventListener('click', showWindow);
	});
	closebtn.addEventListener('click', closeWindow);
	function showWindow() {
		windowChatBot.className = "open-window"
	}

	function closeWindow(){
		windowChatBot.className = "chat-field"
	}
}())
