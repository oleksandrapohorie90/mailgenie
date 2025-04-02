"use client";

import { createContext, useContext, useState } from "react";
import type { Chatbot, ChatMessage } from "@prisma/client";

type ChatContextType = {
  chatRoom: Chatbot | null;
  chats: ChatMessage[];
  loading: boolean;
  realtime: boolean;
  setChatRoom: (room: Chatbot | null) => void;
  setChats: (messages: ChatMessage[]) => void;
  setLoading: (loading: boolean) => void;
  setRealtime: (state: boolean) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [chatRoom, setChatRoom] = useState<Chatbot | null>(null);
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [realtime, setRealtime] = useState(true);

  return (
    <ChatContext.Provider
      value={{
        chatRoom,
        chats,
        loading,
        realtime,
        setChatRoom,
        setChats,
        setLoading,
        setRealtime,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};



// import { createContext, useContext } from "react";
// import type { Chatbot, ChatMessage } from "@prisma/client";

// export type ChatContextType = {
//   chatRoom: Chatbot | null;
//   chats: ChatMessage[];
//   loading: boolean;
//   realtime: boolean;
//   setChatRoom: (room: Chatbot | null) => void;
//   setChats: (messages: ChatMessage[]) => void;
//   setLoading: (loading: boolean) => void;
//   setRealtime: (state: boolean) => void;
// };

// // Initial dummy context for type structure (not to be used directly)
// export const ChatContext = createContext<ChatContextType | undefined>(undefined);

// // Hook to access the context
// export const useChatContext = () => {
//   const context = useContext(ChatContext);
//   if (!context) {
//     throw new Error("useChatContext must be used within a ChatProvider");
//   }
//   return context;
// };


//is this is okay, or below code is ok to have a component, but then VS makes it as a tsx and not ts
//we are importing a backend components into backend file