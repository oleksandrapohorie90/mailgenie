export default function Page() {
    return <h1 className="text-2xl font-bold">Welcome to Conversations</h1>;
  }
  
// This marks the file as a client-side file (required when using client-side hooks like useState/useEffect)
// ❗️BUT — this file is `async`, so we don't need "use client" here. Server component is fine.
// import { onGetAllAccountDomains } from "@/actions/settings"; // ✅ Action that fetches all domains for the user

// // These are React components you (or your team) should have or will build
// import ConversationMenu from "@/components/conversations/conversation-menu";
// import Messenger from "@/components/conversations/messenger";
// import InfoBar from "@/components/conversations/info-bar";
// import { Separator } from "@/components/ui/separator";

// import React from "react";

// // This is a server component that loads conversation layout
// const ConversationPage = async () => {
//   // ✅ Step 1: Get domains from DB (based on logged-in user)
//   const domains = await onGetAllAccountDomains();

//   // ✅ Step 2: Render layout
//   return (
//     <div className="w-full h-full flex">
//       {/* Left sidebar: list of domains to chat with */}
//       <ConversationMenu domains={domains.domains} />

//       {/* Vertical line divider */}
//       <Separator orientation="vertical" />

//       {/* Right side: info bar + chat messenger */}
//       <div className="w-full flex flex-col">
//         <div className="px-5">
//           <InfoBar />
//         </div>
//         <Messenger />
//       </div>
//     </div>
//   );
// };

// export default ConversationPage;
