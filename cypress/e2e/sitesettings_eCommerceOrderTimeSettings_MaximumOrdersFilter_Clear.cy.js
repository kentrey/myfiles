describe('login spec', () => {
    it('passes', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eCommerce Order Time Settings').click();
      cy.wait(5000);
      cy.get('span.filter').eq(7).click();
      cy.wait(2000);
      cy.get('#AvailableOrdersoption').select('Is not equal to');
      cy.get('#AvailableOrderstxt').type('5');
      cy.wait(2000);
      cy.get('button.dashboardbtn.filterbtn').eq(7).click();
      cy.get('span.filter').eq(7).click();
      cy.wait(2000);
      cy.get('button.dashboardbtn.clearfilter').eq(7).click();
      cy.get('#AvailableOrderstxt').should('not.be.visible');
    

      // Filter button for Maximum Orders not working


    })
})