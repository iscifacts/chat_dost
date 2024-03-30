document.addEventListener("DOMContentLoaded", function() {
  const chatbotToggler = document.querySelector(".chatbot-toggler");
  const chatbot = document.querySelector(".chatbot");
  const sendBtn = document.getElementById("send-btn");
  const chatInput = document.querySelector(".chat-input textarea");
  const chatbox = document.querySelector(".chatbox");
  const closeBtn = document.querySelectorAll(".close-btn");
  

  chatbotToggler.addEventListener("click", function() {
      document.body.classList.toggle("show-chatbot");
  });


  // Close chatbot
  closeBtn.forEach(function(btn) {
      btn.addEventListener("click", function() {
          chatbot.classList.remove("active");
      });
  });

  // Send message
  sendBtn.addEventListener("click", function() {
      sendMessage();
  });

  // Send message on Enter key press
  chatInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
          sendMessage();
      }
  });

  // Function to send message
  function sendMessage() {
      const message = chatInput.value.trim();
      if (message === "") return;

      appendMessage(message, "outgoing");

      // Logic for bot responses based on user input
      const botResponse = getBotResponse(message);
      appendMessage(botResponse, "incoming");

      // Clear input field after sending message
      chatInput.value = "";
  }

  // Function to append message to chatbox
  function appendMessage(message, type) {
      const chatItem = document.createElement("li");
      chatItem.classList.add("chat", type === "outgoing" ? "outgoing" : "incoming");

      const iconSpan = document.createElement("span");
      iconSpan.classList.add("material-symbols-outlined");
      iconSpan.textContent = type === "outgoing" ? "smart_toy" : "person";

      const messagePara = document.createElement("p");
      messagePara.textContent = message;

      chatItem.appendChild(iconSpan);
      chatItem.appendChild(messagePara);

      chatbox.appendChild(chatItem);

      // Scroll to bottom of chatbox
      chatbox.scrollTop = chatbox.scrollHeight;
  }

  // Function to get bot response based on user input
  function getBotResponse(message) {
    message = message.toLowerCase().trim();
    if (message.includes("hi") || message.includes("hello")) {
      return "Hello! How can I help you today?";
    } else if (message.includes("how are you")) {
      return "I'm just a bot, but thanks for asking!";
    } else if (message.includes("i have a query")) {
      return "I'm just a bot, but I'll do my best to help you!";
    } else if (message.includes("how to register for an event")) {
      return "To register for an event, you can visit the event's website or registration page and look for a button or link that says 'Register,' 'Sign Up,' or 'Buy Tickets.' Fill out the required fields, choose the type of ticket or registration you need, and enter your payment information. Once you've completed the registration process, you should receive a confirmation email. If you're having trouble registering, you can contact the event organizers for help.";
    } else if (message.includes("how to host an event") ||message.includes("how to host event") || message.includes("I want to host event")) {
      return "Hosting an event involves several steps, such as choosing a venue, setting a date and time, determining the format and agenda, and promoting the event. You'll also need to manage logistics, such as catering, audio-visual equipment, and registration. It's important to plan carefully and communicate clearly with all stakeholders. Would you like more specific advice on any of these topics?";
    } 
    else if (message.includes("how carpooling works on weconnect")) {
        return "WeConnect's carpooling feature allows you to share rides with other users who are going to the same destination. To use carpooling, you can open the WeConnect app and look for rides that match your commute or schedule. Once you find a suitable ride, you can request to join it. Once your request is accepted, you'll receive details about the pickup location and time. You can also offer rides to other users and earn rewards for sharing your car.";
    }
    else if(message.includes("")){

    }
     
    else if (message.includes("time")) {
      const currentTime = new Date().toLocaleTimeString();
      return "The current time is " + currentTime + ".";
    } else {
      return "Sorry, I didn't understand that.";
    }
  }
}
);
