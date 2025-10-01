export interface TaskCreateInterface {
  title: string;
  description: string;
  status?: "pending" | "in-progress" | "completed" | "on-hold";
  priority?: "low" | "medium" | "high" | "urgent";
  due_date?: string;
  assigned_to: string;
  comments?: {
    user: string;
    text: string;
    createdAt?: Date;
  }[];
}
