///<reference types="cypress"/>

var Chance = require('chance');// Load Chance
var chance = new Chance();// Instantiate Chance so it can be used


context('Validando funcionalidade cadastro', () => {
    it('Quando eu inserir o email e clicar em create an accout, então deve abrir formulario para preenchimento e ao clicar em register a conta deve ser criada com sucesso.', () => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        cy.get('input[id=email_create]').should('be.visible').type(chance.email());
        cy.get('button[name=SubmitCreate]').should('be.visible').click();
        cy.get('input[type=radio]').check('1');
        cy.get('input[id=customer_firstname]').should('be.visible').type(chance.first());
        cy.get('input[id=customer_lastname]').should('be.visible').type(chance.last());
        cy.get('input[id=email]').should('be.visible');
        cy.get('input[id=passwd]').should('be.visible').type(chance.email());
        cy.get('select[id=days]').select('1');
        cy.get('select#months').select('May');
        cy.get('select#years').select('2020');

        cy.get('#firstname').should('be.visible').type(chance.first());
        cy.get('#lastname').should('be.visible').type(chance.last());
        cy.get('#address1').should('be.visible').type(chance.address());
        cy.get('input[id=city]').should('be.visible').type(chance.address());
        cy.get('#id_state').select('Hawaii');
        cy.get('#postcode').should('be.visible').type('00000')
        cy.get('#id_country').type('Alabama');

        cy.get('#phone_mobile').should('be.visible').type(chance.phone());
        cy.get('button[id=submitAccount]').click();
        
        cy.get('.page-heading').should('be.visible');
        cy.contains('Welcome to your account. Here you can manage all of your personal information and orders');


    });
});
