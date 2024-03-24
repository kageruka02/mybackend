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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = __importDefault(require("express"));
const authentication_1 = __importDefault(require("./authentication")); // Assuming './authentication' contains the User schema
const bcrypt_1 = __importDefault(require("bcrypt"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routerUser = express_1.default.Router();
routerUser.use(body_parser_1.default.json());
routerUser.use((0, cors_1.default)());
// routerUser.post('/signup', (req, res, next) => {
//     User.find({ email: req.body.email }).exec()
//         .then(user => {
//             if (user.length >= 1) {
//                 return res.status(409).json({
//                     message: "Email exists"
//                 });
//             } else {
//                 bcrypt.hash(req.body.password, 10, (err, hash) => {
//                     if (err) {
//                         return res.status(500).json({
//                             error: "Hash could not be created"
//                         });
//                     } else {
//                         let user: any;
//                         if (req.body.email === 'dalidapcm@gmail.com')
//                         {
//                              user = new User({
//                                 email: req.body.email,
//                                 password: hash,
//                                 permission: ['get', 'post', 'delete', 'patch']
//                             });
//                         }
//                         else{
//                              user = new User({
//                                 email: req.body.email,
//                                 password: hash,
//                                 permission: ['get']
//                             });
//                         }
//                         user.save()
//                             .then( ()=> {
//                                 res.status(201).json(user);
//                             })
//                             .catch(() => {
//                                 res.status(500).json({
//                                     error: 'Not created'
//                                 });
//                             });
//                     }
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: err
//             });
//         });
// });
routerUser.post('/signup', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield authentication_1.default.find({ email: req.body.email }).exec();
        if (user.length >= 1) {
            return res.status(409).json({
                message: "Email exists"
            });
        }
        else {
            bcrypt_1.default.hash(req.body.password, 10, (err, hash) => __awaiter(void 0, void 0, void 0, function* () {
                if (err) {
                    return res.status(500).json({
                        error: "Hash could not be created"
                    });
                }
                else {
                    let user;
                    if (req.body.email === 'dalidapcm@gmail.com') {
                        user = new authentication_1.default({
                            email: req.body.email,
                            password: hash,
                            permission: ['get', 'post', 'delete', 'patch']
                        });
                    }
                    else {
                        user = new authentication_1.default({
                            email: req.body.email,
                            password: hash,
                            permission: ['get']
                        });
                    }
                    try {
                        yield user.save();
                        res.status(201).json(user);
                    }
                    catch (error) {
                        res.status(500).json({
                            error: 'Not created'
                        });
                    }
                }
            }));
        }
    }
    catch (err) {
        res.status(500).json({
            error: err
        });
    }
}));
// routerUser.post('/login', (req, res) => {
//     User.findOne({ email: req.body.email }).exec()
//         .then(user => {
//             if (!user) {
//                 return res.status(401).json({
//                     message: "Auth failed"
//                 });
//             }
//             bcrypt.compare(req.body.password, user.password, (err, result) => {
//                 if (err || !result) {
//                     return res.status(401).json({
//                         message: "Auth failed"
//                     });
//                 }
//                 const token = jwt.sign({
//                     email: user.email,
//                     _id: user._id
//                 }, 'your_secret_key', {
//                   //  expiresIn: '1h'
//                 });
//                 if (user.email === 'dalidapcm@gmail.com') {
//                     return res.status(201).json({
//                         message: "Successful login admin",
//                         yourtoken: token
//                     });
//                 } else {
//                     return res.status(201).json({
//                         message: "Auth successful",
//                         yourtoken: token
//                     });
//                 }
//             });
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: err
//             });
//         });
// });
// export = routerUser;
routerUser.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield authentication_1.default.findOne({ email: req.body.email }).exec();
        if (!user) {
            return res.status(401).json({
                message: "Auth failed"
            });
        }
        bcrypt_1.default.compare(req.body.password, user.password, (err, result) => {
            if (err || !result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            const token = jsonwebtoken_1.default.sign({
                email: user.email,
                _id: user._id
            }, 'your_secret_key', {
            // expiresIn: '1h'
            });
            if (user.email === 'dalidapcm@gmail.com') {
                return res.status(201).json({
                    message: "Successful login admin",
                    yourtoken: token
                });
            }
            else {
                return res.status(201).json({
                    message: "Auth successful",
                    yourtoken: token
                });
            }
        });
    }
    catch (err) {
        res.status(500).json({
            error: err
        });
    }
}));
module.exports = routerUser;
