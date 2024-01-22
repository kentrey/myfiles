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
      cy.get('#IsActiveoption').select('Is not equal to');
      cy.get('#IsActivetxt').type('No');
      cy.wait(2000);
      cy.get('button.dashboardbtn.filterbtn').eq(11).click();
      cy.get('div.column-heading').should('be.visible').and('contain.text', 'Revenue Center');


    })
})