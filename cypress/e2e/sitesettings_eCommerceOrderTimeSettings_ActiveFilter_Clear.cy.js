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
      cy.get('span.filter').eq(11).click();
      cy.wait(2000);
      cy.get('#IsActiveoption').select('Starts with');
      cy.get('#IsActivetxt').type('N');
      cy.wait(2000);
      cy.get('button.dashboardbtn.filterbtn').eq(11).click();
      cy.get('span.filter').eq(11).click();
      cy.wait(2000);
      cy.get('button.dashboardbtn.clearfilter').eq(11).click();
      cy.get('#IsActivetxt').should('not.be.visible');
    

     


    })
})