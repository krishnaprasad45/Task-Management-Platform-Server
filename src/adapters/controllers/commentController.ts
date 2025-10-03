import { Request, Response } from "express";
import { deleteCommentById } from "../../business/usecases/commentUsecases/deleteComment";
import { updateCommentById } from "../../business/usecases/commentUsecases/updateComment";


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



export const updateComment = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params;
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Updated text is required" });
    }

    const updatedTask = await updateCommentById(commentId, text);

    if (!updatedTask) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json({
      message: "Comment updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    console.error("Error updating comment:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
