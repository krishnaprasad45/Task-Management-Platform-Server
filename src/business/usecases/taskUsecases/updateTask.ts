import { updateTask } from "../../../adapters/data-access/repositories/taskRepository/taskRepositoty";

export const updateTaskById = async (taskId: string, updateData: Partial<any>) => {
  if (!taskId) {
    throw new Error("Task ID is required");
  }

  if (!updateData || Object.keys(updateData).length === 0) {
    throw new Error("No update data provided");
  }

  const updatedTask = await updateTask(taskId, updateData);

  if (!updatedTask) {
    throw new Error("Task not found");
  }

  return updatedTask;
};

module.exports = { updateTaskById };