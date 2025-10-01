import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    taskId: {
      type: String, // You can also use Number or UUID depending on requirement
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed", "on-hold"], // restrict values
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high", "urgent"],
      default: "medium",
    },
    due_date: {
      type: Date,
    },
    tags: [
      {
        type: String,
      },
    ],
    assigned_to: {
      type: String,
    },
    assigned_by: {
      type: String,
    },
    comments: [
      {
        user: {
          type: String,
        },
        text: {
          type: String,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);

export const Task = mongoose.model("Task", taskSchema);
