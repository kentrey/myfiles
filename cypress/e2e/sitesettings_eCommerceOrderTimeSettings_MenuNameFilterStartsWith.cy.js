describe('Setting Starts With filter condition under Menu Name column', () => {
    it('should display only list items where Menu Name Starts with the specified text in the filter condition', () => {
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
      cy.get('#MenuNametxt').type('T');
      cy.wait(2000);
      cy.get('button.dashboardbtn.filterbtn').eq(10).click();
      cy.get('div.column-heading').should('be.visible').and('contain.text', 'Revenue Center');


    })
})