import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    content: {
      type: "string",
      required: true,
    },
    postId: {
      type: "string",
      required: true,
    },
    userId: {
      type: "string",
      required: true,
    },
    likes: {
      type: "array",
      default: [],
    },
    numberOfLikes: {
      type: "number",
      default: 0,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
