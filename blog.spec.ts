



// import request from 'supertest';
// import app from './database'; 
// import { expect } from 'chai';
// import User, { findOne }from './authentication';
// import sinon, { SinonSpy } from 'sinon';
// import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';
// import checkAuth from './checkauth';
// import { doesNotMatch } from 'assert';

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
import request from 'supertest';
import app from './database'; 
import { expect } from 'chai';
import { before, beforeEach, describe, it } from 'mocha';

let userAuthToken: any;
let adminAuthToken: any;
let timeout = 20000;

beforeEach(async () => {
    // Log in an admin user and obtain the authentication token
    const adminLoginResponse = await request(app)
        .post('/user/login')
        .send({
            email: 'dalidapcm@gmail.com',
            password: '123456'
        });
    adminAuthToken = adminLoginResponse.body.yourtoken;

    // Authenticate a normal user
    const userLoginResponse = await request(app)
        .post('/user/login')
        .send({
            email: 'irumvaleon@gmail.com',
            password: '123456'
        });
    userAuthToken = userLoginResponse.body.yourtoken;
});

describe('POST /blogss by admin user', () => {
    it('should create a new blog post when authenticated as admin user', async () => {
        const blogData = {
            title: 'hello',
            author: 'admin_user',
            topictext: 'jfkjdkf',
            description: 'fjkdjf'
        };

        await request(app)
            .post('/blogss')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .send(blogData)
            .expect(201);
    }).timeout(timeout);
});

describe('POST /blogss by normal user', () => {
    it('should not create a new blog post when authenticated as normal user', async () => {
        const blogData = {
            title: 'hello',
            author: 'normal_user',
            topictext: 'jfkjdkf',
            description: 'fjkdjf'
        };

        await request(app)
            .post('/blogss')
            .set('Authorization', `Bearer ${userAuthToken}`)
            .send(blogData)
            .expect(403);
    }).timeout(timeout);
});

describe('GET /blogss', () => {
    it("should get all the blogs", async () => {
        await request(app)
            .get('/blogss')
            .set('Authorization', `Bearer ${userAuthToken}`)
            .expect(200);
    }).timeout(timeout);
});

describe('DELETE /blogss/:id', () => {
    let blogId: string;

    beforeEach(async () => {
        const response = await request(app)
            .post('/blogss')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .send({
                title: "hello",
                author: "kagozi",
                topictext: "jfkjdkf",
                description: "fjkdjf"
            });
        blogId = response.body._id;
    });

    it('should delete an existing blog', async () => {
        await request(app)
            .delete(`/blogss/${blogId}`)
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .expect(200);
    });

    it('should not delete an existing blog when authenticated as normal user', async () => {
        await request(app)
            .delete(`/blogss/${blogId}`)
            .set('Authorization', `Bearer ${userAuthToken}`)
            .expect(403);
    });

    it('should return 400 if the blog id is invalid', async () => {
        await request(app)
            .delete('/blogss/invalidId')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .expect(500);
    });

    it('should delete all the blogs', async () => {
        await request(app)
            .delete('/blogss/deleteall')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .expect(200);
    });
});

describe('GET /blogss/:id', () => {
    let blogId: string;

    beforeEach(async () => {
        const response = await request(app)
            .post('/blogss')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .send({
                title: "hello",
                author: "kagozi",
                topictext: "jfkjdkf",
                description: "fjkdjf"
            });
        blogId = response.body._id;
    });

    it('should get an existing blog when authenticated as admin user', async () => {
        await request(app)
            .get(`/blogss/${blogId}`)
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .expect(200);
    });

    it('should get an existing blog when authenticated as normal user', async () => {
        await request(app)
            .get(`/blogss/${blogId}`)
            .set('Authorization', `Bearer ${userAuthToken}`)
            .expect(200);
    });

    it('should return 400 if the blog id is invalid', async () => {
        await request(app)
            .get('/blogss/invalidId')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .expect(500);
    });
});

describe('PATCH /blogss/:id', () => {
    let blogId: string;

    beforeEach(async () => {
        const response = await request(app)
            .post('/blogss')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .send({
                title: "hello",
                author: "kagozi",
                topictext: "jfkjdkf",
                description: "fjkdjf"
            });
        blogId = response.body._id;
    });

    it('should update an existing blog when authenticated as admin user', async () => {
        await request(app)
            .patch(`/blogss/${blogId}`)
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .expect(200);
    });

    it('should not update an existing blog when authenticated as normal user', async () => {
        await request(app)
            .patch(`/blogss/${blogId}`)
            .set('Authorization', `Bearer ${userAuthToken}`)
            .expect(403);
    });

    it('should return 400 if the blog id is invalid', async () => {
        await request(app)
            .patch('/blogss/invalidId')
            .set('Authorization', `Bearer ${adminAuthToken}`)
            .expect(500);
    });
});
