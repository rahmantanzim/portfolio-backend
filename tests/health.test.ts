import {describe,it,expect} from 'vitest';
import request from 'supertest';
import app from '../src/app';
import e from 'express';
describe("Express server health check:", ()=>{
    it("should return 200 OK when the route is GET api/health", async()=>{
       const response = await request(app).get('/api/health');
       
       expect(response.status).toBe(200);
       expect(response.body).toEqual({status: "ok", message: "Portfolio API is running"});
    })
});