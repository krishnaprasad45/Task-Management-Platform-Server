import { TaskCreateInterface } from "../../../../business/Interfaces/taskInterface";
import { Task } from "../../models/taskModal";

export async function saveTask(data: TaskCreateInterface & { assigned_by?: string }) {
  try {
    const task = new Task({ ...data });
    const result = await task.save();
    return result;
  } catch (error) {
    console.error("Error saving task:", error);
    throw new Error("Failed to save task");
  }
}

export async function fetchAllTasks() {
  try {
    const tasks = await Task.find(); 
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw new Error("Failed to fetch tasks");
  }
}

export const deleteTask = async (taskId: string) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);
    return deletedTask;
  } catch (error) {
    throw new Error("Error deleting task: " + error);
  }
};

export const updateTask = async (taskId: string, updateData: Partial<any>) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { $set: updateData },
      { new: true } // return updated doc
    );
    return updatedTask;
  } catch (error) {
    throw new Error("Error updating task: " + error);
  }
};
