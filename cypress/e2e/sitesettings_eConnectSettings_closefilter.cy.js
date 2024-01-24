describe('Closing the popup filter window under eConnect Settings', () => {
    it('should close the respective filter popup windows', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eConnect Settings').click();
      cy.wait(5000);
      cy.get('span.filter').eq(0).click();
      cy.wait(3000);
      cy.get('span.closefilter').eq(0).click();
      cy.wait(1000);
      cy.get('span.filter').eq(1).click();
      cy.wait(3000);
      cy.get('span.closefilter').eq(1).click();
      cy.wait(1000);
      cy.get('span.filter').eq(2).click();
      cy.wait(3000);
      cy.get('span.closefilter').eq(2).click();
      cy.wait(1000);
      cy.get('span.filter').eq(3).click();
      cy.wait(3000);
      cy.get('span.closefilter').eq(3).click();
      cy.wait(1000);
      cy.get('span.filter').eq(4).click();
      cy.wait(3000);
      cy.get('span.closefilter').eq(4).click();
      cy.wait(1000);
      cy.get('span.filter').eq(5).click();
      cy.wait(3000);
      cy.get('span.closefilter').eq(5).click();
      cy.get('.fields').should('not.be.visible');
    })
})