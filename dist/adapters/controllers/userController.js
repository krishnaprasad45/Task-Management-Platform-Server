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
exports.profileUpdate = exports.listUsers = exports.profile = exports.userLogin = exports.userSignup = void 0;
var createUser_1 = require("../../business/usecases/userUsecases/createUser");
var loginUser_1 = require("../../business/usecases/userUsecases/loginUser");
var findUser_1 = require("../../business/usecases/userUsecases/findUser");
var updateUser_1 = require("../../business/usecases/userUsecases/updateUser");
var getAllUsers_1 = require("../../business/usecases/userUsecases/getAllUsers");
var userSignup = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstname, lastname, email, mobile, password, image, userData, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, firstname = _a.firstname, lastname = _a.lastname, email = _a.email, mobile = _a.mobile, password = _a.password, image = _a.image;
                return [4 /*yield*/, (0, createUser_1.createUser)({
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        mobile: mobile,
                        password: password,
                        image: image,
                    })];
            case 1:
                userData = _b.sent();
                res.status(201).json(userData);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                res.json({ message: error_1 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.userSignup = userSignup;
var userLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, password, response, userData, token, error_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                email = req.body.email.toString();
                password = (_a = req.body.password) === null || _a === void 0 ? void 0 : _a.toString();
                if (!email || !password) {
                    return [2 /*return*/, res
                            .status(400)
                            .json({ message: "Email and password are required." })];
                }
                return [4 /*yield*/, (0, loginUser_1.loginUser)(email, password)];
            case 1:
                response = _b.sent();
                userData = response.userData, token = response.token;
                res.json({ userData: userData, token: token });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                res.json(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.userLogin = userLogin;
var profile = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, userData, error_3;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                email = (_a = req.query.email) === null || _a === void 0 ? void 0 : _a.toString();
                if (!email) {
                    return [2 /*return*/, res.status(400).json({ message: "Something Error" })];
                }
                return [4 /*yield*/, (0, findUser_1.findUser)(email)];
            case 1:
                userData = _b.sent();
                res.json(userData);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                throw new Error(error_3.message);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.profile = profile;
var listUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, getAllUsers_1.getAllUsers)()];
            case 1:
                users = _a.sent();
                res.status(200).json(users);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error("Error fetching users:", error_4);
                res.status(500).json({ message: error_4.message || "Internal server error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.listUsers = listUsers;
var profileUpdate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstname, lastname, email, mobile, image, oldEmail, userData, error_5;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 2, , 3]);
                _a = req.body, firstname = _a.firstname, lastname = _a.lastname, email = _a.email, mobile = _a.mobile;
                image = (_b = req.file) === null || _b === void 0 ? void 0 : _b.filename;
                oldEmail = (_c = req.query.userEmail) === null || _c === void 0 ? void 0 : _c.toString();
                if (!oldEmail) {
                    return [2 /*return*/, res.status(400).json({ message: "No email provided" })];
                }
                return [4 /*yield*/, (0, updateUser_1.updateUser)({
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        mobile: mobile,
                        image: image,
                        oldEmail: oldEmail,
                    })];
            case 1:
                userData = _d.sent();
                res.json(userData);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _d.sent();
                console.log(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.profileUpdate = profileUpdate;
module.exports = { userSignup: exports.userSignup, userLogin: exports.userLogin, profile: exports.profile, profileUpdate: exports.profileUpdate, listUsers: exports.listUsers };
