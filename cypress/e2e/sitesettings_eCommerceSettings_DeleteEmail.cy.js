describe('Deleting email under eCommerce Settings spec', () => {
    it('should successfully removed the email in the list', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eCommerce Settings').click();
      cy.get('span.delete').eq(0).click();
      cy.get('button.dashboardbtn.ecom-settings').click();
      cy.get('button.dashboardbtn.ecom-settings').should('be.visible');


    })
})