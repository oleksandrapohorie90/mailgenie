import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { ConversationSearchSchema, ConversationSearchSchemaType } from "@/schemas/conversation";
import { onGetDomainChatRooms, onGetChatMessages } from "@/actions/conversation";
import { useChatContext } from "@/context/use-chat-context";

export const useConversation = () => {
    // Step 1: Setup form for domain search
    const form = useForm<ConversationSearchSchemaType>({
      resolver: zodResolver(ConversationSearchSchema),
      defaultValues: {
        domain: "",
      },
    });
  
    const domainValue = form.watch("domain");
  
    // Local state to store chatRooms
    const [chatRooms, setChatRooms] = useState<any[]>([]); // You can use Chatbot[] if type is available
  
    const {
      setChats,
      setChatRoom,
      setLoading,
    } = useChatContext();
  
    // Step 2: React to domain input change
    useEffect(() => {
      const delayDebounce = setTimeout(() => {
        const fetchChatRooms = async () => {
          if (!domainValue) return;
          try {
            const rooms = await onGetDomainChatRooms(domainValue);
            setChatRooms(rooms);
          } catch (err) {
            console.error("Failed to fetch chat rooms:", err);
          }
        };
  
        fetchChatRooms();
      }, 500); // debounce
  
      return () => clearTimeout(delayDebounce);
    }, [domainValue]);
  
    // Step 3: Function to load messages when a room is clicked
    const onGetActiveChatMessages = async (roomId: string) => {
      try {
        setLoading(true);
        const messages = await onGetChatMessages(roomId);
  
        const selectedRoom = chatRooms.find(room => room.id === roomId);
        setChatRoom(selectedRoom || null);
        setChats(messages);
      } catch (err) {
        console.error("Failed to load messages:", err);
      } finally {
        setLoading(false);
      }
    };
  
    return {
      form,
      chatRooms,
      onGetActiveChatMessages,
    };
  };
  