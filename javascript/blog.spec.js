"use strict";
// import request from 'supertest';
// import app from './database'; 
// import { expect } from 'chai';
// import User, { findOne }from './authentication';
// import sinon, { SinonSpy } from 'sinon';
// import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';
// import checkAuth from './checkauth';
// import { doesNotMatch } from 'assert';
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
// let userAuthToken:any;
// let adminAuthToken:any;
// before( async()=>{
//         // Log in an admin user and obtain the authentication token
//         const adminLoginResponse = await request(app)
//             .post('/user/login')
//             .send({
//                 email: 'dalidapcm@gmail.com',
//                 password: '123456'
//             })
//             .expect(201);
//         adminAuthToken = adminLoginResponse.body.yourtoken;
//         console.log(adminAuthToken);
//       // Authenticate a normal user
//         const userLoginResponse =  await request(app)
//             .post('/user/login')
//             .send({
//                 email: 'irumvaleon@gmail.com',
//                 password: '123456'
//             })
//             .expect(201);
//         userAuthToken = userLoginResponse.body.yourtoken;
//         console.log(userAuthToken);
//         });
//  //  Test case for creating a new blog post by an admin user
//     describe('POST /blogss by admin user', () => {
//         it('should create a new blog post when authenticated as admin user', () => {
//             const blogData = {
//                 title: 'hello',
//                 author: 'admin_user',
//                 topictext: 'jfkjdkf',
//                 description: 'fjkdjf'
//             };
//              request(app)
//                 .post('/blogss')
//                 .set('Authorization', `Bearer ${adminAuthToken}`)
//                 .send(blogData)
//                 .expect(201);
//                 });
//         });
// //});
//   //  Test case for creating a new blog post by a normal user
//     describe('POST /blogss by normal user', () => {
//         it('should create a new blog post when authenticated as normal user',  () => {
//             const blogData = {
//                 title: 'hello',
//                 author: 'normal_user',
//                 topictext: 'jfkjdkf',
//                 description: 'fjkdjf'
//             };
//              request(app)
//                 .post('/blogss')
//                 .set('Authorization', `Bearer ${userAuthToken}`)
//                 .send(blogData)
//                 .expect(403);
//         });
//     });
// describe('GET /blogss', () =>{
//     it("getting all the blogs", (done) => {
//         request(app)
//         .get('/blogss')
//         .set('Authorization', `Bearer ${userAuthToken}`)
//         .expect(200)
//         .end((err: Error, res: request.Response) => {
//             if (err) {
//                 console.error(err);
//                 return done(err);
//             }
//             done();
//         });
//     });
// }
// );
// let blogId: string;
// describe('DELETE /blogss/:id', () => {
// before(async() => {
//     const response = await request(app)
//         .post('/blogss')
//         .set('Authorization', `Bearer ${adminAuthToken}`)
//         .send({
//             title: "hello",
//             author: "kagozi",
//             topictext: "jfkjdkf",
//             description: "fjkdjf"
//         })
//         .expect(201)
//         blogId = response.body._id;
//         console.log(blogId);
//     })
//     it('should delete 1 blog', () => {
//         const response =  request(app)
//         .delete(`/blogss/${blogId}`)
//         .set('Authorization', `Bearer ${adminAuthToken}`)
//         .expect(200)
//     })
//     it('should delete an existing 2 blog', () => {
//          request(app)
//         .delete(`/blogss/${blogId}`)
//         .set('Authorization', `Bearer ${userAuthToken}`)
//         .expect(403)
//     })
//     it('should return 400 if the blog id is invalid',  () => {
//          request(app)
//             .delete('/blogss/invalidId')
//             .set('Authorization', `Bearer ${adminAuthToken}`)
//             .expect(500);
//     });
//     it('should delete all the blogs', () => {
//          request(app)
//         .delete('/blogss/deleteall')
//         .set('Authorization', `Bearer ${adminAuthToken}`)
//         .expect(200);
//     })
// })
// describe('GET /blogss/:id', () => {
//     before(async() => {
//         const response = await request(app)
//             .post('/blogss')
//             .set('Authorization', `Bearer ${adminAuthToken}`)
//             .send({
//                 title: "hello",
//                 author: "kagozi",
//                 topictext: "jfkjdkf",
//                 description: "fjkdjf"
//             })
//             .expect(201)
//             blogId = response.body._id;
//             console.log(blogId);
//         })
//         it('should get an existing blog', () => {
//             const response =  request(app)
//             .get(`/blogss/${blogId}`)
//             .set('Authorization', `Bearer ${adminAuthToken}`)
//             .expect(200)
//         })
//         it('should get an existing blog', () => {
//             const response =  request(app)
//             .get(`/blogss/${blogId}`)
//             .set('Authorization', `Bearer ${userAuthToken}`)
//             .expect(200)
//         })
//         it('should return 400 if the blog id is invalid',  () => {
//              request(app)
//                 .get('/blogss/invalidId')
//                 .set('Authorization', `Bearer ${adminAuthToken}`)
//                 .expect(500);
//         });
// })
//  describe('PATCH /blogss/:id', () => {
//      before(async() => {
//          const response = await request(app)
//              .post('/blogss')
//              .set('Authorization', `Bearer ${adminAuthToken}`)
//              .send({
//                  title: "hello",
//                  author: "kagozi",
//                  topictext: "jfkjdkf",
//                  description: "fjkdjf"
//              })
//              .expect(201)
//              blogId = response.body._id;
//              console.log(blogId);
//          })
//          it('should get an updating blog', () => {
//              const response =  request(app)
//              .patch(`/blogss/${blogId}`)
//              .set('Authorization', `Bearer ${adminAuthToken}`)
//              .expect(200)
//          })
//          it('should get an existing blog', () => {
//             const response =  request(app)
//             .patch(`/blogss/${blogId}`)
//             .set('Authorization', `Bearer ${userAuthToken}`)
//             .expect(403)
//         })
//          it('should return 400 if the blog id is invalid',  () => {
//               request(app)
//                  .patch('/blogss/invalidId')
//                  .set('Authorization', `Bearer ${adminAuthToken}`)
//                  .expect(500);
//          });
//  })
const supertest_1 = __importDefault(require("supertest"));
const database_1 = __importDefault(require("./database"));
const mocha_1 = require("mocha");
let userAuthToken;
let adminAuthToken;
let timeout = 20000;
(0, mocha_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
    // Log in an admin user and obtain the authentication token
    const adminLoginResponse = yield (0, supertest_1.default)(database_1.default)
        .post('/user/login')
        .send({
        email: 'dalidapcm@gmail.com',
        password: '123456'
    });
    adminAuthToken = adminLoginResponse.body.yourtoken;
    // Authenticate a normal user
    const userLoginResponse = yield (0, supertest_1.default)(database_1.default)
        .post('/user/login')
        .send({
        email: 'irumvaleon@gmail.com',
        password: '123456'
    });
    userAuthToken = userLoginResponse.body.yourtoken;
}));
(0, mocha_1.describe)('POST /blogss by admin user', () => {
    (0, mocha_1.it)('should create a new blog post when authenticated as admin user', () => __awaiter(void 0, void 0, void 0, function* () {
        const blogData = {
            title: 'hello',
            author: 'admin_user',
            topictext: 'jfkjdkf',
            description: 'fjkdjf'
        };
        yield (0, supertest_1.default)(database_1.default)
            .post('/blogss')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .send(blogData)
            .expect(201);
    })).timeout(timeout);
});
(0, mocha_1.describe)('POST /blogss by normal user', () => {
    (0, mocha_1.it)('should not create a new blog post when authenticated as normal user', () => __awaiter(void 0, void 0, void 0, function* () {
        const blogData = {
            title: 'hello',
            author: 'normal_user',
            topictext: 'jfkjdkf',
            description: 'fjkdjf'
        };
        yield (0, supertest_1.default)(database_1.default)
            .post('/blogss')
            .set('Authorization', `Bearer ${userAuthToken}`)
            .send(blogData)
            .expect(403);
    })).timeout(timeout);
});
(0, mocha_1.describe)('GET /blogss', () => {
    (0, mocha_1.it)("should get all the blogs", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .get('/blogss')
            .set('Authorization', `Bearer ${userAuthToken}`)
            .expect(200);
    })).timeout(timeout);
});
(0, mocha_1.describe)('DELETE /blogss/:id', () => {
    let blogId;
    (0, mocha_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(database_1.default)
            .post('/blogss')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .send({
            title: "hello",
            author: "kagozi",
            topictext: "jfkjdkf",
            description: "fjkdjf"
        });
        blogId = response.body._id;
    }));
    (0, mocha_1.it)('should delete an existing blog', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .delete(`/blogss/${blogId}`)
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .expect(200);
    }));
    (0, mocha_1.it)('should not delete an existing blog when authenticated as normal user', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .delete(`/blogss/${blogId}`)
            .set('Authorization', `Bearer ${userAuthToken}`)
            .expect(403);
    }));
    (0, mocha_1.it)('should return 400 if the blog id is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .delete('/blogss/invalidId')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .expect(500);
    }));
    (0, mocha_1.it)('should delete all the blogs', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .delete('/blogss/deleteall')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .expect(200);
    }));
});
(0, mocha_1.describe)('GET /blogss/:id', () => {
    let blogId;
    (0, mocha_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(database_1.default)
            .post('/blogss')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .send({
            title: "hello",
            author: "kagozi",
            topictext: "jfkjdkf",
            description: "fjkdjf"
        });
        blogId = response.body._id;
    }));
    (0, mocha_1.it)('should get an existing blog when authenticated as admin user', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .get(`/blogss/${blogId}`)
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .expect(200);
    }));
    (0, mocha_1.it)('should get an existing blog when authenticated as normal user', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .get(`/blogss/${blogId}`)
            .set('Authorization', `Bearer ${userAuthToken}`)
            .expect(200);
    }));
    (0, mocha_1.it)('should return 400 if the blog id is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .get('/blogss/invalidId')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .expect(500);
    }));
});
(0, mocha_1.describe)('PATCH /blogss/:id', () => {
    let blogId;
    (0, mocha_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(database_1.default)
            .post('/blogss')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .send({
            title: "hello",
            author: "kagozi",
            topictext: "jfkjdkf",
            description: "fjkdjf"
        });
        blogId = response.body._id;
    }));
    (0, mocha_1.it)('should update an existing blog when authenticated as admin user', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .patch(`/blogss/${blogId}`)
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .expect(200);
    }));
    (0, mocha_1.it)('should not update an existing blog when authenticated as normal user', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .patch(`/blogss/${blogId}`)
            .set('Authorization', `Bearer ${userAuthToken}`)
            .expect(403);
    }));
    (0, mocha_1.it)('should return 400 if the blog id is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .patch('/blogss/invalidId')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .expect(500);
    }));
});
