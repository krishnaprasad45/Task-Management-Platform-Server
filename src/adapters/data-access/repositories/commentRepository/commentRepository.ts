import { Task } from "../../models/taskModal";

export const deleteCommentFromTask = async (commentId: string) => {
  const updatedTask = await Task.findOneAndUpdate(
    { "comments._id": commentId },       // find the comment in any task
    { $pull: { comments: { _id: commentId } } }, // remove it
    { new: true }                        // return updated task
  );


  if (!updatedTask) {
    throw new Error("Comment not found");
  }

  return updatedTask;
};

export const updateCommentFromTask = async (commentId: string, text: string) => {
  const updatedTask = await Task.findOneAndUpdate(
    { "comments._id": commentId },
    { $set: { "comments.$.text": text, "comments.$.updatedAt": new Date() } },
    { new: true } // return updated doc
  );

  return updatedTask;
};