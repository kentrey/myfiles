describe('Setting a filter condition under Garcon Link column', () => {
    it('should successfully set a filter condition under Garcon Link column', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eConnect Settings').click();
      cy.wait(5000);
      cy.get('span.filter').eq(4).click();
      cy.wait(3000);
      cy.get('#GarconLinkoption').select('Contains');
      cy.wait(2000);
      cy.get('#GarconLinkoption').select('Starts with');
      cy.wait(2000);
      cy.get('#GarconLinkoption').select('Is equal to');
      cy.wait(2000);
      cy.get('#GarconLinkoption').select('Is not equal to');
      cy.wait(2000);
      cy.get('select#GarconLinkoption').should('be.visible');  // Ensure the dropdown is visible
  
    })
})