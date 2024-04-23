import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import { NextRequest } from "next/server";

// Gets Prompts from Query
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    // Get query params like so
    let searchQuery = req.nextUrl.searchParams.get("query");

    const prompts = await Prompt.find({
      $text: { $search: `\"${searchQuery}\"` },
    }).populate("creator");

    console.log(prompts);
    return new Response(JSON.stringify(prompts), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new Response("failed to get prompts from query", {
      status: 500,
    });
  }
};
