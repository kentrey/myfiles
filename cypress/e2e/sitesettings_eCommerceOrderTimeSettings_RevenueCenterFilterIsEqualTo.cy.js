describe('Setting Is Equal To filter condition under Revenue Center column', () => {
    it('should display only list items where Revenue Center Is Equal To the specified text', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eCommerce Order Time Settings').click();
      cy.wait(5000);
      cy.get('span.filter').eq(9).click();
      cy.wait(2000);
      cy.get('#RevenueCenteroption').select('Is equal to');
      cy.get('#RevenueCentertxt').type('Main Salon');
      cy.wait(2000);
      cy.get('button.dashboardbtn.filterbtn').eq(9).click();
      cy.get('span.field-val') .should('contain.text', 'Main Salon');


    })
})