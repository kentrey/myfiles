describe('Setting a Contain filter condition uner Order Type column', () => {
    it('should display only list that contain specified text in the filter condition', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eCommerce Order Time Settings').click();
      cy.wait(5000);
      cy.get('span.filter').eq(8).click();
      cy.wait(2000);
      cy.get('#OrderTypeoption').select('Starts with');
      cy.get('#OrderTypetxt').type('Call');
      cy.wait(2000);
      cy.get('button.dashboardbtn.filterbtn').eq(8).click();
      cy.get('span.field-val') .should('contain.text', 'Call');


    })
})