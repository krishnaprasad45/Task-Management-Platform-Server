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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOtp = exports.storeOtp = exports.saveUser = exports.getUserIdByEmail = exports.findUserByEmail = exports.connectMongo = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var userModel_1 = __importDefault(require("../../../framework/database/userModel")); // assuming this is the path
// ---------------- CONNECT TO MONGO ----------------
var mongoConfig = {
    uri: 'mongodb://localhost:27017/myAppDB', // replace with your MongoDB URI
};
function connectMongo() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(mongoose_1.default.connection.readyState === 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, mongoose_1.default.connect(mongoConfig.uri)];
                case 1:
                    _a.sent();
                    console.log('MongoDB connected');
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
exports.connectMongo = connectMongo;
// ---------------- FIND USER BY EMAIL ----------------
function findUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!email)
                        throw new Error('Email is undefined');
                    return [4 /*yield*/, connectMongo()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, userModel_1.default.findOne({ email: email }).exec()];
                case 2:
                    user = _a.sent();
                    return [2 /*return*/, user || null];
            }
        });
    });
}
exports.findUserByEmail = findUserByEmail;
function getUserIdByEmail(email) {
    return __awaiter(this, void 0, void 0, function () {
        var connection, rows, userRow, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!email)
                        throw new Error('Email is undefined');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, getConnection()];
                case 2:
                    connection = _a.sent();
                    return [4 /*yield*/, connection.execute('SELECT id FROM users WHERE email = ?', [email])];
                case 3:
                    rows = (_a.sent())[0];
                    if (rows.length > 0) {
                        userRow = rows[0];
                        return [2 /*return*/, userRow.id];
                    }
                    else {
                        throw new Error('User not found');
                    }
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    console.error('Error getting user ID by email:', error_1);
                    throw error_1;
                case 5:
                    if (connection)
                        releaseConnection(connection);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.getUserIdByEmail = getUserIdByEmail;
function saveUser(data) {
    return __awaiter(this, void 0, void 0, function () {
        var connection, query, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, getConnection()];
                case 1:
                    connection = _a.sent();
                    query = "\n      INSERT INTO users (email, password, emailVerification, createdAt, otp, otpCreatedAt)\n      VALUES (?, ?, ?, ?, ?, ?)\n    ";
                    return [4 /*yield*/, connection.execute(query, [
                            data.email,
                            data.password,
                            data.emailVerification,
                            data.createdAt || new Date(),
                            data.otp || null,
                            data.otpCreatedAt || null
                        ])];
                case 2:
                    result = (_a.sent())[0];
                    return [2 /*return*/, result];
                case 3:
                    error_2 = _a.sent();
                    console.error('Error saving user:', error_2);
                    throw error_2;
                case 4:
                    if (connection)
                        releaseConnection(connection);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.saveUser = saveUser;
function storeOtp(generatedOtp, email) {
    return __awaiter(this, void 0, void 0, function () {
        var connection, userId, updateQuery, error_3;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, 5, 6]);
                    return [4 /*yield*/, getUserIdByEmail(email)];
                case 1:
                    userId = _a.sent();
                    if (!userId)
                        throw new Error('User not found');
                    return [4 /*yield*/, getConnection()];
                case 2:
                    connection = _a.sent();
                    updateQuery = 'UPDATE users SET otp = ?, otpCreatedAt = ? WHERE email = ?';
                    return [4 /*yield*/, connection.execute(updateQuery, [generatedOtp, new Date(), email])];
                case 3:
                    _a.sent();
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var clearConnection, clearOtpQuery;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getConnection()];
                                case 1:
                                    clearConnection = _a.sent();
                                    clearOtpQuery = 'UPDATE users SET otp = NULL, otpCreatedAt = NULL WHERE email = ?';
                                    return [4 /*yield*/, clearConnection.execute(clearOtpQuery, [email])];
                                case 2:
                                    _a.sent();
                                    releaseConnection(clearConnection);
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 5 * 60 * 1000);
                    return [3 /*break*/, 6];
                case 4:
                    error_3 = _a.sent();
                    console.error('Error storing OTP:', error_3);
                    throw error_3;
                case 5:
                    if (connection)
                        releaseConnection(connection);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.storeOtp = storeOtp;
function getOtp(email) {
    return __awaiter(this, void 0, void 0, function () {
        var connection, userId, rows, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, 5, 6]);
                    return [4 /*yield*/, getUserIdByEmail(email)];
                case 1:
                    userId = _a.sent();
                    if (!userId) {
                        console.log('User not found');
                        return [2 /*return*/, null];
                    }
                    return [4 /*yield*/, getConnection()];
                case 2:
                    connection = _a.sent();
                    return [4 /*yield*/, connection.execute('SELECT otp FROM users WHERE email = ?', [email])];
                case 3:
                    rows = (_a.sent())[0];
                    if (rows.length > 0) {
                        console.log('OTP retrieved from DB:', rows[0].otp);
                        return [2 /*return*/, rows[0].otp];
                    }
                    else {
                        console.log('OTP not found for the user');
                        return [2 /*return*/, null];
                    }
                    return [3 /*break*/, 6];
                case 4:
                    error_4 = _a.sent();
                    console.error('Error retrieving OTP from DB:', error_4);
                    throw error_4;
                case 5:
                    if (connection)
                        releaseConnection(connection);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.getOtp = getOtp;
