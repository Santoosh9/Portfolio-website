import React from ‘react’;
import { Chatbot } from ‘react-chatbot-kit’;

const ChatbotComponent = () => {
return (
<div>
<Chatbot
config={config}
actionProvider={actionProvider}
messageParser={messageParser}
/>
</div>
);
};

export default ChatbotComponent;