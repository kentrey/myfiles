describe('login spec', () => {
    it('passes', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eCommerce Settings').click();
      cy.get('#ResetDate').clear();
      cy.get('#ResetDate').type('08/25/2023');
      cy.get('button.dashboardbtn.ecom-settings').click();
      cy.get('input#ResetDate')
  .should('be.visible')  // Ensure the date field is visible
  .should('have.value', '08/25/2023');  // Ensure the date field has the expected date value

    })
})