describe('Searching a keyword in Menu Items Information', () => {
    it('should display only those Menu Items that matches the searched text', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.get('input.search-people').type('Roasted Seaweed');
      cy.wait(2000);
      cy.get('button.dashboardbtn.searchitem').type('{enter}');
      cy.wait(3000);

     
      cy.get('div.column-contents').should('include.text', 'Roasted Seaweed');



    })
})