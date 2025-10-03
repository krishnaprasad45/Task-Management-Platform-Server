import express from "express";
import { userSignup, userLogin, profile, profileUpdate, listUsers} from "../../../adapters/controllers/userController";
import { deleteTask, listTasks, updateTask, userCreateTask} from "../../../adapters/controllers/taskController";
import { verifyToken } from "../middleware/jwtTokenAuth";
import { deleteComment, updateComment } from "../../../adapters/controllers/commentController";

const userRoute = express.Router();


// Auth
userRoute.post("/signup", userSignup);
userRoute.post("/login", userLogin);

// Profile
userRoute.get("/profile", verifyToken, profile);
userRoute.post("/profile/update", verifyToken, profileUpdate);

// Users
userRoute.get("/list-users", verifyToken, listUsers);

// Tasks
userRoute.post("/create-task", verifyToken, userCreateTask);
userRoute.get("/list-tasks", verifyToken, listTasks);
userRoute.patch("/update-task/:taskId", verifyToken, updateTask);
userRoute.delete("/delete-task/:taskId", verifyToken, deleteTask);

// Comments
userRoute.patch("/update-comment/:commentId", verifyToken, updateComment);
userRoute.delete("/delete-comment/:commentId", verifyToken, deleteComment);




export default userRoute;