const request = require('supertest')
const expect = require('chai').expect

function getUsers(){
  let responce = new Promise((resolve, reject)=>{
    request('https://reqres.in')
    .get('/api/users/2')
    .end((error, response)=>{
      expect(response.body.data.id).to.eq(2)
    })
  })
}

getUsers()


