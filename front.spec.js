/// <reference types="cypress" />


it('Deve realizar Login com sucesso', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login')
    cy.get('#email').type('teste2021@teste.com.br')
    cy.get('#passwd').type('teste')
    cy.get('#SubmitLogin > span').click()


})
