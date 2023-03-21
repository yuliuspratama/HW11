const app = require('../app');
const request = require('supertest');

describe("Test Todo App", () => {

    it("Get all Todo",(done) => {
        
        request(app)
            .get("/todo")
            .expect("Content-Type", /json/)
            .expect(200)
            .then(response => {
                console.log(response.body)
                done()
            } )
            .catch(done)
    })

    it("Create Todo",(done) => {
        
        request(app)
            .post("/todo")
            .send({title : "Todo Test"})
            .set('Accept', 'application/json')
            .expect("Content-Type", /json/)
            .expect(200)
            .then(response => {
                const data = response.body;
                expect(data.title).toBe('Todo Test')
                expect(data.status).toBe('active')
                done()
            } )
            .catch(done)
    })
    it("Delete Todo",(done) => {
        
        request(app)
            .delete("/todo/11")
            .expect("Content-Type", /json/)
            .expect(200)
            .then(response => {
                console.log(response.body)
                done()
            } )
            .catch(done)
    })
    it("Update Todo",(done) => {
        
        request(app)
            .post("/todo/12")
            .send({title : "Todo Update Test"})
            .expect("Content-Type", /json/)
            .expect(200)
            .then(response => {
                console.log(response.body)
                done()
            } )
            .catch(done)
    })
})
