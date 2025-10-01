import { Request, Response } from "express";
import { deleteCommentById } from "../../business/usecases/commentUsecases/deleteComment";


export const deleteComment = async (req: Request, res: Response) => {
  const { commentId } = req.params;

  if (!commentId) {
    return res.status(400).json({ message: "Comment ID is required" });
  }

  try {
    const updatedTask = await deleteCommentById(commentId);
    res.status(200).json({
      message: "Comment deleted successfully",
      task: updatedTask,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to delete comment" });
  }
};