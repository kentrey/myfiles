describe('Adding a note in eCommerce Settings spec', () => {
    it('should successfully add the text in the Notes OE box', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eCommerce Settings').click();
      cy.get('#CommerceDisplayMessage').clear();
      cy.get('#CommerceDisplayMessage').type('Come In, We are Open');
      cy.get('button.dashboardbtn.ecom-settings').click();
      cy.get('textarea#CommerceDisplayMessage')
  .should('be.visible')  // Ensure the textarea is visible
  .should('have.value', 'Come In, We are Open');  // Ensure the textarea has the expected value

    })
})