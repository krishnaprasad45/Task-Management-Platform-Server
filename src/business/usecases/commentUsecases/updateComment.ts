import { updateCommentFromTask } from "../../../adapters/data-access/repositories/commentRepository/commentRepository";

export const updateCommentById = async (commentId: string, text: string) => {
  return await updateCommentFromTask(commentId, text);
};
