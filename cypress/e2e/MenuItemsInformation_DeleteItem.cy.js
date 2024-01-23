describe('Verify item is successfully deleted', () => {
    it('passes', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.wait(3000);
      cy.get('input.search-people').type('item name');
      cy.wait(2000);
      cy.get('button.dashboardbtn.searchitem').type('{enter}');
      cy.wait(3000);
      cy.get(`span.delete-row[data-id="${49637}"]`).click();  //data-id is dynamic thus need to be manually changed from time to time
      cy.wait(2000);
      cy.get(`div.btns-${49637} span.delete-row[data-id="${49637}"]`).click({multiple: true});
      cy.wait(2000);
      cy.get('h1').contains('Menu Items Information').should('be.visible');

      
     



    })
})