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