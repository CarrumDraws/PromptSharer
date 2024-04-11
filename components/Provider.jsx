"use client"; // Using browser's capabilities (?)

import React from "react";

import { SessionProvider } from "next-auth/react";

function Provider({ children, session }) {
  // Provide session to <SessionProvider>
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default Provider;
