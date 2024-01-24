describe('Opening the filter popup windows under eConnect Settings', () => {
    it('should open the respective filter popup windows for each column', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eConnect Settings').click();
      cy.wait(5000);
      cy.get('span.filter').eq(0).click();
      cy.wait(5000);
      cy.get('span.filter').eq(1).click();
      cy.wait(5000);
      cy.get('span.filter').eq(2).click();
      cy.wait(5000);
      cy.get('span.filter').eq(3).click();
      cy.wait(5000);
      cy.get('span.filter').eq(4).click();
      cy.wait(5000);
      cy.get('span.filter').eq(5).click();
      cy.wait(5000);
      cy.get('.fields').should('be.visible');
    })
})