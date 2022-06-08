describe("Get api and intercept",()=>{
    beforeEach(() => {
        Cypress.config("baseUrl", 'https://fakerestapi.azurewebsites.net')
        cy.visit('/')
        cy.get('#operations-Activities-get_api_v1_Activities span').eq(0).click()
        cy.wait(1000)
        cy.get('#operations-Activities-get_api_v1_Activities button').click()
        cy.wait(1000)
        cy.get('#operations-Activities-get_api_v1_Activities div.execute-wrapper > button').click()
    })

    it("intercept get response",()=>{
        cy.intercept({
            url: '/api/v1/Activities'
        }).as('activity')
        cy.wait('@activity').then(res =>{
            expect(res.response.body).to.have.length(30)
        })
    })

    it('Mock get responce',()=>{
        cy.intercept('GET', '/api/v1/Activities',{
            statusCode: 200,
            body:{
                name: 'Sourabh Rathore',
                age: '30'
            }
        })
    })

    it.only('Mock get responce using fixture',()=>{
        cy.intercept('GET', '/api/v1/Activities',{
            statusCode: 200,
            fixture: 'example.json'
        })
    })
})