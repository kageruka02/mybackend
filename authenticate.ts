import jwt from 'jsonwebtoken';
import express, { Router } from 'express';
import User from './authentication'; // Assuming './authentication' contains the User schema
import bcrypt from 'bcrypt';
import cors from 'cors';
import bodyParser  from 'body-parser';
const routerUser: Router = express.Router();
routerUser.use(bodyParser.json());
routerUser.use(cors());


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
routerUser.post('/signup', async (req, res, next) => {
    try {
        const user = await User.find({ email: req.body.email }).exec();
        if (user.length >= 1) {
            return res.status(409).json({
                message: "Email exists"
            });
        } else {
            bcrypt.hash(req.body.password, 10, async (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: "Hash could not be created"
                    });
                } else {
                    let user;
                    if (req.body.email === 'dalidapcm@gmail.com') {
                        user = new User({
                            email: req.body.email,
                            password: hash,
                            permission: ['get', 'post', 'delete', 'patch']
                        });
                    } else {
                        user = new User({
                            email: req.body.email,
                            password: hash,
                            permission: ['get']
                        });
                    }
                    try {
                        await user.save();
                        res.status(201).json(user);
                    } catch (error) {
                        res.status(500).json({
                            error: 'Not created'
                        });
                    }
                }
            });
        }
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
});



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

routerUser.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }).exec();
        if (!user) {
            return res.status(401).json({
                message: "Auth failed"
            });
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err || !result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            const token = jwt.sign({
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
            } else {
                return res.status(201).json({
                    message: "Auth successful",
                    yourtoken: token
                });
            }
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
});

export = routerUser;
