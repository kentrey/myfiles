describe('Menu Items Information Hide Columns spec', () => {
    it('should not display columns that are not checked', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.wait(2000);
      cy.get('button.dashboardbtn.show-lists').click();
      cy.get('li input#column-upc').uncheck();
      cy.get('button.close').click();
      cy.get('div.colums-wrap.column.column-upc.ui-sortable-handle')
      .scrollIntoView()
      .should('not.be.visible'); 
      

     



    })
})