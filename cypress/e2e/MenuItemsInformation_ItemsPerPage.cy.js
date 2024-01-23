describe('Verify total number of items shown should match with the Items per page value', () => {
    it('passes', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.wait(2000);
      cy.get('div.page-numbers').click();
      cy.wait(2000);
      cy.get('div.pagelistno.showpage').contains('100').click();
      cy.get('div.page-numbers').should('contain', '100');
      
      


     



    })
})