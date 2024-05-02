/// <reference types="cypress" />

describe('Testes para a agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })


    it('Testando inserção de 1 contato', () => {
        cy.get('input[type="text"]').type('Isac Pessoa')
        cy.get('input[type="email"]').type('isac@email.com')
        cy.get('input[type="tel"]').type('123456789')
        cy.get('.adicionar').click()
    })

    it('Testando edição do contato e salvamento', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="text"]').type('Isac Lima')
        cy.get('input[type="email"]').type('isacL@email.com')
        cy.get('input[type="tel"]').type('987654321')
        cy.get('.alterar').click()
        cy.wait(3000)
    })


    it('Testando edição do contato e cancelamento', () => {
        cy.wait(3000)
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="text"]').type('Isac Pessoa')
        cy.get('input[type="email"]').type('isacP@email.com')
        cy.get('input[type="tel"]').type('9999999')
        cy.get('.cancelar').click()
    })

    it('Testando a remoção de 1 contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })

})