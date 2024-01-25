describe('Group Edit Modifiers tab Delete Modifier spec', () => {
    it('should not reflect the deleted Modifiers made in the Modifiers Information tab for each Menu items', () => {
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
      cy.get(`input.item-select.row-bodycheckbox[value="${49655}"]`).check();
      cy.get(`input.item-select.row-bodycheckbox[value="${49656}"]`).check();
      cy.get('.dashboardbtn.group-edit').click();
      cy.wait(2000);
      cy.get('div.heading li#Modifiers').click();
      cy.get('.Modifiers-search').click();
      cy.get('#search-mod').type('xxx');
      cy.get('#mod-list').contains('span', 'XXX-ADD MODIFIER').click();
      cy.get('.add-modiefier.dashboardbtn').click();
      cy.get('.Modifiers-search').click();
      cy.get('#mod-list').contains('span', 'XXX-ADD MODIFIER2').click();
      cy.get('.add-modiefier.dashboardbtn').click();
      cy.get('li[data-value="49648"] > .item-name').click();
      cy.get('div.field-col button.dashboardbtn.delete-mods').eq(0).click();
      cy.get('#web').click();
      cy.get('.Modifiers-search').click();
      cy.get('#mod-list').contains('span', 'XXX-ADD MODIFIER').click();
      cy.get('.add-modiefier.dashboardbtn').click();
      cy.get('.Modifiers-search').click();
      cy.get('#mod-list').contains('span', 'XXX-ADD MODIFIER2').click();
      cy.get('.add-modiefier.dashboardbtn').click();
      cy.get('li[data-value="49647"] > .item-name').eq(1).click();
      cy.get('div.field-col button.dashboardbtn.delete-mods').eq(1).click();
      cy.get('#saveModTab').click(); //loading error after clicking the Update button
      cy.wait(5000);
      cy.get('.tabs').should('be.visible');
      
     

     



    })
})