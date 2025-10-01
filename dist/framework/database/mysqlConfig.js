"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var host = process.env.MYSQLHOST;
var mysqlPass = process.env.MYSQLPASSWORD;
var mysqlConfig = {
    host: host,
    user: "root",
    password: mysqlPass,
    database: "userdb",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
exports.default = mysqlConfig;
