import { connectToDB } from "@utils/database";
import User from "@models/user";

// Get User Data
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    // finds only values that match id param
    const user = await User.findById(
      params.id // get id param
    );

    return new Response(JSON.stringify(user), {
      status: 201,
    });
  } catch (error) {
    return new Response("failed to fetch user", {
      status: 500,
    });
  }
};
