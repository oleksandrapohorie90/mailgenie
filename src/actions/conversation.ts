'use server'

import { prisma } from "@/lib/prisma"
import { pusherServer } from "@/lib/utils"

export const onGetDomainChatRooms = async (domain: string) => {
  const rooms = await prisma.chatbot.findMany({
    where: {
      domain: {
        name: domain,
      },
    },
    include: {
      chatMessages: true, // matches your Prisma model
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return rooms;
}
'use server'

export const onToggleRealtime = async (id: string, state: boolean) => {
  const room = await prisma.chatbot.update({
    where: { id },
    data: {
      isRealtime: state,
    },
  });

  return room;
};
'use server'

export const onGetConversationMode = async (id: string) => {
  const room = await prisma.chatbot.findUnique({
    where: { id },
    select: {
      isRealtime: true,
    },
  });

  return room?.isRealtime;
};

'use server'

export const onGetChatMessages = async (id: string) => {
  const messages = await prisma.chatMessage.findMany({
    where: { chatRoomId: id },
    orderBy: { createdAt: "asc" },
  });

  return messages;
};

'use server'

export const onViewUnReadMessages = async (roomId: string) => {
  await prisma.chatMessage.updateMany({
    where: {
      chatRoomId: roomId,
      seen: false,
    },
    data: {
      seen: true,
    },
  });
};

'use server'

export const onOwnerSendMessage = async (
  chatroomId: string,
  message: string,
  role: 'user' | 'assistant'
) => {
  const msg = await prisma.chatMessage.create({
    data: {
        message: message,
        role,
        chatRoomId: chatroomId,
        seen: false, // required threw an error on data without it, default value for the 'seen' property
    },
  });

  return msg;
};

'use server'

export const onRealTimeChat = async (
  chatroomId: string,
  message: string,
  id: string,
  role: 'assistant' | 'user'
) => {
  await pusherServer.trigger(chatroomId, "incoming-message", {
    id,
    chatroomId,
    message,
    role,
    createdAt: new Date().toISOString(),
  });
};

