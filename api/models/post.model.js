import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: "string",
      required: true,
    },
    content: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
      unique: true,
    },
    image: {
      type: "string",
      default:
        "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg",
    },
    category: {
      type: "string",
      default: "uncategorized",
    },
    slug: {
      type: "string",
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
