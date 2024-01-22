describe('login spec', () => {
    it('passes', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eCommerce Settings').click();
      cy.get('input#emaillist').type('kentrey@testing.com');
      cy.get('button.dashboardbtn.add-emaillist').click();
      cy.get('button.dashboardbtn.ecom-settings').click();
      cy.contains('kentrey@testing.com').should('be.visible');

    })
})