describe("On Linkedin", () => {

    it("I can login", () => {
        Cypress.on('uncaught:exception', () => false);
        cy.visit("https://www.linkedin.com");
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type("JohnJohn@yahoo.com");
        cy.get('#password').type("JohnJ0hn!");
        cy.get('.btn__primary--large').click();
        cy.get('#ember17').should("exist");
      
    });


});


