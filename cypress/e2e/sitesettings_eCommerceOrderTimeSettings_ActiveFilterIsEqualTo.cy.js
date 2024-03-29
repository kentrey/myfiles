describe('Setting Is Equal to Filter condition under Active Column', () => {
    it('it should display only list items where Active column is equal to the specified text', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eCommerce Order Time Settings').click();
      cy.wait(5000);
      cy.get('span.filter').eq(11).click();
      cy.wait(2000);
      cy.get('#IsActiveoption').select('Is equal to');
      cy.get('#IsActivetxt').type('No');
      cy.wait(2000);
      cy.get('button.dashboardbtn.filterbtn').eq(11).click();
      cy.get('span.field-val') .should('contain.text', 'No');


    })
})