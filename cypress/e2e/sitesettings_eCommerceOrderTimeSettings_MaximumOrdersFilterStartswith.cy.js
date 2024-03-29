describe('Setting Starts With filter condition under Maximum Order column', () => {
    it('should display only list items where Maximum Order Starts with the specified number in the filter condition', () => {
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
      cy.get('#AvailableOrdersoption').select('Starts with');
      cy.get('#AvailableOrderstxt').type('1');
      cy.wait(2000);
      cy.get('button.dashboardbtn.filterbtn').eq(7).click();
      cy.get('span.field-val') .should('contain.text', '1');

      // Filter button for Maximum Orders not working


    })
})