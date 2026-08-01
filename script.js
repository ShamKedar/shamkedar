let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });

});

//About section tab view
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/*
//Code of bot
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatContainer = document.getElementById("FirstImg");

sendBtn.addEventListener("click", sendMessage);

// Press Enter to send
userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

async function sendMessage() {

    const question = userInput.value.trim();

    if (question === "") return;

    // Display user message
    addMessage(question, "user");

    userInput.value = "";

    // Show typing message
    const typingDiv = addMessage("Typing...", "bot");

    try {

        const response = await fetch("https://portfolio-bot-15wq.onrender.com/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                question: question
            })

        });

        if (!response.ok) {
            throw new Error("Server Error");
        }

        const data = await response.json();

        typingDiv.innerHTML = data.answer;

    } catch (error) {

        typingDiv.innerHTML = "Unable to connect to the chatbot.";

        console.error(error);
    }

}

function addMessage(message, sender) {

    const div = document.createElement("div");

    div.classList.add("message");

    if (sender === "user") {
        div.classList.add("user-message");
    } else {
        div.classList.add("bot-message");
    }

    div.innerHTML = message;

    chatContainer.appendChild(div);

    chatContainer.scrollTop = chatContainer.scrollHeight;

    return div;
}
    */