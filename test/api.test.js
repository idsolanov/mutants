const { test, expect} = require('@jest/globals')
const supertest = require('supertest')
const mongoose = require('mongoose')
const {app, server} = require('../index')


const api = supertest(app)


test('healtcheck',async ()=>{
    await api.get('/').expect(200)
})
test('stats',async () =>{
    await api
    .get('/stats')
    .expect(200)
})
test('isMutant',async ()=>{
    const body = {
        dna:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CACCTA","TCACTG"]
    }
    await api.post('/mutant').send(body).expect(200)
})
test('isMutant: no es mutante',async ()=>{
    const body = {
        dna:["TTGCAA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
    }
    await api.post('/mutant').send(body).expect(403)
})
test('isMutant: no es cuadrada',async ()=>{
    const body = {
        dna:["ATGCGA","CAGTGC","TTATGT","AGAAGG"]
    }
    await api.post('/mutant').send(body).expect(400)
})
test('isMutant: tiene numeros',async ()=>{
    const body = {
        dna:["TTGCAA","123456","TTATGT","AGAAGG","CCCCTA","TCACTG"]
    }
    await api.post('/mutant').send(body).expect(400)
})
afterAll(()=>{
    mongoose.connection.close()
    server.close
})