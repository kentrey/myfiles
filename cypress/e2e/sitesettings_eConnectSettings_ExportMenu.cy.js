describe('Export Menu button under eConnect Settings spec', () => {
    it('should successfully export the eConnect Settings table', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eConnect Settings').click();
      cy.wait(5000);
      cy.get('button.dashboardbtn.exportmenu').click()
      cy.get('button.dashboardbtn.exportmenu').should('be.visible');
      
    })
})