import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { ChatBotMessageSchema, ChatBotMessageSchemaType } from "@/schemas/message";
import { useChatContext } from "@/context/use-chat-context";
import { onOwnerSendMessage, onRealTimeChat } from "@/actions/conversation";
import { pusherClient } from "@/lib/utils";

export const useChatWindow = () => {
  const {
    chatRoom,
    chats,
    setChats,
  } = useChatContext();

  const bottomRef = useRef<HTMLDivElement>(null);

  const form = useForm<ChatBotMessageSchemaType>({
    resolver: zodResolver(ChatBotMessageSchema),
    defaultValues: {
      message: "",
    },
  });

  const { handleSubmit, register, reset } = form;

  // 1. On form submit
  const onSubmit = async (data: ChatBotMessageSchemaType) => {
    if (!chatRoom) return;

    try {
      const message = await onOwnerSendMessage(chatRoom.id, data.message, "user");

      // Broadcast to Pusher
      await onRealTimeChat(chatRoom.id, message.message, message.id, "user");

      reset(); // clear the input
    } catch (err) {
      console.error("Send message error:", err);
    }
  };

  // 2. Listen for new messages via Pusher
  useEffect(() => {
    if (!chatRoom) return;

    const channel = pusherClient.subscribe(chatRoom.id);

    const handleIncoming = (message: any) => {
      setChats([...chats, message]);
    };

    channel.bind("incoming-message", handleIncoming);

    return () => {
      channel.unbind("incoming-message", handleIncoming);
      pusherClient.unsubscribe(chatRoom.id);
    };
  }, [chatRoom, chats]);

  // 3. Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return {
    form,
    register,
    handleSubmit,
    onSubmit,
    bottomRef,
  };
};
