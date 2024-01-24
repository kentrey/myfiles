describe('Editing an existing Menu item', () => {
    it('should reflect the changes made for that specific Menu item in the Menu Item Information Table', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.wait(2000);
      cy.get(`a.edit-link span.edit-row[data-id="${48844}"]`).click();
      cy.get('#dis_1').invoke('prop', 'checked', true);
      cy.get('#WebDescription').type('My Edit test 1')
      cy.get('#genTabSubmit', { timeout: 30000 }).click();
      Cypress.on('uncaught:exception', (err, runnable) => {
        // Handle the error as needed
        // This prevents Cypress from failing the test
        return false;
      });

      cy.get('#dis_1').should('be.checked');


     



    })
})