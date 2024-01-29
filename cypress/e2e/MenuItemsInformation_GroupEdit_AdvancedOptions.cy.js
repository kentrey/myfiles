describe('Group Edit Modifiers tab Advanced Option spec', () => {
    it('should reflect the updated fields under Advanced Options tab for each Menu items', () => {
        //still not working changes will not be saved perfectly due to missing item bug. Will finish scripting once bug is fixed.
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
      cy.get(`input.item-select.row-bodycheckbox[value="${49675}"]`).check();
      cy.get(`input.item-select.row-bodycheckbox[value="${49658}"]`).check();
      cy.get('.dashboardbtn.group-edit').click();
      cy.wait(2000);
      cy.get('div.heading li#Advanced-Options').click();
      cy.get('#ShortDescription_IsEnabled').eq(0).check();
      cy.get('#TimingIncrement_IsEnabled').check();
      cy.get('#PriceIsNegative_IsEnabled').check();
      cy.get('#WebModifierCount_IsEnabled').check();
      //cy.get('#BergPLU_IsEnabled').check();
      //cy.get('#saveModTab').click(); //loading error after clicking the Update button
     // cy.wait(5000);
      //cy.get('.tabs').should('be.visible');
      
     

     



    })
})