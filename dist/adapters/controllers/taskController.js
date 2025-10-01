"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteTask = exports.listTasks = exports.userCreateTask = void 0;
var createTask_1 = require("../../business/usecases/taskUsecases/createTask");
var getAllTasks_1 = require("../../business/usecases/taskUsecases/getAllTasks");
var updateTask_1 = require("../../business/usecases/taskUsecases/updateTask");
var userCreateTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var taskData, savedTask, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                taskData = req.body;
                return [4 /*yield*/, (0, createTask_1.createTask)(taskData, (_a = req.user) === null || _a === void 0 ? void 0 : _a._id)];
            case 1:
                savedTask = _b.sent();
                res.status(201).json({ message: "Task created successfully", task: savedTask });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error("Error creating task:", error_1);
                res.status(500).json({ message: error_1.message || "Internal server error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.userCreateTask = userCreateTask;
var listTasks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, getAllTasks_1.getAllTasks)()];
            case 1:
                users = _a.sent();
                res.status(200).json(users);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error("Error fetching users:", error_2);
                res.status(500).json({ message: error_2.message || "Internal server error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.listTasks = listTasks;
var deleteTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var taskId, deletedTask, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                taskId = req.params.taskId;
                if (!taskId) {
                    return [2 /*return*/, res.status(400).json({ message: "Task ID is required" })];
                }
                return [4 /*yield*/, (0, getAllTasks_1.deleteTaskById)(taskId)];
            case 1:
                deletedTask = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        message: "Task deleted successfully",
                        task: deletedTask,
                    })];
            case 2:
                error_3 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: error_3.message || "Error deleting task" })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteTask = deleteTask;
var updateTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var taskId, updateData, updatedTask, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                taskId = req.params.taskId;
                updateData = req.body;
                return [4 /*yield*/, (0, updateTask_1.updateTaskById)(taskId, updateData)];
            case 1:
                updatedTask = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        message: "Task updated successfully",
                        task: updatedTask,
                    })];
            case 2:
                error_4 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: error_4.message || "Error updating task" })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateTask = updateTask;
module.exports = { userCreateTask: exports.userCreateTask, listTasks: exports.listTasks, deleteTask: exports.deleteTask, updateTask: exports.updateTask };
