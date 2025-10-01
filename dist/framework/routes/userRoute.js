"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userRoute = express_1.default.Router();
// import { getRecords, getWeatherData } from "../../adapters/controllers/dataController";
// userRoute.post('/weather', getWeatherData);
// userRoute.get('/get/history', getRecords);
exports.default = userRoute;
