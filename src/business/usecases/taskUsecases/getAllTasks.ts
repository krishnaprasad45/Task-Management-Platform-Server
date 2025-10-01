import { deleteTask, fetchAllTasks } from "../../../adapters/data-access/repositories/taskRepository/taskRepositoty";

export async function getAllTasks() {
  const tasks = await fetchAllTasks();
  if (!tasks || tasks.length === 0) {
    console.log("nooooo.....")
    // throw new Error("No tasks found");
  }
  return tasks;
}

export const deleteTaskById = async (taskId: string) => {
  if (!taskId) {
    throw new Error("Task ID is required");
  }

  const deletedTask = await deleteTask(taskId);

  if (!deletedTask) {
    throw new Error("Task not found or already deleted");
  }

  return deletedTask;
};


module.exports = { getAllTasks,deleteTaskById };