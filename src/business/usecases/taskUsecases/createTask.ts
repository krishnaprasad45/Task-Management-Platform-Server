import { saveTask } from "../../../adapters/data-access/repositories/taskRepository/taskRepositoty";
import { TaskCreateInterface } from "../../Interfaces/taskInterface";
import { v4 as uuidv4 } from "uuid";


export async function createTask(taskData: TaskCreateInterface, assigned_by?: string) {
  if (!taskData.title || !taskData.description || !taskData.assigned_to) {
    throw new Error("Title, description, and assigned_to are required");
  }

  const taskToSave = {
    ...taskData,
    taskId: uuidv4(), // generate unique taskId
    status: taskData.status || "pending",
    priority: taskData.priority || "medium",
    assigned_by: assigned_by || undefined, 
     comments: taskData.comments?.map(c => ({
      ...c,
      user: c.user, // make sure this is ObjectId from User
    })) || [],
  };

  return await saveTask(taskToSave);
}
