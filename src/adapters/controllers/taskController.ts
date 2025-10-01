import { TaskCreateInterface } from "../../business/Interfaces/taskInterface";
import { createTask } from "../../business/usecases/taskUsecases/createTask";
import { deleteTaskById, getAllTasks } from "../../business/usecases/taskUsecases/getAllTasks";
import { updateTaskById } from "../../business/usecases/taskUsecases/updateTask";
import { Task } from "../data-access/models/taskModal";
import { Request, Response } from "express";


export const userCreateTask = async (req: Request, res: Response) => {
  try {
    const taskData = req.body as unknown as TaskCreateInterface;

    // Call useCase
    const savedTask = await createTask(taskData, (req as any).user?._id);

    res.status(201).json({ message: "Task created successfully", task: savedTask });
  } catch (error: any) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};

export const listTasks = async (req: Request, res: Response) => {
  try {
    const users = await getAllTasks();
    res.status(200).json(users);
  } catch (error: any) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
     const { taskId } = req.params;
    if (!taskId) {
      return res.status(400).json({ message: "Task ID is required" });
    }

    const deletedTask = await deleteTaskById(taskId);
    return res.status(200).json({
      message: "Task deleted successfully",
      task: deletedTask,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message || "Error deleting task" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    const updateData = req.body;

    const updatedTask = await updateTaskById(taskId, updateData);

    return res.status(200).json({
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message || "Error updating task" });
  }
};

module.exports = { userCreateTask, listTasks,deleteTask,updateTask };
