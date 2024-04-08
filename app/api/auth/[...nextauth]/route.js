// API Backend Routes
// (route.js is a special filename)
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // Triggers after signIn(): Check if user already exists, if not then create new user + save to DB
    async signIn({ profile }) {
      console.log("signIn");
      try {
        // Our routes are "serverless."
        // Route only runs when server gets called.
        // We need to spin up the server + connect to db each time

        // Connect to mongoose
        await connectToDB();

        // check if user already exists via their email
        const userExists = await User.findOne({
          email: profile.email,
        });

        // if not, create a new user + save to DB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // Trigger when session is called: Tracks which users are online
    async session({ session }) {
      console.log("session");
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString(); // Update userID
      return session;
    },
  },
});

export { handler as GET, handler as POST };
