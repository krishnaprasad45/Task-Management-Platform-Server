"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
var handleError = function (error) {
    throw new Error(error.message);
};
exports.handleError = handleError;
