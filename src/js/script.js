(function () {
	const chatbtnArray = document.querySelectorAll('#chatbot-js');
	const windowChatBot = document.querySelector('.article-chatbot__chat-field');
	const closebtn = document.querySelector('#btnclose-js');
	
	chatbtnArray.forEach(element => {
		element.addEventListener('click', showWindow);
	});
	closebtn.addEventListener('click', closeWindow);
	function showWindow() {
		windowChatBot.style.right = "0px";
		windowChatBot.style.transform = "scale(1)"
		windowChatBot.style.opacity = '1';
		windowChatBot.style.transition = "ease-in-out 1.2s";
	}

	function closeWindow(){
		windowChatBot.style.right = "-40vw";
		windowChatBot.style.transform = "scale(0)";
		windowChatBot.style.opacity = '0';
		windowChatBot.style.transition = "ease-in-out 1.2s";
	}
}())
