import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// Gets One Prompt by Id
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) return new Response("Prompt not found", { status: 404 });
    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    return new Response("failed to GET prompt", {
      status: 500,
    });
  }
};

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json(); // Gets data from Body
  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);
    // What exactly is existingPrompt? an object?

    if (!existingPrompt)
      return new Response("Prompt not found", { status: 404 });
    existingPrompt.prompt = prompt; // Update Existing prompt w/ new one passed in by params
    existingPrompt.tag = tag;
    await existingPrompt.save(); // ???

    return new Response("Successfully updated the Prompts", {
      status: 200,
    });
  } catch (error) {
    return new Response("failed to PATCH prompt", {
      status: 500,
    });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await Prompt.findByIdAndDelete(params.id);
    return new Response("Prompt deleted sucessfully", {
      status: 200,
    });
  } catch (error) {
    return new Response("failed to DELETE prompt", {
      status: 500,
    });
  }
};
