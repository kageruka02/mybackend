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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authentication_1 = __importDefault(require("./authentication"));
require("./mongoose");
const checkAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        const decoded = jsonwebtoken_1.default.verify(token, 'your_secret_key');
        req.userData = decoded;
        const id = req.userData._id;
        // Use async/await to wait for the promise to resolve
        const user = yield authentication_1.default.findOne({ _id: id });
        // Check if user exists
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Check if user has permission for the requested method
        if (!user.permission.includes(req.method.toLowerCase())) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        // If user has permission, proceed to the next middleware
        next();
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({
            message: "Not authorized to perform the action"
        });
    }
});
exports.default = checkAuth;
