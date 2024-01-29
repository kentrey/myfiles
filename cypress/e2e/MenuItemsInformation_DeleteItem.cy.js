describe('Deleting a Menu Item', () => {
    it('should successfully delete the menu item in the Menu Items Information table', () => {
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
      cy.get('div.row-column.btns-49668 span.delete-row[data-id="49668"]:first').click();
      cy.wait(2000);
      cy.get('div.confirmbtns button.yesconfirm').click();
      cy.wait(2000);
      cy.get('h1').contains('Menu Items Information').should('be.visible');

      //not working

      
     



    })
})