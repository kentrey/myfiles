describe('Group Edit Modifiers tab Update spec', () => {
    it('should reflect the changes made in the Modifiers Information tab for each Menu items', () => {
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
      cy.get(`input.item-select.row-bodycheckbox[value="${49651}"]`).check();
      cy.get(`input.item-select.row-bodycheckbox[value="${49652}"]`).check();
      cy.get('.dashboardbtn.group-edit').click();
      cy.wait(2000);
      cy.get('div.heading li#Modifiers').click();
      cy.get('#ModifierPriceLevel_IsEnabled').check();
      cy.get('#ModifierPriceLevel_FieldValue').clear();
      cy.get('#ModifierPriceLevel_FieldValue').type('25');
      cy.get('#MultAmount_IsEnabled').check();
      cy.get('#MultAmount_FieldValue').clear();
      cy.get('#MultAmount_FieldValue').type('2');
      cy.get('#ModifierPriceRounding_IsEnabled').check();
      cy.get('#ModifierPriceRounding_FieldValue').select('Round to Nearest Dime');
      cy.get('#HHColumnCount_IsEnabled').check();
      cy.get('#HHColumnCount_FieldValue').select('2 Columns');
      cy.get('#UseModifierMinSelect_IsEnabled').check();
      cy.get('#UseModifierMinSelect_FieldValue').check();
      cy.get('#ModifierMinSelect_FieldValue').clear();
      cy.get('#ModifierMinSelect_FieldValue').type('1');
      cy.get('#UseModifierMaxSelect_IsEnabled').check();
      cy.get('#UseModifierMaxSelect_FieldValue').check();
      cy.get('#ModifierMaxSelect_FieldValue').clear();
      cy.get('#ModifierMaxSelect_FieldValue').type('5');
      cy.get('#AllowModifierMaxBypass_IsEnabled').check();
      cy.get('#AllowModifierMaxBypass_FieldValue').check();
      cy.get('#MultModPrice_IsEnabled').check();
      cy.get('#MultModPrice_FieldValue').check();
      cy.get('#UsePizzaStyle_IsEnabled').check();
      cy.get('#UsePizzaStyle_FieldValue').check();
      cy.get('.Modifiers-search').click();
      cy.get('#search-mod').type('xxx');
      cy.get('#mod-list').contains('span', 'XXX-ADD MODIFIER').click();
      cy.get('.add-modiefier.dashboardbtn').click();
      cy.get('#web').click();
      cy.get('.Modifiers-search').click();
      cy.get('#mod-list').contains('span', 'XXX-ADD MODIFIER2').click();
      cy.get('.add-modiefier.dashboardbtn').click();
      cy.get('#saveModTab').click(); //loading error after clicking the Update button
      cy.wait(5000);
      cy.get('.tabs').should('be.visible');
      
     

     



    })
})