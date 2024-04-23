import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User", // Refrences User Schema (Like Foreign Key)
  },
  prompt: {
    type: String,
    required: [true, "Prompt is Required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is Required"],
  },
});

// Define text indexes on prompt and tag fields
PromptSchema.index({ prompt: "text", tag: "text" });

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
