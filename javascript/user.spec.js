"use strict";
// import request from 'supertest';
// import app from './database';
// import bcrypt from 'bcrypt';
// import assert from 'assert';
// import { expect } from 'chai';
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
// describe('POST /user/login', () => {
//     it('should login user', async () => {
//         try {
//             const response = await request(app)
//                 .post('/user/login')
//                 .send({
//                    password: "123456"
//                 })
//                 .expect(401);
//             console.log('message created:', response.body);
//         } catch (error) {
//             // Handle any errors
//             console.error(error);
//         }
//     });
//     it('should login user', async () => {
//         try {
//             const response = await request(app)
//                 .post('/user/login')
//                 .send({
//                    email: "dalidapcm@gmail.com",
//                    password: "123456"
//                 })
//                 .expect(201);
//             console.log('message created:', response.body);
//         } catch (error) {
//             // Handle any errors
//             console.error(error);
//         }
//     });
//     it('user do not exist', async () => {
//         try {
//             const response = await request(app)
//                 .post('/user/login')
//                 .send({
//                    email: "dalida@gil.com",
//                    password: "123456"
//                 })
//                 .expect(401);
//             console.log('message created:', response.body);
//         } catch (error) {
//             // Handle any errors
//             console.error(error);
//         }
//     });
//     it('password  do not exist', async () => {
//         try {
//             const response = await request(app)
//                 .post('/user/login')
//                 .send({
//                    email: "dalidapcm@gmail.com",
//                    password: "1236"
//                 })
//                 .expect(401);
//             console.log('message created:', response.body);
//         } catch (error) {
//             // Handle any errors
//             console.error(error);
//         }
//     });
//     it('user is not admin', async () => {
//         try {
//             const response = await request(app)
//                 .post('/user/login')
//                 .send({
//                    email: "irumvaleon@gmail.com",
//                    password: "123456"
//                 })
//                 .expect(201);
//             console.log('message created:', response.body);
//         } catch (error) {
//             // Handle any errors
//             console.error(error);
//         }
//     });
//  });
// describe('POST /user/signup', () => {
//     it('should create a new message', async () => {
//         try {
//             const mail = "ddffbbvchjgfdxzdjkm@gmail.com";
//             const response = await request(app)
//                 .post('/user/signup')
//                 .send({
//                    email: mail,
//                    password: "123456"
//                 })
//                 .expect(201);
//                 bcrypt.compare('123456', response.body.password, (err, result) => {
//                     assert.strictEqual(result, true, 'Passwords should match');
//                 });
//             console.log('message created:', response.body);
//         } catch (error) {
//             // Handle any errors
//             console.error(error);
//         }
//     });
//     it('should return 409 if the email already exists', async () => {
//         try {
//             const response = await request(app)
//                 .post('/user/signup')
//                 .send({
//                     email: "dalidapcm@gmail.com",
//                     password: "123456"
//                 })
//                 .expect(409);
//         } catch (error) {
//             // Handle any errors
//             console.error(error);
//         }
//     });
//     it('should return 400 if password is missing', async () => {
//         try {
//             const response = await request(app)
//                 .post('/user/signup')
//                 .send({
//                     email: "test@example.com"
//                 })
//                 .expect(500);
//             // Add more assertions as needed
//         } catch (error) {
//             // Handle any errors
//             console.error(error);
//         }
//     });
// });
// import request from 'supertest';
// import app from './database';
// import bcrypt from 'bcrypt';
// import assert from 'assert';
// describe('POST /user/login', () => {
//     it('should login user with correct credentials', async () => {
//         await request(app)
//             .post('/user/login')
//             .send({
//                 email: "dalidapcm@gmail.com",
//                 password: "123456"
//             })
//             .expect(201);
//     });
//     it('should return 401 if user does not exist', async () => {
//         await request(app)
//             .post('/user/login')
//             .send({
//                 email: "dalida@gil.com",
//                 password: "123456"
//             })
//             .expect(401);
//     });
//     it('should return 401 if password is incorrect', async () => {
//         await request(app)
//             .post('/user/login')
//             .send({
//                 email: "dalidapcm@gmail.com",
//                 password: "1236"
//             })
//             .expect(401);
//     });
//     it('should return 201 if user is not admin', async () => {
//         await request(app)
//             .post('/user/login')
//             .send({
//                 email: "irumvaleon@gmail.com",
//                 password: "123456"
//             })
//             .expect(201);
//     });
// });
describe('POST /user/signup', () => {
    const timeout = 20000;
    it('should create a new user with valid credentials', () => __awaiter(void 0, void 0, void 0, function* () {
        const mail = "ddffbm@gmail.com";
        const response = yield (0, supertest_1.default)(database_1.default)
            .post('/user/signup')
            .send({
            email: mail,
            password: "123456"
        })
            .expect(201);
        bcrypt_1.default.compare('123456', response.body.password, (err, result) => {
            assert_1.default.strictEqual(result, true, 'Passwords should match');
        });
    })).timeout(timeout);
    it('should return 409 if the email already exists', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .post('/user/signup')
            .send({
            email: "dalidapcm@gmail.com",
            password: "123456"
        })
            .expect(409);
    })).timeout(timeout);
    it('should return 500 if password is missing', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .post('/user/signup')
            .send({
            email: "test@example.com"
        })
            .expect(500);
    })).timeout(timeout);
});
const supertest_1 = __importDefault(require("supertest"));
const database_1 = __importDefault(require("./database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const assert_1 = __importDefault(require("assert"));
describe('POST /user/login', () => {
    // Increase timeout for all tests in this suite to 5000ms
    // This ensures that tests have enough time to complete
    // Adjust the timeout value as needed based on your test duration
    // For example, you can try increasing it to 5000ms or more if necessary
    // The default timeout is 2000ms
    const timeout = 20000;
    it('should login user with correct credentials', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .post('/user/login')
            .send({
            email: "dalidapcm@gmail.com",
            password: "123456"
        })
            .expect(201);
    })).timeout(timeout); // Set timeout for this test
    it('should return 401 if user does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .post('/user/login')
            .send({
            email: "dalida@gil.com",
            password: "123456"
        })
            .expect(401);
    })).timeout(timeout); // Set timeout for this test
    it('should return 401 if password is incorrect', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .post('/user/login')
            .send({
            email: "dalidapcm@gmail.com",
            password: "1236"
        })
            .expect(401);
    })).timeout(timeout); // Set timeout for this test
    it('should return 201 if user is not admin', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(database_1.default)
            .post('/user/login')
            .send({
            email: "irumvaleon@gmail.com",
            password: "123456"
        })
            .expect(201);
    })).timeout(timeout); // Set timeout for this test
});
