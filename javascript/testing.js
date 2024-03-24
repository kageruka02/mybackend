"use strict";
// import request from 'supertest';
// import app from './database';
// import {expect} from 'chai';
// import sinon from 'sinon';
// import Message from './schemamessages'
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
// // Mount the messages router on the test instance
// //app.use('/messages', messagesRouter);
// describe('GET /messages', () =>{
//     it("getting all the messages", (done) => {
//         request(app)
//         .get('/messages')
//         .expect(200)
//         .end((err: Error, res: request.Response) => {
//             console.log(res.body);
//             if (err) {
//                 console.error(err);
//                 return done(err);
//             }
//             done();
//         });
//     });
//     it('should return "Internal Server Error" if an error occurs', async () => {
//         try {
//             sinon.stub(Message, 'find').throws();
//           await request(app)
//                 .get('/')            
//             // Assert that the response status code is 500
//             .expect(500);
//             // Add more assertions as needed
//         } catch (error) {
//             // Handle any errors
//             console.error(error);
//         }
//     });
// }
// );
// describe('POST /messages', () => {
//     it('should create a new message', async () => {
//         try {
//             const response = await request(app)
//                 .post('/messages')
//                 .send({
//                     firstname: "Lion",
//                     lastname: "lendfjkd",
//                     email: "df@gmail.com",
//                     subject: "why",
//                     description: "fjkf"
//                 })
//                 .expect(201);
//             console.log('message created:', response.body);
//         } 
//         catch (error) {
//             // Handle any errors
//             console.error(error);
//         }
//     })
//     ;
//     it('should not create a new message', async () => {
//         try {
//             const response = await request(app)
//                 .post('/messages')
//                 .send({
//                     lastname: "lendfjkd",
//                     email: "df@gmail.com",
//                     subject: "why",
//                     description: "fjkf"
//                 })
//                 .expect(500);
//             console.log('message created:', response.body);
//         } 
//         catch (error) {
//             // Handle any errors
//             console.error(error);
//         }
//     })
// });
// let blogId : string;
// describe('DELETE /messages/:id', () => {
//     before(async () => {
//         const response = await request(app)
//             .post('/messages')
//             .send({
//                 firstname: "Lion",
//                 email: "irumvaleon@gmail.com",
//                 lastname: "leon",
//                 subject: "why ",
//                 description: "fjkf"
//             })
//             .expect(201);
//         blogId = response.body._id;
//         console.log(blogId);
//     });
//     it('should delete an existing blog', async () => {
//         await request(app)
//             .delete(`/messages/${blogId}`)
//             .expect(200);
//     });
//     it('should return 400 if the message id is invalid', async () => {
//         await request(app)
//             .delete('/messages/invalidId')
//             .expect(500);
//     });
//     it('should delete all the blogs', async () => {
//         await request(app)
//             .delete('/messages/deleteall')
//             .expect(200);
//     });
// });
// describe('GET /messages/:id', () => {
//     before(async () => {
//         const response = await request(app)
//             .post('/messages')
//             .send({
//                 firstname: "Lion",
//                 email: "irumvaleon@gmail.com",
//                 lastname: "leon",
//                 subject: "why ",
//                 description: "fjkf"
//             })
//             .expect(201);
//         blogId = response.body._id;
//         console.log(blogId);
//     });
//     it('should get an existing messages', async () => {
//         await request(app)
//             .get(`/messages/${blogId}`)
//             .expect(200);
//     });
//     it('should return 400 if the blog id is invalid', async () => {
//         await request(app)
//             .get('/messages/invalidId')
//             .expect(500);
//     });
// });
// describe('PATCH /messages/:id', () => {
//     before(async () => {
//         const response = await request(app)
//             .post('/messages')
//             .send({
//                 firstname: "Lion",
//                 email: "irumvaleon@gmail.com",
//                 lastname: "leon",
//                 subject: "why ",
//                 description: "fjkf"
//             })
//             .expect(201);
//         blogId = response.body._id;
//         console.log(blogId);
//     });
//     it('should update an existing message', async () => {
//         await request(app)
//             .patch(`/messages/${blogId}`)
//             .send({
//                 firstname: " updated Lion",
//                 email: "irumvaleon@gmail.com",
//                 lastname: "updated leon",
//                 subject: " updated why ",
//                 description: " updated fjkf"
//             })
//             .expect(200);
//     });
//     it('should return 400 if the message id is invalid', async () => {
//         await request(app)
//             .patch('/messages/invalidId')
//             .expect(500);
//     });
// });
const supertest_1 = __importDefault(require("supertest"));
const database_1 = __importDefault(require("./database"));
const sinon_1 = __importDefault(require("sinon"));
const schemamessages_1 = __importDefault(require("./schemamessages"));
describe('GET /messages', () => {
    it("should get all messages", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(database_1.default)
            .get('/messages')
            .expect(200);
        // Add more assertions as needed
    }));
    it('should return "Internal Server Error" if an error occurs', () => __awaiter(void 0, void 0, void 0, function* () {
        sinon_1.default.stub(schemamessages_1.default, 'find').throws();
        yield (0, supertest_1.default)(database_1.default)
            .get('/')
            .expect(404);
        // Add more assertions as needed
    }));
});
describe('POST /messages', () => {
    it('should create a new message', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(database_1.default)
            .post('/messages')
            .send({
            firstname: "Lion",
            lastname: "lendfjkd",
            email: "df@gmail.com",
            subject: "why",
            description: "fjkf"
        })
            .expect(201);
        // Add more assertions as needed
    }));
    it('should not create a new message if data is incomplete', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(database_1.default)
            .post('/messages')
            .send({
            lastname: "lendfjkd",
            email: "df@gmail.com",
            subject: "why",
            description: "fjkf"
        })
            .expect(500);
        // Add more assertions as needed
    }));
});
// // Other test suites for DELETE, GET by ID, PATCH methods follow the same pattern
// describe('DELETE /messages/:id', () => {
//     let messageId: string;
//     before(async () => {
//         const response = await request(app)
//             .post('/messages')
//             .send({
//                 firstname: "Lion",
//                 email: "irumvaleon@gmail.com",
//                 lastname: "leon",
//                 subject: "why",
//                 description: "fjkf"
//             })
//             .expect(201);
//         messageId = response.body._id;
//     });
//     it('should delete an existing message', async () => {
//         await request(app)
//             .delete(`/messages/${messageId}`)
//             .expect(200);
//     });
//     it('should return 400 if the message id is invalid', async () => {
//         await request(app)
//             .delete('/messages/invalidId')
//             .expect(500);
//     });
//     it('should delete all messages', async () => {
//         await request(app)
//             .delete('/messages/deleteall')
//             .expect(200);
//     });
// });
// describe('GET /messages/:id', () => {
//     let messageId: string;
//     before(async () => {
//         const response = await request(app)
//             .post('/messages')
//             .send({
//                 firstname: "Lion",
//                 email: "irumvaleon@gmail.com",
//                 lastname: "leon",
//                 subject: "why",
//                 description: "fjkf"
//             })
//             .expect(201);
//         messageId = response.body._id;
//     });
//     it('should get an existing message by ID', async () => {
//         await request(app)
//             .get(`/messages/${messageId}`)
//             .expect(200);
//     });
//     it('should return 400 if the message id is invalid', async () => {
//         await request(app)
//             .get('/messages/invalidId')
//             .expect(500);
//     });
// });
// describe('PATCH /messages/:id', () => {
//     let messageId: string;
//     before(async () => {
//         const response = await request(app)
//             .post('/messages')
//             .send({
//                 firstname: "Lion",
//                 email: "irumvaleon@gmail.com",
//                 lastname: "leon",
//                 subject: "why",
//                 description: "fjkf"
//             })
//             .expect(201);
//         messageId = response.body._id;
//     });
//     it('should update an existing message', async () => {
//         await request(app)
//             .patch(`/messages/${messageId}`)
//             .send({
//                 firstname: "Updated Lion",
//                 lastname: "Updated Leon",
//                 email: "updatedirumvaleon@gmail.com",
//                 subject: "Updated why",
//                 description: "Updated fjkf"
//             })
//             .expect(200);
//     });
//     it('should return 400 if the message id is invalid', async () => {
//         await request(app)
//             .patch('/messages/invalidId')
//             .expect(500);
//     });
// });
