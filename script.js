document.addEventListener("DOMContentLoaded", () => {
  const chatMessages = document.getElementById("chat-messages");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  // Simple responses for the chatbot
  const botResponses = {
    hello: "Hello! How can I help you today?",
    hi: "Hi there! How can I assist you?",
    "how are you": "I'm doing well, thank you! How about you?",
    "what can you do":
      "I can answer simple questions and have basic conversations. Try asking me something!",
    bye: "Goodbye! Have a great day!",
    default: "I'm not sure I understand. Could you try asking something else?",
  };

  // Function to add a message to the chat
  function addMessage(message, isUser = false) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.classList.add(isUser ? "user-message" : "bot-message");

    const messageText = document.createElement("p");
    messageText.textContent = message;
    messageDiv.appendChild(messageText);

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // scrolls to the bottom of the chat messages
  }

  // Function to get bot response
  function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    for (const [key, value] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return value;
      }
    }

    return botResponses.default;
  }

  // Function to handle sending messages
  function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
      addMessage(message, true);
      userInput.value = "";

      // Simulate bot thinking
      setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessage(botResponse);
      }, 500);
    }
  }

  // Event listeners
  sendButton.addEventListener("click", sendMessage);

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
});
