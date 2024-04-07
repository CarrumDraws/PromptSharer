// API Backend Routes
// (route.js is a special filename)

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      // whats lambda?
      // Our routes are "serverless" meaning its a lambda function that opens only when it gets called!
      // We need to spin up the server + connect to db each time
    } catch (error) {}
  },
});

export { handler as GET, handler as POST };
