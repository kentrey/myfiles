describe('login spec', () => {
    it('passes', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn').click();
      cy.get('img.img-fluid').click();
      cy.contains('a', 'Site Settings').click();
      cy.contains('h3', 'eCommerce Settings').click();
      cy.get('#IsFutureDateOnOff').uncheck();
      cy.get('button.dashboardbtn.ecom-settings').click();

      
    })
})