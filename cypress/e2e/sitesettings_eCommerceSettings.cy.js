describe('eCommerce Settings spec', () => {
    it('should open eCommerce Settings submenus', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eCommerce Settings').click();
      cy.wait(5000);
      cy.contains('h3', 'eCommerce Settings').click();
      cy.contains('eCommerce Settings').should('be.visible');
      
    })
})