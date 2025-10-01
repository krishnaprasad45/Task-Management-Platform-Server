import * as taskRepo from "../../../adapters/data-access/repositories/commentRepository/commentRepository";

export const deleteCommentById = async (commentId: string) => {
  try {
    const updatedTask = await taskRepo.deleteCommentFromTask(commentId);
    return updatedTask;
  } catch (error) {
    throw error;
  }
};