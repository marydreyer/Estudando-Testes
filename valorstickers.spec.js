describe('Loja Código Fonte: Stickers', () =>{
    it('Chegando valores dos Stickers',() => {
        cy.visit('https://loja.codigofonte.com.br');
        cy.get('.js-search-form > .js-search-input').clear().type('Stickers');
        cy.get('.desktop-search-submit').click();
        cy.get('.item-name').should('have.text', 'kit Stickers do Código Fonte TV');
        cy.get('.item-name').click();
        cy.get('#price_display').contains('R$10,00');

    })
})