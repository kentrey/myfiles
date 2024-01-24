describe('Setting Filter conditions by item type', () => {
    it('should only display the Menu Items that met the item type being filtered', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.wait(2000);
      cy.get('#itemtype-filter').select('Modifier');
      cy.wait(3000);
      cy.get('#itemtype-filter').should('have.value', 'IsModifier');


     



    })
})