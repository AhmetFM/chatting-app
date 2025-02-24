import { useState, useEffect } from "react";
import SockJS from "sockjs-client";
import { Client, Message } from "@stomp/stompjs";

interface ChatMessage {
  sender: string;
  content: string;
}

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [stompClient, setStompClient] = useState<Client | null>(null);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    const client = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        client.subscribe("/topic/public", (message: Message) => {
          setMessages((prev) => [...prev, JSON.parse(message.body)]);
        });
      },
    });

    client.activate();
    setStompClient(client);

    return () => {
      if (client) {
        client.deactivate();
      }
    };
  }, []);

  const sendMessage = (message: ChatMessage) => {
    if (stompClient && stompClient.connected) {
      stompClient.publish({
        destination: "/app/chat.sendMessage",
        body: JSON.stringify(message),
      });
    }
  };

  return { messages, sendMessage };
};
