describe('Group Edit Printing tab Update spec', () => {
    it('should reflect the changes made in the Printing Information tab for each Menu items', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.wait(2000);
      cy.get('input.search-people').type('XXX');
      cy.wait(2000);
      cy.get('button.dashboardbtn.searchitem').type('{enter}');
      cy.wait(3000);
      cy.get(`input.item-select.row-bodycheckbox[value="${49649}"]`).check();
      cy.get(`input.item-select.row-bodycheckbox[value="${49650}"]`).check();
      cy.get('.dashboardbtn.group-edit').click();
      cy.wait(2000);
      cy.get('div.heading li#Printing').click();
      cy.get('#savePrintingTab').click(); //loading error after clicking the Update button
      cy.wait(5000);
      cy.get('.tabs').should('be.visible');
      
     

     



    })
})