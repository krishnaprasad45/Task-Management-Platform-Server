import express from "express";
import { userSignup, userLogin, profile, profileUpdate, listUsers} from "../../../adapters/controllers/userController";
import { deleteTask, listTasks, updateTask, userCreateTask} from "../../../adapters/controllers/taskController";
import { verifyToken } from "../middleware/jwtTokenAuth";
import { deleteComment } from "../../../adapters/controllers/commentController";

const userRoute = express.Router();


userRoute.post("/signup", userSignup);
userRoute.post("/login", userLogin);
userRoute.get("/profile", verifyToken, profile);
userRoute.get("/list-users", verifyToken,listUsers);
userRoute.post("/profile/update",verifyToken, profileUpdate);
userRoute.post("/create-task",verifyToken, userCreateTask);
userRoute.get("/list-tasks",verifyToken, listTasks);
userRoute.delete("/delete-task/:taskId", verifyToken, deleteTask);
userRoute.patch("/update-task/:taskId", verifyToken, updateTask);
userRoute.delete("/delete-comment/:commentId", verifyToken, deleteComment);



export default userRoute;