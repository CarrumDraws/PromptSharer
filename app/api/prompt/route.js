import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// Gets All Prompts
export const GET = async (req) => {
  try {
    await connectToDB();

    // find() queries documents based on specific criteria (like WHERE).
    // find({}) returns all documents.
    // creator is a referenced document (Foreign Key)
    // .populate("creator") returns whole "creator" object (Left join)
    // email, image, username
    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), {
      status: 201,
    });
  } catch (error) {
    return new Response("failed to fetch all prompt", {
      status: 500,
    });
  }
};
