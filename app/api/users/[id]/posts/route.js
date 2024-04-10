import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// Gets All User's Prompts
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    // finds only values that match id param
    const prompts = await Prompt.find({
      creator: params.id, // get id param
    }).populate("creator");

    return new Response(JSON.stringify(prompts), {
      status: 201,
    });
  } catch (error) {
    return new Response("failed to fetch all prompt", {
      status: 500,
    });
  }
};
