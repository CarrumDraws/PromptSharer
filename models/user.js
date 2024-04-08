import { Schema, model, models } from "mongoose";
// Define schema here
const UserSchema = new Schema({
  email: {
    type: String,
    //   Message sent if 'unique' check fails
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    // Regex that checks valid username
    // match: [
    //   /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    //   "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    // ],
  },
  image: {
    type: String,
  },
});

// Note: In Next.js, route only runs when server gets called.
// Prevent models.User from being redefined by checking if models object already has "User."
const User = models.User || model("User", UserSchema);

export default User;
