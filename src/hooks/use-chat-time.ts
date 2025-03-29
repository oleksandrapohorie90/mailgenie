// src/hooks/use-chat-time.ts

import { useEffect, useMemo } from "react";
import { formatDistanceToNow } from "date-fns";
import { useChatContext } from "@/context/use-chat-context";
import { onViewUnReadMessages } from "@/actions/conversation";

export const useChatTime = (createdAt: Date, roomId: string) => {
  const { chatRoom } = useChatContext();

  // 1. Format human-readable timestamp
  const messageSentAt = useMemo(() => {
    return formatDistanceToNow(new Date(createdAt), { addSuffix: true });
  }, [createdAt]);

  // 2. Check urgency (< 2 hrs old)
  const isUrgent = useMemo(() => {
    const diff = Date.now() - new Date(createdAt).getTime();
    return diff < 1000 * 60 * 60 * 2; // 2 hours in ms
  }, [createdAt]);

  // 3. Mark as read if urgent and active
  useEffect(() => {
    if (isUrgent && chatRoom?.id === roomId) {
      onViewUnReadMessages(roomId).catch((err) =>
        console.error("Error marking as read", err)
      );
    }
  }, [isUrgent, chatRoom?.id, roomId]);

  return {
    messageSentAt,
    isUrgent,
  };
};
