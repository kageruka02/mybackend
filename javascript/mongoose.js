"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function connect() {
    return mongoose_1.default.connect('mongodb+srv://leon:Ikln2003!!@cluster0.eqsgfdd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => {
        console.log('Database created successful');
    })
        .catch((error) => {
        console.error('Error connecting to database:', error);
        throw error; // Rethrow the error to propagate it to the caller
    });
}
exports.connect = connect;
function close() {
    return mongoose_1.default.disconnect();
}
exports.close = close;
