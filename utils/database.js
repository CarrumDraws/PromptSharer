// Connect to Db here.

import mongoose from "mongoose";

let isConnected = false; // Tracks connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); // Set mongoose options

  // If connected, return...
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  // ...else, try to estblish the connection
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
