"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.updateTask = exports.deleteTask = exports.fetchAllTasks = exports.saveTask = void 0;
var taskModal_1 = require("../../models/taskModal");
function saveTask(data) {
    return __awaiter(this, void 0, void 0, function () {
        var task, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    task = new taskModal_1.Task(__assign({}, data));
                    return [4 /*yield*/, task.save()];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error saving task:", error_1);
                    throw new Error("Failed to save task");
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.saveTask = saveTask;
function fetchAllTasks() {
    return __awaiter(this, void 0, void 0, function () {
        var tasks, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, taskModal_1.Task.find()];
                case 1:
                    tasks = _a.sent();
                    return [2 /*return*/, tasks];
                case 2:
                    error_2 = _a.sent();
                    console.error("Error fetching tasks:", error_2);
                    throw new Error("Failed to fetch tasks");
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.fetchAllTasks = fetchAllTasks;
var deleteTask = function (taskId) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedTask, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, taskModal_1.Task.findByIdAndDelete(taskId)];
            case 1:
                deletedTask = _a.sent();
                return [2 /*return*/, deletedTask];
            case 2:
                error_3 = _a.sent();
                throw new Error("Error deleting task: " + error_3);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteTask = deleteTask;
var updateTask = function (taskId, updateData) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedTask, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, taskModal_1.Task.findByIdAndUpdate(taskId, { $set: updateData }, { new: true } // return updated doc
                    )];
            case 1:
                updatedTask = _a.sent();
                return [2 /*return*/, updatedTask];
            case 2:
                error_4 = _a.sent();
                throw new Error("Error updating task: " + error_4);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateTask = updateTask;
