import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
//import { prisma } from "@/lib/prisma"; 
import { createUser } from "@/app/actions/user";

export async function POST(req: Request) {
  try {
    const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!CLERK_WEBHOOK_SECRET) {
      console.error("❌ Error: CLERK_WEBHOOK_SECRET is missing.");
      return NextResponse.json({ error: "Missing secret" }, { status: 500 });
    }

    const wh = new Webhook(CLERK_WEBHOOK_SECRET);
    
    // Await headers() before calling .get()
    const headerPayload = await headers();  

    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {
      return NextResponse.json({ error: "Missing Svix headers" }, { status: 400 });
    }

    // Parse the incoming request
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // Verify the webhook
    const evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;

    console.log(`✅ Received webhook with type: ${evt.type}`);
    console.log(`📌 Webhook payload:`, evt.data);

    if (evt.type === "user.created") {
      const userData = evt.data;
      console.log(`🆕 New user created with Clerk ID: ${userData.id}`);

   


        const newUser = await createUser({
          fullname: `${userData.first_name} ${userData.last_name}`,
          clerkId: userData.id,
          type: "user",
          stripeId: "", 
      });

      if (newUser) {
        console.log("✅ User stored in database successfully.");
      } else {
        console.log("⚠️ User could not be saved.");
      }
    }
    // Always return a response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Webhook processing failed:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// was working recent one
// import { headers } from "next/headers";
// import { WebhookEvent } from "@clerk/nextjs/server";
// import { Webhook } from "svix";
// import { prisma } from "@/lib/prisma";

// export async function POST(req: Request) {
//   console.log("Webhook received");
//   const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

//   if (!WEBHOOK_SECRET) {
//     console.error("Missing CLERK_WEBHOOK_SECRET");
//     throw new Error(
//       "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env"
//     );
//   }

//   const headerPayload = await headers(); //changed with copilot added the await
//   const svix_id = headerPayload.get("svix-id");
//   const svix_timestamp = headerPayload.get("svix-timestamp");
//   const svix_signature = headerPayload.get("svix-signature");

//   console.log("Headers received:", { svix_id, svix_timestamp, svix_signature });

//   if (!svix_id || !svix_timestamp || !svix_signature) {
//     console.error("Missing svix headers");
//     return new Response("Error occurred -- no svix headers", {
//       status: 400,
//     });
//   }

//   const payload = await req.json();
//   const body = JSON.stringify(payload);
//   console.log("Webhook body:", body);

//   const wh = new Webhook(WEBHOOK_SECRET);

//   let evt: WebhookEvent;

//   try {
//     evt = wh.verify(body, {
//       "svix-id": svix_id,
//       "svix-timestamp": svix_timestamp,
//       "svix-signature": svix_signature,
//     }) as WebhookEvent;
//     console.log("Webhook verified successfully");
//   } catch (err) {
//     console.error("Error verifying webhook:", err);
//     return new Response("Error occurred", {
//       status: 400,
//     });
//   }

//   const eventType = evt.type;
//   console.log("Event type:", eventType);

//   if (eventType === "user.created") {
//     const { id, first_name, last_name } = evt.data;

//     try {
//       const user = await prisma.user.upsert({ //changed with copilot
//         where: { id }, //changed with copilot need to use the id properly instead of clerkId
//         create: {
//           clerkId: id,
//           fullname: `${first_name || ""} ${last_name || ""}`.trim(),
//           type: "user",
//         },
//         update: {},
//       });

//       console.log("User created/updated successfully:", user);

//       return new Response(JSON.stringify({ success: true, user }), {
//         status: 201,
//       });
//     } catch (error) {
//       console.error("Error upserting user in database:", error);
//       return new Response(
//         JSON.stringify({ success: false, error: "Failed to upsert user" }),
//         { status: 500 }
//       );
//     }
//   }

//   return new Response("Webhook processed", { status: 200 });
// }

//WAS THIS but gives 403 broken page as before
// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// //needs to be changed
// export async function POST(req: Request) {
//   try {
//     const { id, first_name, last_name } = await req.json();

//     // Save user to NeonDB (PostgreSQL) using Prisma
//     await prisma.user.create({
//       data: {
//         id,
//         fullname: `${first_name || ""} ${last_name || ""}`.trim(), // Store full name
//         clerkId: id, // Store Clerk ID
//         type: "user", // Default user type, modify as needed
//       },
//     });

//     return NextResponse.json({ message: "User created successfully" }, { status: 201 });
//   } catch (error) {
//     console.error("Error saving user:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }


