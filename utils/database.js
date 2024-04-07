// Connect to Db here.

import mongoose, { mongo } from "mongoose";

let isConnected = false; // Tracks connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  // Try to estblish the connection
  try {
  } catch (error) {}
};
