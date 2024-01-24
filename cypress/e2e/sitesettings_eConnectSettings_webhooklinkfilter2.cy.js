describe('Setting Contains filter condition under Web Hook Link column', () => {
    it('should display only list items where Web Hook Link contains the specified text', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eConnect Settings').click();
      cy.wait(5000);
      cy.get('span.filter').eq(1).click();
      cy.wait(3000);
      cy.get('#WebHookLinkoption').select('Contains');
      cy.wait(2000);
      cy.get('#WebHookLinktxt').type('WebHookLinkFilter').should('have.value', 'WebHookLinkFilter');
      
    })
})