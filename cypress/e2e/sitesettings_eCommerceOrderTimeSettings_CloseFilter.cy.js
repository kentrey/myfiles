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
      cy.get('span.filter').eq(6).click();
      cy.wait(3000);
      cy.get('span.closefilter').eq(6).click();
      cy.wait(1000);
      cy.get('span.filter').eq(7).click();
      cy.wait(3000);
      cy.get('span.closefilter').eq(7).click();
      cy.wait(1000);
      cy.get('span.filter').eq(8).click();
      cy.wait(3000);
      cy.get('span.closefilter').eq(8).click();
      cy.wait(1000);
      cy.get('span.filter').eq(9).click();
      cy.wait(3000);
      cy.get('span.closefilter').eq(9).click();
      cy.wait(1000);
      cy.get('span.filter').eq(10).click();
      cy.wait(3000);
      cy.get('span.closefilter').eq(10).click();
      cy.wait(1000);
      cy.get('span.filter').eq(11).click();
      cy.wait(3000);
      cy.get('span.closefilter').eq(11).click();
      cy.get('#IsActiveoption').should('not.be.visible');
    })
})