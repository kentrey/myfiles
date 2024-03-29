describe('Setting Contains filter condition under API Key column', () => {
    it('should display only list items where API Key contains the specified text', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eConnect Settings').click();
      cy.wait(5000);
      cy.get('span.filter').eq(3).click();
      cy.wait(3000);
      cy.get('#APIKeyoption').select('Contains');
      cy.wait(2000);
      cy.get('#APIKeytxt').type('APIKeyFilter').should('have.value', 'APIKeyFilter');
      
    })
})