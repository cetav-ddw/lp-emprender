(function () {
	const chatbtnArray = document.querySelectorAll('#chatbot-js');
	const closebtn = document.querySelector('#btnclose-js');
	const wrapperChat = document.querySelector('.chatbot');
	closebtn.addEventListener('click', closeWindow);
	chatbtnArray.forEach(element => {
		element.addEventListener('click', showWindow);
	});

	function showWindow() {
		wrapperChat.className = "chatbot-open";
	}

	function closeWindow(){
		wrapperChat.className = "chatbot";
	}
}())
