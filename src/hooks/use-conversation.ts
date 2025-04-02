// src/hooks/use-conversation.ts
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  onGetChatMessages,
  onGetDomainChatRooms,
} from "@/actions/conversation";
import { useChatContext } from "@/context/use-chat-context";
import {
  ConversationSearchSchema,
  ConversationSearchSchemaType,
} from "@/schemas/conversation.schema";
import type { ChatMessage, Chatbot } from "@prisma/client";

export const useConversation = () => {
  const {
    setChatRoom,
    setChats,
    setLoading,
    loading,
    chats,
  } = useChatContext();

  const [chatRooms, setChatRooms] = useState<Chatbot[]>([]);

  const { register, watch } = useForm<ConversationSearchSchemaType>({
    resolver: zodResolver(ConversationSearchSchema),
    mode: "onChange",
  });

  const search = watch();

  useEffect(() => {
    const fetchChatRooms = async () => {
      if (!search.domain) return;

      try {
        setLoading(true);
        const rooms: Chatbot[] = await onGetDomainChatRooms(search.domain);
        setChatRooms(rooms);
      } catch (error) {
        console.error("Failed to fetch chat rooms", error);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounce = setTimeout(fetchChatRooms, 500);
    return () => clearTimeout(delayDebounce);
  }, [search.domain]);

  const onGetActiveChatMessages = async (id: string) => {
    try {
      setLoading(true);
      const messages: ChatMessage[] = await onGetChatMessages(id);
      const selectedRoom = chatRooms.find((room) => room.id === id) || null;

      setChatRoom(selectedRoom);
      setChats(messages);
    } catch (error) {
      console.error("Failed to get active chat messages", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    search,
    chatRooms,
    loading,
    chats,
    onGetActiveChatMessages,
  };
};


// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   onGetChatMessages,
//   onGetDomainChatRooms,
// } from "@/actions/conversation";
// import { useChatContext } from "@/context/use-chat-context";
// import {
//   ConversationSearchSchema,
//   ConversationSearchSchemaType,
// } from "@/schemas/conversation.schema";

// export const useConversation = () => {
//   const {
//     setChatRoom,
//     setChats,
//     setLoading,
//     loading,
//     chats,
//   } = useChatContext();

//   const [chatRooms, setChatRooms] = useState<any[]>([]);

//   const { register, watch } = useForm<ConversationSearchSchemaType>({
//     resolver: zodResolver(ConversationSearchSchema),
//     mode: "onChange",
//   });

//   const search = watch();

//   useEffect(() => {
//     const fetchChatRooms = async () => {
//       if (!search.domain) return;

//       try {
//         setLoading(true);
//         const rooms = await onGetDomainChatRooms(search.domain);
//         setChatRooms(rooms);
//       } catch (error) {
//         console.error("Failed to fetch chat rooms", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const delayDebounce = setTimeout(fetchChatRooms, 500);
//     return () => clearTimeout(delayDebounce);
//   }, [search.domain]);

//   const onGetActiveChatMessages = async (id: string) => {
//     try {
//       setLoading(true);
//       const messages = await onGetChatMessages(id);
//       const selectedRoom = chatRooms.find((room) => room.id === id);

//       if (selectedRoom) {
//         setChatRoom(selectedRoom);
//         setChats(messages);
//       }
//     } catch (error) {
//       console.error("Failed to get active chat messages", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     register,
//     search,
//     chatRooms,
//     loading,
//     chats,
//     onGetActiveChatMessages,
//   };
// };



// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useEffect, useState } from "react";
// import { ConversationSearchSchema } from "@/schemas/conversation.schema";
// import { onGetDomainChatRooms, onGetChatMessages } from "@/actions/conversation";
// import { useChatContext } from "@/context/use-chat-context";

// export const useConversation = () => {
//     // Step 1: Setup form for domain search
//     const form = useForm<ConversationSearchSchemaType>({
//       resolver: zodResolver(ConversationSearchSchema),
//       defaultValues: {
//         domain: "",
//       },
//     });
  
//     const domainValue = form.watch("domain");
  
//     // Local state to store chatRooms
//     const [chatRooms, setChatRooms] = useState<any[]>([]); // You can use Chatbot[] if type is available
  
//     const {
//       setChats,
//       setChatRoom,
//       setLoading,
//     } = useChatContext();
  
//     // Step 2: React to domain input change
//     useEffect(() => {
//       const delayDebounce = setTimeout(() => {
//         const fetchChatRooms = async () => {
//           if (!domainValue) return;
//           try {
//             const rooms = await onGetDomainChatRooms(domainValue);
//             setChatRooms(rooms);
//           } catch (err) {
//             console.error("Failed to fetch chat rooms:", err);
//           }
//         };
  
//         fetchChatRooms();
//       }, 500); // debounce
  
//       return () => clearTimeout(delayDebounce);
//     }, [domainValue]);
  
//     // Step 3: Function to load messages when a room is clicked
//     const onGetActiveChatMessages = async (roomId: string) => {
//       try {
//         setLoading(true);
//         const messages = await onGetChatMessages(roomId);
  
//         const selectedRoom = chatRooms.find(room => room.id === roomId);
//         setChatRoom(selectedRoom || null);
//         setChats(messages);
//       } catch (err) {
//         console.error("Failed to load messages:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     return {
//       form,
//       chatRooms,
//       onGetActiveChatMessages,
//     };
//   };
  