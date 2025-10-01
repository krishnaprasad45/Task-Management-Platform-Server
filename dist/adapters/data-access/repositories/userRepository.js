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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.updateMentor = exports.updatenewPassword = exports.updateOne = exports.fetchAllUsers = exports.findUserByEmail = exports.saveUser = void 0;
var userModal_1 = __importDefault(require("../models/userModal"));
function saveUser(data) {
    return __awaiter(this, void 0, void 0, function () {
        var user, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    user = new userModal_1.default(__assign({}, data));
                    return [4 /*yield*/, user.save()];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.saveUser = saveUser;
function findUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function () {
        var userData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userModal_1.default.findOne({ email: email })];
                case 1:
                    userData = _a.sent();
                    return [2 /*return*/, userData];
            }
        });
    });
}
exports.findUserByEmail = findUserByEmail;
function fetchAllUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var users, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userModal_1.default.find().select("-password")];
                case 1:
                    users = _a.sent();
                    // exclude password field for security
                    return [2 /*return*/, users];
                case 2:
                    error_2 = _a.sent();
                    console.error("Error fetching users:", error_2);
                    throw new Error("Failed to fetch users");
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.fetchAllUsers = fetchAllUsers;
function updateOne(data) {
    return __awaiter(this, void 0, void 0, function () {
        var userData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userModal_1.default.findOneAndUpdate({ email: data.oldEmail }, {
                        $set: __assign({}, data),
                    }, { new: true })];
                case 1:
                    userData = _a.sent();
                    return [2 /*return*/, userData];
            }
        });
    });
}
exports.updateOne = updateOne;
function updatenewPassword(email, securedPassword) {
    return __awaiter(this, void 0, void 0, function () {
        var userData, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userModal_1.default.findOneAndUpdate({ email: email }, {
                            password: securedPassword,
                        }, { new: true })];
                case 1:
                    userData = _a.sent();
                    return [2 /*return*/, userData];
                case 2:
                    error_3 = _a.sent();
                    console.log("error", error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.updatenewPassword = updatenewPassword;
function updateMentor(email, mentorName, courseId) {
    return __awaiter(this, void 0, void 0, function () {
        var userData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userModal_1.default.findOneAndUpdate({ email: email }, {
                        $set: {
                            mentorIncharge: mentorName,
                            courseId: courseId,
                        },
                    }, { new: true })];
                case 1:
                    userData = _a.sent();
                    return [2 /*return*/, userData];
            }
        });
    });
}
exports.updateMentor = updateMentor;
function deleteOne(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userModal_1.default.findByIdAndDelete(_id)];
                case 1:
                    response = _a.sent();
                    if (response) {
                        return [2 /*return*/, response];
                    }
                    else {
                        return [2 /*return*/, { message: "User not found" }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteOne = deleteOne;
module.exports = {
    saveUser: saveUser,
    findUserByEmail: findUserByEmail,
    updateOne: updateOne,
    deleteOne: deleteOne,
    updateMentor: updateMentor,
    updatenewPassword: updatenewPassword,
    fetchAllUsers: fetchAllUsers
};
