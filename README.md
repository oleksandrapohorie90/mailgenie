This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

2/14
1. Webhook is a url that works when you do a request to it, we have in next.js and url is by folders, we have url on auth/webhook and everything inside, and in this file we have logic. when a user sends a request to this webhook, we have to create users in DB, for that we open local host on ngrok to do these requests;

2. we have to push local url on the ngrok, bc we cant do requests on local url, but ngrok allows to open url live where we can do requests

3. when we have requests on ngrok url, we add the web hook to webhooks > endpoints > URL in dashboard.clerk.com , that is our local host..free-app/api/auth/webhook but in live and the logic for how to create a User is in route.ts

4. how is webhook set up, its set up on the event user/created, so when the user registers it triggers the webhook in the endpoints > URL, then this webhook will create a user in DB, check if user appeares in neon.db

5. prisma - is where we describe all our models, we can change how it looks anytime, we can delete fields etc, but Neon is keeping all the data but we cant do any operations in it

6. dashboard - has curly brackets bc requests wont be accepted here, but auth, api folders(endpoints)will have them, in next.js folders are built by endpoints, thay are all chained
but square brackets are bc clerk has this syntax or endpoint schema and will have some domain(id) that it will have

What is the Server Client ? How requests work, back end front end ?

If we need to change smth in schema we should do migrations!

do we need to change npm run dev every time

//TO DELETE CACHED next.js folder
rm -rf .next

//TO KILL ALL Running processes
pkill -f node

//Run this 
export NEXT_PUBLIC_APP_URL=http://localhost:3000 && npm run dev
(Replace 3000 with whatever port your app starts on.)

*set of commands*

pkill -f node
rm -rf .next
npm run dev

=====================================
FOR npm

 npx prisma migrate dev

 ngrok http 3001

 bun dev

 npx prisma migrate dev --name what_you_changed
 npx prisma migrate dev --name add_new_field_to_user

 npx prisma studio     
 npx prisma generate      
 npx prisma migrate reset  
 npx prisma migrate status  


 FOR bun

 # Development
bun dev                  # Start development server
bun run lint            # Run ESLint
bun run lint:fix        # Fix ESLint issues automatically
bun run format          # Format code with Prettier

# Database
bun run db:push         # Push schema changes to database
bun run db:studio       # Open Prisma Studio

# TypeScript
bun run typecheck       # Type check your code

# Maintenance
bun run clean          # Clean build files and node_modules

# Adding a new package
bun add react-query

# Adding a dev dependency
bun add -d @types/react

# Removing a package
bun remove lodash
