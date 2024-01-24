describe('Setting a filter condition under Menu Name column but decided to clear it', () => {
    it('should still display the entire list in the eCommerce Order Time Settings table', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eCommerce Order Time Settings').click();
      cy.wait(5000);
      cy.get('span.filter').eq(10).click();
      cy.wait(2000);
      cy.get('#MenuNameoption').select('Starts with');
      cy.get('#MenuNametxt').type('Grill');
      cy.wait(2000);
      cy.get('button.dashboardbtn.filterbtn').eq(10).click();
      cy.get('span.filter').eq(10).click();
      cy.wait(2000);
      cy.get('button.dashboardbtn.clearfilter').eq(10).click();
      cy.get('#MenuNametxt').should('not.be.visible');
    

     


    })
})